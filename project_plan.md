# Partners in Sports — Corporate Website

## 1. Project Description
A corporate marketing website rebuilt and modernised from partnersinsports.co.kr, the site of Partners in Sports (파트너스인스포츠) — a sports business and consulting company based in Seoul. Target users are sports organisations, federations, universities, companies and athletes looking for research, event consulting, global partnership and merchandising support. Core value: communicate clearly who the company is, showcase its projects early, explain its services, and convert visitors into enquiries.

## 2. Page Structure
Multi-page corporate website. The homepage is a concise gateway; detailed content lives on dedicated pages.
- `/` - Homepage gateway (short, intentional flow):
  - Hero — full-screen "YOUR BEST PARTNER" with rotating sports imagery
  - Our Work — four business-area gateways (Research & Strategy, Sporting Events, Global Partnership, Merchandising), no section number
  - About / Projects — two large editorial navigation panels leading to the dedicated pages
  - Company information + Contact CTA — concise facts (name, CEO, tel, address) with a Contact link
- `/about` - Dedicated company introduction / identity / philosophy / pillars page (brand accent: cyan)
- `/projects` - Dedicated portfolio and project exploration page (brand accent: red). Business-area filtering happens here via `?area=` (research / events / global), so no separate area pages exist.
- `/projects/:slug` - A single project detail screen (e.g. dogsports-2025, chungcheong-2027-operations). Legacy business-area URLs redirect to `/projects?area=` with that filter pre-selected.
- `/business` - Dedicated business areas and services page (brand accent: green)
- `/contact` - Contact details, map and business enquiry form (brand accent: ink)
- `*` - Not found

## 3. Core Features
- [x] Sticky header with page-based navigation, one brand colour per menu item revealed via the underline on hover/active, and a mobile menu
- [x] Full-screen hero with crossfading sports imagery, marquee keyword strip and slide indicators
- [x] Our Work section as an immediate overview and gateway into each business area (no section number)
- [x] Two large editorial About / Projects navigation gateways on the homepage, each using only its own brand colour
- [x] Concise homepage company-information block with a clear Contact CTA
- [x] Dedicated About, Projects, Business and Contact pages (page numbers 01–04)
- [x] Company history timeline (HISTORY · 연혁) living on the About page below the work areas, with placeholder 20XX milestones to be replaced with confirmed dates
- [x] Business enquiry form (built-in Form) on the Contact page with validation and inline status feedback
- [x] Google Maps embed of the office location
- [x] Scroll-reveal animations and smooth scrolling

## 4. Data Model Design
No database is required at this stage. All displayed content is static marketing content. Form submissions are handled by the built-in Form service, so no persistent tables, authentication or storage are needed.

Important content note: real projects, clients, years, statistics, partners and company milestones have NOT yet been provided. These are represented by clearly marked placeholders (e.g. "Project Title Placeholder", year "20XX", "Client / Organisation — to be added") rather than invented facts. They should be replaced with confirmed content before launch.

## 5. Backend / Third-party Integration Plan
- Database: not connected — static content only
- Forms: built-in Form service (business enquiry form)
- Maps: Google Maps embed (no key required)
- Shopify: not needed at this stage
- Stripe / other payments: not needed at this stage

## 6. Development Phase Plan

### Phase 1: Design system & site shell
- Goal: Establish the visual language and shared chrome.
- Deliverable: Neutral palette with ember-orange brand accent, Archivo + Inter typography, base styles, header and footer. ✅ Completed

### Phase 2: One-page homepage
- Goal: Deliver the full landing experience focused on the portfolio.
- Deliverable: Hero, intro strip, projects grid, about, what we do, journey and contact sections. ✅ Completed

### Phase 3: Real content integration
- Goal: Replace placeholders with confirmed company content.
- Deliverable: Real project titles, clients and years, confirmed company history, contact email and social channels.

### Phase 4: Polish & launch readiness
- Goal: SEO, responsive QA and publishing.
- Deliverable: SEO metadata review, cross-device QA, publishing via the Publish feature.