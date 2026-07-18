# The Physical AI Data Landscape

## Live site

[View the deployed Physical AI Data Landscape](https://physical-ai-landscape-research.vercel.app/)

A static editorial website mapping startups across the data and training
infrastructure behind Physical AI. The main page provides a visual taxonomy,
search, category filtering, compact source links, and company tiles. Each
company has a reusable one-page profile rendered from the same structured data.

## Run locally

From the project directory, start a simple HTTP server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

No build step or package installation is required.

Run the dependency-free data and integration validator with:

```bash
node tests/validate.mjs
```

## Research cutoff

Research is current as of **July 18, 2026**.

The landscape is selective rather than exhaustive. Companies were included
when they appeared active and had a meaningful, publicly supportable role in
creating, collecting, transforming, evaluating, or operationalizing data for
robot learning or embodied AI. Large incumbents, inactive or acquired
companies, academic-only projects, and generic annotation providers without a
clear robotics connection were excluded.

## Category definitions

1. **Real-world robot data** — robot trajectories, sensor streams, and
   deployment feedback captured from physical machines.
2. **Egocentric human data** — first-person video, human motion, wearable
   signals, and demonstrations showing how people perform tasks.
3. **Teleoperation and human demonstrations** — remote operation systems,
   intervention tools, and contributor networks that generate or apply human
   control.
4. **Simulation and synthetic data** — digital twins, world models, physics
   simulation, and generated scenarios for training and testing.
5. **Data infrastructure and evaluation** — ingestion, visualization, search,
   analytics, orchestration, testing, and production feedback systems.

Real-world data and teleoperation overlap: teleoperation is both an operating
method and a common way to generate robot demonstrations. Each company has one
primary category for placement and secondary tags for these overlaps.

## Funding interpretation

Funding figures use the latest defensible public total found by the research
cutoff. Company announcements and primary sources are preferred. Where only
individual rounds were disclosed, the site uses “at least” or “approximately”
and explains whether a total was calculated or supplied by a reputable company
database. Grants, debt, and commercial commitments are excluded unless a source
made their treatment inseparable; accelerator investments are explicitly
qualified.

Private-company funding is not audited public-market data. Profile caveats and
source links should be reviewed before using a figure in investment work.

## Project structure

- `index.html` — main landscape and methodology
- `company.html` — reusable company profile shell
- `companies.js` — categories and all structured company research
- `script.js` — landscape rendering, search, and filtering
- `company-page.js` — query-parameter profile rendering and invalid-ID state
- `styles.css` — responsive editorial design system
- `tests/validate.mjs` — schema, category, search, profile-ID, and HTML checks

## Add or update a company

1. Edit `companies.js`.
2. Add or update one object in `COMPANIES`, preserving all required fields.
3. Use a unique, URL-safe `id`.
4. Set `primaryCategory` to one of the IDs in `CATEGORIES`.
5. Add two to four direct source URLs that support the profile.
6. Qualify the funding display and update its `asOf` date and caveat.
7. Reload the site. The main card, filters, count, and profile update from the
   same record automatically.

## Limitations

- Private-company founding dates, headquarters, and cumulative funding totals
  are sometimes inconsistently reported.
- Some early-stage companies disclose a product direction but not pricing or a
  formal revenue model; those profiles describe only the observable route to
  market.
- The primary category is an editorial classification, not a claim that the
  company operates exclusively in that layer.
