# New Clue Consultants — Project Context

## Overview

This is the **New Clue Consultants** corporate website — an IT Training & Staffing Solutions company based in India (est. 2019). The site was originally built with vanilla HTML, Bootstrap, jQuery, and Swiper.js, and has been **rewritten as a React single-page application** using modern tooling.

**Live original (vanilla):** https://newclue.co.in/
**Repository:** https://github.com/prathamrohatgi26/newclue-consultants.git

## Tech Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| Framework   | React 19                           |
| Build Tool  | Vite 7                             |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite` plugin) |
| Icons       | react-icons (FontAwesome via `react-icons/fa`) |
| Carousel    | Swiper 12 (`swiper/react`)         |
| Font        | Google Fonts — Open Sans (400, 600, 700, italic) |
| Linting     | ESLint 9 with react-hooks + react-refresh plugins |

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project Structure

```
newclue/
├── index.html                  # HTML entry point (favicon, meta description, title)
├── vite.config.js              # Vite config: react() + tailwindcss() plugins
├── package.json                # name: "newclue"
├── public/
│   └── images/                 # All static images (downloaded from original site)
│       ├── header-background.jpg
│       ├── about-background.jpg
│       ├── contact-background.jpg
│       ├── about.jpg
│       ├── favicon.png
│       ├── service-icon-3.svg      # Classroom trainings icon
│       ├── header-expertise-icon-1.svg  # Virtual trainings icon
│       ├── service-icon-5.svg      # Onsite trainings icon
│       ├── testimonial-1.jpg       # Client logos
│       ├── testimonial-2.jpg
│       ├── testimonial-3.jpg
│       ├── testimonial-4.jpeg
│       ├── testimonial-4.webp
│       └── up-arrow.png
├── src/
│   ├── main.jsx                # React entry: renders <App /> into #root
│   ├── App.jsx                 # Assembles all section components in order
│   ├── index.css               # Global CSS: Google Font import, Tailwind import, base styles, Swiper overrides
│   ├── data/
│   │   └── courses.js          # Array of 22 past training courses (id, title, description)
│   └── components/
│       ├── Navbar.jsx           # Fixed top navbar with scroll-based bg change + mobile hamburger
│       ├── Header.jsx           # Hero section: heading, description, 3 expertise cards
│       ├── About.jsx            # About section: image, differentiators list, testimonial quote
│       ├── Services.jsx         # Dark bg section: 22 past course cards + CTA + wave SVG
│       ├── Statistics.jsx       # Animated count-up stats (IntersectionObserver triggered)
│       ├── Clients.jsx          # Swiper carousel of 5 client logos
│       ├── Contact.jsx          # Contact info with email + phone over dark gradient bg
│       └── Footer.jsx           # Footer with company info, social icons, copyright
```

## Page Sections (in order)

1. **Navbar** — Fixed top, transparent on desktop at top → `#f7f9fa` on scroll. Mobile hamburger with slide-in menu. Links: Home, About, Courses, Contact. Smooth scroll navigation.
2. **Header** — Background image with white gradient overlay. Blue heading "Training & Staffing Solutions". Description paragraph. Three side-by-side expertise cards (Classroom, Virtual, Onsite trainings) each with SVG icon + title + description.
3. **About** — Background image. Section label "ABOUT" + heading "Who we are and what we do". 3-column grid: left image, center differentiators with bullet squares, right italic testimonial quote with blue hr divider.
4. **Services** — Dark `#3f424b` background. Heading "Trainings Conducted In Past". 22 course cards with numbered blue circles. CTA text with "Contact us" link. Bottom wave SVG decoration.
5. **Statistics** — White background. 5 animated count-up numbers triggered on scroll into view (IntersectionObserver): 231 Happy Users, 385 Issues Solved, 159 Good Reviews, 127 Case Studies, 211 Orders Received.
6. **Clients** — Light gray `#f7f9fa` background. "OUR CLIENTS" label. Swiper carousel with 5 client logo images and navigation arrows.
7. **Contact** — Dark gradient overlay on background image. "Contact details" heading. Description text. Email (info@newclue.co.in) and phone (+91 8920825768) with circle icon badges.
8. **Footer** — Dark `#3f424b` background. 3 columns: company name + tagline, empty middle, social icons (Facebook, Twitter, Pinterest, Instagram) + "We would love to hear from you" text. Copyright bar below.

## Design System / Color Palette

| Color     | Hex       | Usage                                              |
|-----------|-----------|----------------------------------------------------|
| Blue      | `#129dd8` | Primary accent: headings, links, icons, section labels, buttons, hr dividers |
| Dark Gray | `#3f424b` | Dark section backgrounds (Services, Footer, Copyright), icon inner colors |
| Black     | `#333333` | Headings text (h1-h6)                              |
| Body Gray | `#6b747b` | Body/paragraph text, nav links                     |
| Light Gray| `#f7f9fa` | Navbar bg, Clients section bg                      |
| Light Text| `#efefef` | Text on dark backgrounds (Services course titles/descriptions) |
| Muted     | `#cacfdf` | Footer text, contact icon circle bg                |
| White     | `#ffffff` | Text on dark sections (Service heading, Contact heading/description) |

## Typography

- **Font Family:** "Open Sans", sans-serif
- **Body:** 400 weight, 1rem/1.625rem
- **Headings:** 700 weight, sizes from 1rem (h6) to 3.75rem (h1 large on desktop)
- **Section Labels:** 700 weight, 0.8125rem, `#129dd8`
- **Small text:** 0.875rem/1.5rem

## CSS Architecture

- Global base styles are in `@layer base` inside `src/index.css` so that Tailwind utility classes can override them (important — this was a bug fix)
- All component styling uses Tailwind utility classes directly (no separate CSS files per component)
- Some sections use inline `style` for `backgroundImage` (gradient overlays on header, contact)
- Swiper arrow overrides are in plain CSS in `index.css` (not in a layer, so they override Swiper defaults)
- Container max-width: `max-w-[1140px]` (matching Bootstrap's default container)

## Key Implementation Details

- **Smooth scroll:** Navbar links use `element.scrollIntoView({ behavior: 'smooth' })` via `handleNavClick`
- **Scroll-aware navbar:** `useEffect` with scroll listener toggles `scrolled` state at 60px threshold
- **Mobile menu:** Off-canvas pattern using `translate-x-full`/`translate-x-0` transition
- **Count-up animation:** Custom `useCountUp` hook using `requestAnimationFrame`, triggered by `IntersectionObserver` at 0.5 threshold
- **Course data:** Stored in `src/data/courses.js` as an exported array — easy to update
- **Client carousel:** Swiper with responsive breakpoints (1/2/3/4 slides) and navigation arrows

## Responsive Breakpoints

Follows Tailwind defaults with key layout changes:
- **Mobile (< 1024px):** Single column layouts, hamburger menu, stacked expertise cards
- **lg (1024px+):** Multi-column layouts, desktop navbar, inline expertise cards
- **xl (1280px+):** Wider spacing, larger fonts for h1

## Contact Info

- **Email:** info@newclue.co.in
- **Phone:** +91 8920825768
- **Company:** New Clue Consultants
- **Tagline:** Training & Staffing Solutions
