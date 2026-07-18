(() => {
  const root = document.querySelector("#profile-content");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const company = COMPANIES.find((item) => item.id === id);

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const categoryById = (categoryId) =>
    CATEGORIES.find((category) => category.id === categoryId);

  if (!company) {
    document.title = "Profile not found — The Physical AI Data Landscape";
    root.innerHTML = `
      <section class="profile-error" aria-labelledby="error-title">
        <p class="eyebrow">Profile unavailable</p>
        <h1 id="error-title">That company is not in this landscape.</h1>
        <p>The link may be incomplete or the company ID may have changed.</p>
        <a class="button" href="index.html#landscape">Return to the full landscape</a>
      </section>
    `;
    return;
  }

  const category = categoryById(company.primaryCategory);
  document.title = `${company.name} — The Physical AI Data Landscape`;

  const tags = company.secondaryCategories
    .map((tag) => `<span>${escapeHtml(tag)}</span>`)
    .join("");
  const products = company.products
    .map((product) => `<li>${escapeHtml(product)}</li>`)
    .join("");
  const sources = company.sources
    .map(
      (source, index) => `
        <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(source.label)}</strong>
          <span aria-hidden="true">↗</span>
        </a>
      `,
    )
    .join("");

  root.innerHTML = `
    <article class="company-profile category-${company.primaryCategory}">
      <header class="profile-hero">
        <div class="profile-hero-meta">
          <span>Company profile</span>
          <span>Research current as of July 2026</span>
        </div>
        <div class="profile-title-grid">
          <div>
            <p class="profile-category">${escapeHtml(category.name)}</p>
            <h1>${escapeHtml(company.name)}</h1>
            <p class="profile-summary">${escapeHtml(company.summary)}</p>
            <a class="button" href="${escapeHtml(company.website)}" target="_blank" rel="noopener noreferrer">
              Official website <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div class="profile-mark" aria-hidden="true">${escapeHtml(company.initials)}</div>
        </div>
      </header>

      <section class="profile-fact-band" aria-label="Company facts">
        <dl>
          <div>
            <dt>Founded</dt>
            <dd>${company.founded}</dd>
          </div>
          <div>
            <dt>Geographic base</dt>
            <dd>${escapeHtml(company.headquarters)}</dd>
          </div>
          <div>
            <dt>Total funding</dt>
            <dd>${escapeHtml(company.funding.display)}</dd>
            <small>As of ${escapeHtml(company.funding.asOf)}</small>
          </div>
          <div>
            <dt>Primary category</dt>
            <dd>${escapeHtml(category.name)}</dd>
          </div>
        </dl>
        <div class="profile-tags" aria-label="Secondary category tags">${tags}</div>
      </section>

      <section class="profile-content-grid">
        <div class="profile-main-column">
          <section class="profile-section" aria-labelledby="focus-title">
            <div class="profile-section-number">01</div>
            <div>
              <p class="eyebrow">Company focus</p>
              <h2 id="focus-title">Focus</h2>
              <p>${escapeHtml(company.focus)}</p>
            </div>
          </section>

          <section class="profile-section" aria-labelledby="products-title">
            <div class="profile-section-number">02</div>
            <div>
              <p class="eyebrow">What it offers</p>
              <h2 id="products-title">Products & services</h2>
              <ul class="product-list">${products}</ul>
            </div>
          </section>

          <section class="profile-section" aria-labelledby="business-title">
            <div class="profile-section-number">03</div>
            <div>
              <p class="eyebrow">Commercial approach</p>
              <h2 id="business-title">How it conducts business</h2>
              <p>${escapeHtml(company.businessApproach)}</p>
            </div>
          </section>
        </div>

        <aside class="profile-aside">
          <section class="funding-note">
            <p class="eyebrow">Funding note</p>
            <strong>${escapeHtml(company.funding.display)}</strong>
            <span>Current through ${escapeHtml(company.funding.asOf)}</span>
            <p>${escapeHtml(company.funding.caveat)}</p>
          </section>
          <section class="source-panel">
            <p class="eyebrow">Research sources</p>
            <div class="profile-sources">${sources}</div>
          </section>
          <a class="aside-back-link" href="index.html#landscape">
            <span aria-hidden="true">←</span>
            Browse all ${COMPANIES.length} companies
          </a>
        </aside>
      </section>
    </article>
  `;
})();
