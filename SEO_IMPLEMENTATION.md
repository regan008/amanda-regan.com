# SEO & Search Discoverability Implementation

**Status:** In Progress (core on-site work complete; awaiting deployment)  
**Last Updated:** 2026-06-24  
**Branch:** `2026-cd-resdesign`

## What's Complete ✅

### On-Site Changes (Deployed)
- [x] Name standardization: "Amanda Regan" display name everywhere (homepage H1, browser titles, OG tags)
  - Preserved "Amanda E. Regan" in `params.academicName` for citations and schema
  - Commit: `273e5b0`
  
- [x] Enriched Person JSON-LD on homepage
  - `alternateName`: "Amanda Regan"
  - `description`: site bio
  - `knowsAbout`: ["Digital history", "Computational history", "Artificial intelligence and history", "Digital humanities", "Text analysis", "Geospatial history"]
  - `alumniOf`: George Mason University
  - `sameAs`: includes GitHub, LinkedIn, Bluesky, ORCID, Scholar, Clemson department
  
- [x] Google Scholar citation meta tags on publication pages
  - `citation_title`, `citation_author`, `citation_publication_date`, `citation_journal_title`, `citation_publisher`, `citation_doi`, `citation_abstract_html_url`, `citation_fulltext_html_url`
  - Driven by publication frontmatter (`venue`, `publisher`, `link`, `year`, `coauthors`)
  
- [x] Visible social links in hero
  - ORCID (orcid.org/0000-0002-4260-5839)
  - Google Scholar (scholar.google.com/citations?user=nGmh2GUAAAAJ)
  
- [x] Unique per-page meta descriptions
  - About: "Historian of late-nineteenth and twentieth-century US history, specializing in digital methods, AI and historical research, and LGBTQ history."
  - Projects: "Digital and computational history research projects — interactive datasets, geospatial maps, and digital tools that reveal hidden patterns in historical evidence."
  - Courses: "Teaching — Amanda E. Regan's graduate and undergraduate digital history courses at Clemson University."
  - Home: site default (broader scope)
  
- [x] Search Console verification meta-tag slot
  - `params.googleSiteVerification` in hugo.toml (empty, awaiting token)
  - Meta tag renders conditionally in head.html

### User-Side Actions (Complete)
- [x] Created Wikidata item
  - Label: Amanda E. Regan
  - Description: American historian; digital and computational historian
  - Aliases: Amanda Regan
  - Statements: instance of human, occupation (historian, university teacher), employer (Clemson University), educated at (George Mason University), field of work (digital history, digital humanities, computational history), ORCID iD (0000-0002-4260-5839), Google Scholar author ID (nGmh2GUAAAAJ), official website (https://amanda-regan.com)
  
- [x] Updated ORCID profile
  - Homepage field: https://amanda-regan.com
  
- [x] Updated Google Scholar profile
  - Homepage field: https://amanda-regan.com

---

## What's Pending ⏳

### Before Deployment (Current Branch)
- [ ] Finish redesign on `2026-cd-resdesign`
- [ ] Merge to `hugo-main` and deploy to production
- [ ] Verify site is live and accessible at https://amanda-regan.com

### After Deployment
1. **Google Search Console Verification**
   - ⏳ Create property in Google Search Console (amanda-regan.com)
   - ⏳ Choose HTML tag verification
   - ⏳ Copy verification token from Google
   - ⏳ Paste token into `hugo.toml` under `params.googleSiteVerification = "..."`
   - ⏳ Redeploy site
   - ⏳ Return to Search Console and click "Verify"
   - ⏳ Once verified, navigate to Sitemaps section
   - ⏳ Submit `https://amanda-regan.com/sitemap.xml`

2. **Optional: Bing Webmaster Tools**
   - ⏳ Go to bing.com/webmasters
   - ⏳ Add property for amanda-regan.com
   - ⏳ Submit sitemap

3. **Optional: Clemson Faculty Bio Backlink**
   - ⏳ Ensure Clemson faculty profile links back to https://amanda-regan.com

---

## Expected Outcomes & Timeline

### Short-term (Days to Weeks)
- Google Scholar will begin indexing individual publication pages via citation meta tags
- Wikidata item (already created) will be indexed by Google's Knowledge Graph
- Your name searches ("Amanda Regan", "Amanda E. Regan") will resolve to your site and profiles

### Medium-term (Weeks to Months)
- Knowledge Panel may appear for your name (if Google grants one — timing is not guaranteed)
- Topic searches like "digital history Clemson" may surface your site
- Long-tail searches like "Amanda Regan digital historian" will improve ranking

### Long-term (Months+)
- Generic searches like "digital history" will slowly improve as backlinks accumulate and content ages
- Scholar ranking for your publications will stabilize based on citation counts

---

## Technical Details

### Files Modified (Commit 273e5b0)
- `hugo.toml` — academicName, googleSiteVerification, scholar ID
- `content/_index.md` — title standardized to "Amanda Regan"
- `content/about.md` — unique description added
- `content/projects/_index.md` — unique description + real intro copy
- `layouts/partials/person-jsonld.html` — enriched schema (alternateName, knowsAbout, alumniOf, Scholar in sameAs)
- `layouts/partials/head.html` — citation meta tags + GSC verification meta
- `layouts/partials/social-icons.html` — ORCID + Scholar icons/links

### Build Verification
- Hugo build: 110 pages, clean (no errors)
- Person JSON-LD: all new fields render correctly
- Citation meta tags: present on publication pages
- Social icons: both ORCID and Scholar links visible
- Meta descriptions: unique per landing page

---

## Notes

- The site is currently on branch `2026-cd-resdesign` (redesign in progress)
- Search Console and Bing setup should happen *after* deployment to avoid confusion with testing/staging versions
- Wikidata, ORCID, and Scholar profile updates are persistent and don't depend on deployment
- Citation meta tags begin working immediately once the site is live; Scholar indexing takes time
