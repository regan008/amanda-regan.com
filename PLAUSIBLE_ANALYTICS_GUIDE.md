# Plausible Analytics Integration

**Status:** ✅ Already Integrated  
**Domain:** amanda-regan.com  
**Dashboard:** https://plausible.io/amanda-regan.com

---

## Current Setup

### Script Configuration
```html
<script defer data-domain="amanda-regan.com" src="https://plausible.io/js/script.outbound-links.js"></script>
```

**Location:** `layouts/partials/head.html:46`

**Configuration Details:**
- ✅ **defer attribute** — script loads asynchronously after page content (non-blocking)
- ✅ **data-domain** — correctly set to amanda-regan.com
- ✅ **script.outbound-links.js** — includes tracking for outbound link clicks (visitors clicking to publications, ORCID, Scholar, etc.)
- ✅ **Privacy-friendly** — Plausible is GDPR/CCPA compliant, no cookies, no consent banner needed

---

## What's Being Tracked

**Automatically (No Setup Required)**
- Page views (all pages on the site)
- Bounce rate
- Session duration
- Device type (desktop, mobile, tablet)
- Browser
- Country
- Referrer source (where visitors came from)
- Outbound link clicks (configured via `outbound-links.js`)

**Example outbound clicks being tracked:**
- Clicks to your ORCID profile
- Clicks to Google Scholar profile
- Clicks to publications (external links)
- Clicks to projects (GitHub, Shiny apps, etc.)
- Clicks to social links (GitHub, LinkedIn, Bluesky)

---

## How to Access Analytics

1. Go to **https://plausible.io**
2. Sign in with your account
3. Select **amanda-regan.com** from your sites
4. View real-time analytics dashboard

**Key Metrics to Monitor:**
- Top pages (which sections get the most visits)
- Traffic sources (organic search, direct, referrals)
- Outbound link clicks (see which projects/links are getting attention)
- Conversion events (if you set any up — see below)

---

## Optional Enhancements

### 1. Track Contact Form Submissions (Recommended)
If/when you add a contact form to the site, track submissions as a conversion event:

```html
<form onsubmit="plausible('Contact Form Submission')">
  <!-- form fields -->
</form>
```

Or via JavaScript:
```javascript
document.querySelector('form').addEventListener('submit', () => {
  plausible('Contact Form Submission');
});
```

**Why:** Know how many people are interested in contacting you.

### 2. Track Course Enrollment Interest
If you add a button to enroll in courses or request information:

```javascript
document.querySelector('.enroll-button').addEventListener('click', () => {
  plausible('Course Enrollment Interest');
});
```

### 3. Track Publication Downloads
If you add PDF or download links to your publications:

```javascript
document.querySelector('a.publication-download').addEventListener('click', () => {
  plausible('Publication Download');
});
```

### 4. Goals & Conversion Funnels
In your Plausible dashboard, you can create Goals:
- Set target: "Contact Form Submission"
- Track conversion rate (what % of visitors submit forms)
- Build funnels (e.g., "visits About page → views Publications → clicks publication link")

---

## Privacy & Compliance Notes

✅ **GDPR Compliant** — Plausible doesn't use cookies or store personal data  
✅ **CCPA Compliant** — No user tracking, no consent banners needed  
✅ **Privacy-Forward** — Unlike Google Analytics, Plausible is designed for privacy from the ground up

**Visitor Impact:** Your visitors won't see cookie banners or privacy consent dialogs. The analytics script runs in the background with zero friction.

---

## Current Status by Branch

- **Branch `2026-cd-resdesign`:** Plausible is integrated and tracking
- **Branch `hugo-main` (production):** Plausible was already integrated before this SEO pass
- **All branches:** Same Plausible script, same dashboard

**No action needed** — analytics will continue working through the redesign and deployment.

---

## Recommendations

### Do Now (No Cost)
- [ ] Sign in to your Plausible dashboard
- [ ] Get familiar with the interface
- [ ] Note your top pages and referral sources
- [ ] Set up any Goals you want to track (contact form, publications viewed, etc.)

### After Deployment
- [ ] Monitor traffic in the first 2 weeks post-redesign
- [ ] Watch for any traffic drops or changes (redesigns can affect page speed)
- [ ] Note which new pages get the most attention

### Consider Later
- [ ] If you add a newsletter or mailing list, track sign-ups
- [ ] If you add a shop/book sales, track purchase events
- [ ] Create funnels to understand visitor journeys (e.g., Home → About → Publications)

---

## Support & Documentation

- **Plausible Dashboard:** https://plausible.io/amanda-regan.com
- **Plausible Docs:** https://plausible.io/docs
- **Integration Guide:** https://plausible.io/docs/integration-guide
- **Custom Events:** https://plausible.io/docs/custom-events

---

## Related SEO Work

This Plausible setup complements the SEO work in `SEO_IMPLEMENTATION.md`:
- Plausible shows **which keywords** drive traffic (from Search Console)
- Plausible shows **how people behave** once they arrive (pages visited, time on page)
- Together, they give you a complete picture of your site's performance
