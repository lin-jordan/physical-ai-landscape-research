import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const projectRoot = new URL("../", import.meta.url);
const read = (filename) =>
  fs.readFileSync(new URL(filename, projectRoot), "utf8");

const dataContext = {};
vm.createContext(dataContext);
vm.runInContext(
  `${read("companies.js")}\nthis.landscapeData = { CATEGORIES, COMPANIES };`,
  dataContext,
);

const { CATEGORIES, COMPANIES } = dataContext.landscapeData;
const categoryIds = new Set(CATEGORIES.map(({ id }) => id));
const companyIds = new Set();
const requiredStrings = [
  "id",
  "name",
  "initials",
  "website",
  "headquarters",
  "primaryCategory",
  "summary",
  "focus",
  "businessApproach",
];

assert.equal(CATEGORIES.length, 5, "The taxonomy must contain five categories.");
assert.equal(categoryIds.size, CATEGORIES.length, "Category IDs must be unique.");
assert.ok(
  COMPANIES.length >= 15 && COMPANIES.length <= 20,
  "The landscape must contain 15–20 companies.",
);

for (const company of COMPANIES) {
  for (const field of requiredStrings) {
    assert.equal(
      typeof company[field],
      "string",
      `${company.name ?? company.id}: ${field} must be a string.`,
    );
    assert.ok(
      company[field].trim(),
      `${company.name ?? company.id}: ${field} cannot be empty.`,
    );
  }

  assert.match(
    company.id,
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    `${company.name}: id must be URL-safe.`,
  );
  assert.ok(!companyIds.has(company.id), `${company.name}: duplicate company ID.`);
  companyIds.add(company.id);

  assert.ok(
    Number.isInteger(company.founded) &&
      company.founded >= 2000 &&
      company.founded <= 2026,
    `${company.name}: founded must be a plausible year.`,
  );
  assert.ok(
    categoryIds.has(company.primaryCategory),
    `${company.name}: unknown primary category.`,
  );
  assert.ok(
    Array.isArray(company.secondaryCategories) &&
      company.secondaryCategories.length >= 1,
    `${company.name}: add at least one secondary category.`,
  );
  assert.ok(
    Array.isArray(company.products) && company.products.length >= 1,
    `${company.name}: add at least one product or service.`,
  );
  assert.equal(
    new Set(company.products).size,
    company.products.length,
    `${company.name}: products and services must be unique.`,
  );
  assert.equal(
    new Set(company.secondaryCategories).size,
    company.secondaryCategories.length,
    `${company.name}: secondary categories must be unique.`,
  );

  for (const field of ["display", "asOf", "caveat"]) {
    assert.ok(
      company.funding?.[field]?.trim(),
      `${company.name}: funding.${field} is required.`,
    );
  }

  assert.ok(
    company.sources.length >= 2 && company.sources.length <= 4,
    `${company.name}: include two to four sources.`,
  );
  const sourceUrls = new Set();
  for (const source of company.sources) {
    assert.ok(source.label?.trim(), `${company.name}: source label is required.`);
    const url = new URL(source.url);
    assert.equal(url.protocol, "https:", `${company.name}: sources must use HTTPS.`);
    assert.ok(
      !sourceUrls.has(source.url),
      `${company.name}: source URLs must be unique.`,
    );
    sourceUrls.add(source.url);
  }

  const website = new URL(company.website);
  assert.equal(website.protocol, "https:", `${company.name}: website must use HTTPS.`);
}

for (const category of CATEGORIES) {
  const count = COMPANIES.filter(
    ({ primaryCategory }) => primaryCategory === category.id,
  ).length;
  assert.ok(count >= 1, `${category.name}: category cannot be empty.`);
}

const search = (term, category = "all") => {
  const normalized = term.trim().toLowerCase();
  return COMPANIES.filter((company) => {
    const categoryMatch =
      category === "all" || company.primaryCategory === category;
    const haystack = [
      company.name,
      company.summary,
      company.focus,
      company.primaryCategory,
      ...company.secondaryCategories,
      ...company.products,
    ]
      .join(" ")
      .toLowerCase();
    return categoryMatch && haystack.includes(normalized);
  });
};

assert.equal(search("").length, COMPANIES.length, "Empty search must show all.");
assert.equal(
  search("foxglove")
    .map(({ id }) => id)
    .join(","),
  "foxglove",
  "Company-name search must return the expected profile.",
);
assert.ok(search("teleoperation").length > 0, "Capability search must return matches.");
assert.equal(
  search("", "simulation-synthetic-data").length,
  4,
  "Simulation category filter count changed unexpectedly.",
);
assert.equal(
  search("", "egocentric-human-data").length,
  3,
  "Egocentric category filter count changed unexpectedly.",
);
assert.equal(
  COMPANIES.find(({ id }) => id === "not-a-company"),
  undefined,
  "Invalid IDs must not resolve to a company.",
);

const indexHtml = read("index.html");
const companyHtml = read("company.html");
for (const requiredId of [
  "taxonomy-grid",
  "category-filters",
  "company-search",
  "landscape-sections",
  "empty-state",
]) {
  assert.match(indexHtml, new RegExp(`id="${requiredId}"`));
}
assert.match(indexHtml, /companies\.js/);
assert.match(indexHtml, /script\.js/);
assert.match(companyHtml, /id="profile-content"/);
assert.match(companyHtml, /companies\.js/);
assert.match(companyHtml, /company-page\.js/);

const createElementStub = () => {
  const element = {
    innerHTML: "",
    hidden: false,
    textContent: "",
    value: "",
    dataset: {},
    listeners: {},
    lastQueryResults: [],
    addEventListener(type, callback) {
      this.listeners[type] = callback;
    },
    focus() {},
    querySelectorAll(selector) {
      if (![".filter-button", ".taxonomy-filter"].includes(selector)) return [];
      this.lastQueryResults = [
        ...this.innerHTML.matchAll(/data-category="([^"]+)"/g),
      ].map(([, category]) => {
        const child = createElementStub();
        child.dataset.category = category;
        return child;
      });
      return this.lastQueryResults;
    },
  };
  return element;
};

const landscapeNodes = Object.fromEntries(
  [
    "#company-search",
    "#category-filters",
    "#landscape-sections",
    "#taxonomy-grid",
    "#results-summary",
    "#empty-state",
    "#clear-filters",
    "#company-count",
  ].map((selector) => [selector, createElementStub()]),
);
const landscapeContext = {
  document: {
    querySelector(selector) {
      return landscapeNodes[selector] ?? createElementStub();
    },
  },
};
vm.createContext(landscapeContext);
vm.runInContext(
  `${read("companies.js")}\n${read("script.js")}`,
  landscapeContext,
);
assert.equal(landscapeNodes["#company-count"].textContent, COMPANIES.length);
assert.match(
  landscapeNodes["#results-summary"].textContent,
  /Showing all 18 companies/,
);
for (const company of COMPANIES) {
  assert.ok(
    landscapeNodes["#landscape-sections"].innerHTML.includes(
      `company.html?id=${company.id}`,
    ),
    `${company.name}: landscape profile link was not rendered.`,
  );
}

landscapeNodes["#company-search"].listeners.input({
  target: { value: "Foxglove" },
});
assert.match(landscapeNodes["#landscape-sections"].innerHTML, /Foxglove/);
assert.doesNotMatch(landscapeNodes["#landscape-sections"].innerHTML, /Roboto/);

landscapeNodes["#company-search"].listeners.input({
  target: { value: "failure analysis" },
});
assert.match(landscapeNodes["#landscape-sections"].innerHTML, /Roboto/);

landscapeNodes["#company-search"].listeners.input({
  target: { value: "no-company-matches-this" },
});
assert.equal(landscapeNodes["#empty-state"].hidden, false);
landscapeNodes["#clear-filters"].listeners.click();
assert.equal(landscapeNodes["#empty-state"].hidden, true);

for (const category of CATEGORIES) {
  const filterButton = landscapeNodes[
    "#category-filters"
  ].lastQueryResults.find(({ dataset }) => dataset.category === category.id);
  assert.ok(filterButton, `${category.name}: category filter was not rendered.`);
  filterButton.listeners.click();
  const renderedCards = (
    landscapeNodes["#landscape-sections"].innerHTML.match(
      /class="company-card /g,
    ) ?? []
  ).length;
  const expectedCards = COMPANIES.filter(
    ({ primaryCategory }) => primaryCategory === category.id,
  ).length;
  assert.equal(
    renderedCards,
    expectedCards,
    `${category.name}: category filter rendered the wrong number of companies.`,
  );
}
const allButton = landscapeNodes["#category-filters"].lastQueryResults.find(
  ({ dataset }) => dataset.category === "all",
);
allButton.listeners.click();
assert.match(landscapeNodes["#results-summary"].textContent, /Showing all 18/);

for (const company of COMPANIES) {
  const profileRoot = createElementStub();
  const profileDocument = {
    title: "",
    querySelector(selector) {
      assert.equal(selector, "#profile-content");
      return profileRoot;
    },
  };
  const profileContext = {
    document: profileDocument,
    URLSearchParams,
    window: { location: { search: `?id=${company.id}` } },
  };
  vm.createContext(profileContext);
  vm.runInContext(
    `${read("companies.js")}\n${read("company-page.js")}`,
    profileContext,
  );
  assert.match(
    profileDocument.title,
    new RegExp(company.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
  );
  assert.ok(
    profileRoot.innerHTML.includes(company.summary),
    `${company.name}: profile summary was not rendered.`,
  );
  assert.ok(
    profileRoot.innerHTML.includes(company.funding.caveat),
    `${company.name}: profile funding caveat was not rendered.`,
  );
  assert.ok(
    profileRoot.innerHTML.includes("index.html#landscape"),
    `${company.name}: profile back link was not rendered.`,
  );
}

const invalidProfileRoot = createElementStub();
const invalidProfileDocument = {
  title: "",
  querySelector() {
    return invalidProfileRoot;
  },
};
const invalidProfileContext = {
  document: invalidProfileDocument,
  URLSearchParams,
  window: { location: { search: "?id=not-a-company" } },
};
vm.createContext(invalidProfileContext);
vm.runInContext(
  `${read("companies.js")}\n${read("company-page.js")}`,
  invalidProfileContext,
);
assert.match(invalidProfileDocument.title, /Profile not found/);
assert.match(invalidProfileRoot.innerHTML, /Return to the full landscape/);

const counts = Object.fromEntries(
  CATEGORIES.map((category) => [
    category.short,
    COMPANIES.filter(
      ({ primaryCategory }) => primaryCategory === category.id,
    ).length,
  ]),
);

console.log(`Validated ${COMPANIES.length} companies across 5 categories.`);
console.log(counts);
