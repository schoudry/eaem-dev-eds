# Migration Scope Analysis
## Vanguard Investor Website

**Prepared for:** Adobe Edge Delivery Services Migration
**Site URL:** https://investor.vanguard.com/
**Date:** January 29, 2026

---

## Executive Summary

This document provides a comprehensive analysis of the Vanguard Investor website for migration to Adobe Edge Delivery Services. The site is a large-scale financial services platform with approximately 200+ pages across 8 distinct page templates.

**Key Findings:**
- 8 page templates identified requiring custom development
- 12-15 custom blocks needed
- Complex navigation (mega menu) requires special attention
- Extensive legal/regulatory content throughout

---

## Site Overview

| Attribute | Details |
|-----------|---------|
| **Industry** | Financial Services / Investment Management |
| **Estimated Page Count** | 200+ pages |
| **Primary Audience** | Retail investors |
| **Content Types** | Marketing pages, educational articles, product information, tools |

---

## Page Templates Identified

### 1. Homepage Template
**URL:** `/`
**Complexity:** High
**Priority:** P1

**Key Sections:**
- Hero carousel with rotating promotions
- Goal-based navigation cards
- Investment products grid
- Video testimonial section
- Statistics display (50M+ investors, 84% outperformance)
- Awards and recognition
- Newsletter signup

---

### 2. Product Hub Template
**URL:** `/investment-products`
**Complexity:** High
**Priority:** P1

**Key Sections:**
- Hero with lifestyle imagery
- Expandable product category accordions
- Investment search widget
- Interactive comparison tool
- Customer testimonial quote
- Account preview carousel
- FAQ accordion section
- Email newsletter signup

---

### 3. Service Comparison Template
**URL:** `/advice`
**Complexity:** High
**Priority:** P2

**Key Sections:**
- Hero with background image overlay
- Expandable service tier accordions
- Feature comparison table with checkmarks
- Quiz/recommendation promo
- FAQ section
- Resource cards grid
- Legal disclaimers

---

### 4. Category Hub Template
**URL:** `/accounts-plans`
**Complexity:** Medium-High
**Priority:** P2

**Key Sections:**
- Hero with Quick-Start Tool CTA
- Filter tab navigation (Trading, Retirement, Savings, etc.)
- Fee transparency callout
- Two-column comparison (DIY vs Advisor)
- Awards badge
- Resource cards
- FAQ accordion
- Newsletter signup

---

### 5. Content Hub Template
**URL:** `/investor-resources-education`
**Complexity:** High
**Priority:** P2

**Key Sections:**
- Minimal hero with text overlay
- Featured article cards with category tags
- Topic-based carousel/slider
- Tools and calculators section
- Mobile app promotion with QR code
- Topic filter dropdown with article listings
- Newsletter signup

---

### 6. Brand/About Template
**URL:** `/about-us`
**Complexity:** Medium
**Priority:** P3

**Key Sections:**
- Distinctive hero (group photo forming "V")
- Historical timeline promo
- Awards section with 6 award cards
- Impact statistics (50M+ clients, 458 funds, etc.)
- Three-column resource cards
- Extensive footnotes

---

### 7. Article Template
**URL:** `/investor-resources-education/article/*`
**Complexity:** Medium
**Priority:** P1

**Key Sections:**
- Article metadata (category, read time, date)
- Social/save/print actions
- Featured image
- Rich text content with inline links
- Numbered list items with icons
- CTA callout boxes
- Related articles grid
- Footnotes and disclaimers

---

### 8. Product Detail Template
**URL:** `/investment-products/etfs`, `/investment-products/mutual-funds`
**Complexity:** Medium
**Priority:** P2

**Key Sections:**
- Product-specific hero
- Feature highlights
- Comparison content
- Related products
- FAQ section

---

## Block Inventory

### Core Blocks Required

| Block Name | Description | Estimated Usage |
|------------|-------------|-----------------|
| **Hero** | Image + headline + CTA overlay | All landing pages |
| **Hero Carousel** | Rotating hero with pagination | Homepage |
| **Cards** | 2-3 column grid with image/icon + text + CTA | 10+ pages |
| **FAQ Accordion** | Expandable Q&A sections | 5+ pages |
| **Carousel/Slider** | Rotating content panels with navigation | Homepage, hubs |
| **Comparison Table** | Feature matrix with checkmarks/icons | Advice, products |
| **Statistics** | Large numbers with descriptions | Homepage, about |
| **Newsletter Signup** | Email capture form with image | Multiple pages |
| **CTA Banner** | Centered call-to-action section | All pages |
| **Tabs** | Category filter navigation | Hub pages |
| **Award Badge** | Recognition display with external link | Multiple pages |
| **Numbered List** | Circled number icon + heading + content | Article pages |
| **Related Articles** | Article card grid with category tags | Article pages |
| **Quote/Testimonial** | Customer quote with attribution | Product pages |
| **Video Modal** | Video player in modal overlay | Homepage |

**Total Custom Blocks:** 12-15

---

## Design System Analysis

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary (Maroon) | #96151D | CTAs, accents, headers |
| Black | #000000 | Body text, headings |
| White | #FFFFFF | Backgrounds, text on dark |
| Gray Light | #F5F5F5 | Section backgrounds |
| Gray Medium | #666666 | Secondary text |

### Typography
- **Headings:** Custom brand font (likely proprietary)
- **Body:** Sans-serif system font stack
- **Font Sizes:** 14px-48px range

### Spacing
- Grid system based on 8px units
- Consistent section padding
- Card gap spacing

---

## Technical Considerations

### Challenges

1. **Complex Navigation**
   - Mega menu with multiple columns
   - Requires custom JavaScript decoration
   - Mobile responsive hamburger menu

2. **Interactive Components**
   - Carousels with auto-play and pause
   - Accordion expand/collapse animations
   - Tab panel switching
   - Modal dialogs

3. **Comparison Tables**
   - Complex table structure
   - Icon-based indicators
   - Responsive behavior needed

4. **Search Functionality**
   - Investment ticker/name search
   - May require external API integration

5. **Legal/Compliance Content**
   - Extensive footnotes with superscript references
   - Regulatory disclaimers
   - PDF document links

6. **Video Content**
   - Embedded video player
   - Transcript modal

### Dependencies
- Custom web fonts (licensing consideration)
- External APIs (search, authentication)
- PDF document hosting
- Video hosting platform

---

## Migration Recommendations

### Phase 1: Foundation
**Timeline:** Initial sprint
**Focus:** Establish core infrastructure

| Task | Description |
|------|-------------|
| Design System | Extract colors, fonts, spacing tokens |
| Global Styles | Create styles.css with CSS custom properties |
| Navigation | Build mega menu structure |
| Homepage | Migrate primary landing page |
| Article Template | Migrate 2-3 sample articles |

**Blocks to Build:**
- Hero
- Hero Carousel
- Cards
- Statistics
- CTA Banner
- Newsletter Signup
- Numbered List

---

### Phase 2: Hub Pages
**Timeline:** Second sprint
**Focus:** Category and product pages

| Task | Description |
|------|-------------|
| Investment Products | Product hub with accordions |
| Accounts & Plans | Category hub with tabs |
| About Us | Brand storytelling page |

**Blocks to Build:**
- FAQ Accordion
- Tabs
- Award Badge
- Quote/Testimonial

---

### Phase 3: Advanced Features
**Timeline:** Third sprint
**Focus:** Complex interactive pages

| Task | Description |
|------|-------------|
| Advice Page | Service comparison with tables |
| Resources Hub | Content aggregation with filters |
| Product Details | Individual product pages |

**Blocks to Build:**
- Comparison Table
- Carousel/Slider
- Related Articles
- Video Modal

---

## Effort Estimates

| Category | Items | Complexity |
|----------|-------|------------|
| Page Templates | 8 | High |
| Custom Blocks | 12-15 | High |
| Design System | 1 complete set | Medium |
| Navigation | 1 mega menu | High |
| Total Unique Pages | 200+ | - |

### Risk Factors
- **High:** Complex navigation structure
- **Medium:** Interactive component JavaScript
- **Medium:** Legal content accuracy
- **Low:** Content volume (manageable with templates)

---

## Recommended Starting Point

1. **Design System Extraction** - Extract colors, typography, and spacing from existing site
2. **Homepage Migration** - Establishes majority of blocks needed
3. **Article Template** - High volume, validates content workflow
4. **Navigation Setup** - Critical dependency for all pages

---

## Appendix: Site Screenshots

Screenshots captured during analysis:
- Homepage (full page)
- Investment Products hub
- Article page structure

---

*Analysis prepared using automated site exploration and content inventory tools.*
