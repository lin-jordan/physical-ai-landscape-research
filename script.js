(() => {
  const searchInput = document.querySelector("#company-search");
  const filtersRoot = document.querySelector("#category-filters");
  const sectionsRoot = document.querySelector("#landscape-sections");
  const taxonomyRoot = document.querySelector("#taxonomy-grid");
  const summary = document.querySelector("#results-summary");
  const emptyState = document.querySelector("#empty-state");
  const clearButton = document.querySelector("#clear-filters");
  const companyCount = document.querySelector("#company-count");

  let activeCategory = "all";
  let searchTerm = "";

  const externalAttrs = 'target="_blank" rel="noopener noreferrer"';

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const categoryById = (id) => CATEGORIES.find((category) => category.id === id);

  function renderTaxonomy() {
    taxonomyRoot.innerHTML = CATEGORIES.map((category) => {
      const count = COMPANIES.filter(
        (company) => company.primaryCategory === category.id,
      ).length;

      return `
        <article class="taxonomy-card category-${category.id}">
          <div class="taxonomy-meta">
            <span>${category.number}</span>
            <span>${count.toString().padStart(2, "0")} companies</span>
          </div>
          <h3>${escapeHtml(category.name)}</h3>
          <p>${escapeHtml(category.description)}</p>
          <button class="taxonomy-filter" type="button" data-category="${category.id}">
            Explore layer <span aria-hidden="true">↓</span>
          </button>
        </article>
      `;
    }).join("");

    taxonomyRoot.querySelectorAll(".taxonomy-filter").forEach((button) => {
      button.addEventListener("click", () => {
        setActiveCategory(button.dataset.category);
        document.querySelector("#landscape").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function renderFilters() {
    const filterOptions = [
      { id: "all", name: "View all", count: COMPANIES.length },
      ...CATEGORIES.map((category) => ({
        id: category.id,
        name: category.short,
        count: COMPANIES.filter(
          (company) => company.primaryCategory === category.id,
        ).length,
      })),
    ];

    filtersRoot.innerHTML = filterOptions
      .map(
        (option) => `
          <button
            type="button"
            class="filter-button${option.id === activeCategory ? " is-active" : ""}"
            data-category="${option.id}"
            aria-pressed="${option.id === activeCategory}"
          >
            <span>${escapeHtml(option.name)}</span>
            <span>${option.count.toString().padStart(2, "0")}</span>
          </button>
        `,
      )
      .join("");

    filtersRoot.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", () => setActiveCategory(button.dataset.category));
    });
  }

  function companyMatches(company) {
    const categoryMatch =
      activeCategory === "all" || company.primaryCategory === activeCategory;
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
    return categoryMatch && haystack.includes(searchTerm);
  }

  function renderSources(sources) {
    return sources
      .slice(0, 3)
      .map(
        (source) =>
          `<a href="${escapeHtml(source.url)}" ${externalAttrs}>${escapeHtml(source.label)} ↗</a>`,
      )
      .join("");
  }

  function renderCard(company) {
    const category = categoryById(company.primaryCategory);
    const tags = company.secondaryCategories
      .slice(0, 3)
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");

    return `
      <article class="company-card category-${company.primaryCategory}">
        <div class="company-card-top">
          <span class="company-initials" aria-hidden="true">${escapeHtml(company.initials)}</span>
          <span class="company-founded">Est. ${company.founded}</span>
        </div>
        <div class="company-card-body">
          <p class="company-category">${escapeHtml(category.name)}</p>
          <h4>${escapeHtml(company.name)}</h4>
          <p class="company-summary">${escapeHtml(company.summary)}</p>
          <div class="tag-list" aria-label="Secondary categories">${tags}</div>
        </div>
        <dl class="company-facts">
          <div>
            <dt>Funding</dt>
            <dd>${escapeHtml(company.funding.display)}</dd>
          </div>
          <div>
            <dt>Current through</dt>
            <dd>${escapeHtml(company.funding.asOf)}</dd>
          </div>
        </dl>
        <div class="company-card-actions">
          <a class="profile-action" href="company.html?id=${encodeURIComponent(company.id)}">
            View profile <span aria-hidden="true">→</span>
          </a>
          <div class="card-sources" aria-label="Sources for ${escapeHtml(company.name)}">
            ${renderSources(company.sources)}
          </div>
        </div>
      </article>
    `;
  }

  function renderLandscape() {
    const matching = COMPANIES.filter(companyMatches);
    const visibleCategories = CATEGORIES.filter(
      (category) =>
        (activeCategory === "all" || category.id === activeCategory) &&
        matching.some((company) => company.primaryCategory === category.id),
    );

    sectionsRoot.innerHTML = visibleCategories
      .map((category) => {
        const companies = matching.filter(
          (company) => company.primaryCategory === category.id,
        );
        return `
          <section class="category-section category-${category.id}" aria-labelledby="heading-${category.id}">
            <div class="category-heading">
              <div class="category-index">${category.number}</div>
              <div>
                <p>${escapeHtml(category.short)}</p>
                <h3 id="heading-${category.id}">${escapeHtml(category.name)}</h3>
              </div>
              <p>${escapeHtml(category.description)}</p>
              <span>${companies.length.toString().padStart(2, "0")}</span>
            </div>
            <div class="company-grid">
              ${companies.map(renderCard).join("")}
            </div>
          </section>
        `;
      })
      .join("");

    emptyState.hidden = matching.length > 0;
    const categoryName =
      activeCategory === "all"
        ? "all categories"
        : categoryById(activeCategory).name.toLowerCase();
    summary.textContent =
      matching.length === COMPANIES.length
        ? `Showing all ${COMPANIES.length} companies.`
        : `Showing ${matching.length} ${matching.length === 1 ? "company" : "companies"} in ${categoryName}.`;
  }

  function setActiveCategory(categoryId) {
    activeCategory = categoryId;
    renderFilters();
    renderLandscape();
  }

  function resetFilters() {
    activeCategory = "all";
    searchTerm = "";
    searchInput.value = "";
    renderFilters();
    renderLandscape();
    searchInput.focus();
  }

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderLandscape();
  });
  clearButton.addEventListener("click", resetFilters);

  companyCount.textContent = COMPANIES.length;
  renderTaxonomy();
  renderFilters();
  renderLandscape();
})();
