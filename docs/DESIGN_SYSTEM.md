# 🎨 Portfolio Design System

**Project:** Harry Ward Portfolio  
**Version:** 1.0.0  
**Last Updated:** August 2026

---

# Vision

The portfolio should feel less like a résumé and more like a polished software product.

Every design decision should reinforce the idea that this website was built by a software engineer who values quality, simplicity, accessibility, and attention to detail.

The experience should be:

- Clean
- Fast
- Responsive
- Accessible
- Minimal
- Professional

Avoid unnecessary visual noise.

---

# Design Inspiration

This project takes inspiration from modern SaaS companies.

## Primary Inspiration

- Vercel
- Linear
- Stripe

## Secondary Inspiration

- Raycast
- Resend
- Clerk
- Railway
- Supabase

---

# Design Principles

## 1. Content First

The content is the product.

Projects, GitHub activity and technical writing should always be the focus.

The UI exists to showcase the content.

---

## 2. Consistency

Spacing.

Typography.

Colours.

Animations.

Everything should feel predictable.

---

## 3. Simplicity

If something can be removed without reducing clarity...

Remove it.

---

## 4. Performance

Every animation should have a purpose.

Every component should load quickly.

Aim for:

- Lighthouse 95+
- First Contentful Paint under 1.5 seconds
- Accessibility 100

---

## 5. Mobile First

Every page must work beautifully on:

- Desktop
- Tablet
- Mobile

Design for mobile first.

Enhance for desktop.

---

# Brand Identity

## Name

Harry Ward

---

## Title

Software Engineer

---

## Tagline

Building scalable software, AI-powered tools and modern web applications.

---

# Colour Palette

## Background

Primary

```
#030712
```

---

Secondary

```
#111827
```

---

Surface

```
#1F2937
```

---

Border

```
#374151
```

---

Primary Blue

```
#3B82F6
```

---

Hover Blue

```
#2563EB
```

---

Secondary Blue

```
#60A5FA
```

---

Success

```
#22C55E
```

---

Warning

```
#F59E0B
```

---

Error

```
#EF4444
```

---

Primary Text

```
#F9FAFB
```

---

Secondary Text

```
#D1D5DB
```

---

Muted Text

```
#9CA3AF
```

---

# Typography

## Primary Font

Geist

Used for:

- Headings
- Paragraphs
- Navigation
- Buttons

---

## Code Font

Geist Mono

Used for:

- Code
- Terminal
- Badges
- Technical snippets

---

# Typography Scale

## Hero

64px

Desktop

48px

Tablet

40px

Mobile

---

## H1

48px

---

## H2

36px

---

## H3

30px

---

## H4

24px

---

## Body Large

18px

---

## Body

16px

---

## Small

14px

---

## Caption

12px

---

# Border Radius

Cards

16px

---

Buttons

12px

---

Inputs

12px

---

Badges

999px

---

# Shadows

Use subtle shadows.

Never use heavy drop shadows.

Example

```
0 10px 30px rgba(0,0,0,.25)
```

---

# Borders

Use subtle borders.

Prefer

```
1px solid #374151
```

Avoid bright borders.

---

# Icons

Library

Lucide React

Preferred Size

20px

Navigation

22px

Hero

24px

---

# Layout

Maximum Width

```
1280px
```

---

Container Padding

Desktop

32px

Tablet

24px

Mobile

20px

---

Section Spacing

Desktop

128px

Tablet

96px

Mobile

72px

---

# Buttons

## Primary

Blue

White text

Rounded corners

Subtle hover animation

---

## Secondary

Transparent

Border

Light hover

---

## Ghost

No border

Text only

Hover background

---

# Cards

Cards should have:

- Rounded corners
- Subtle border
- Slight elevation
- Smooth hover

Avoid:

Heavy gradients

Huge shadows

Glass everywhere

---

# Animations

Library

Framer Motion

---

Animation Speed

Fast

200ms

Medium

350ms

Slow

500ms

---

Allowed Animations

Fade

Slide

Scale

Opacity

Stagger

---

Avoid

Bounce

Spin

Flash

Shake

---

# Images

Rounded corners

16px

Always optimized

Lazy loaded

---

# Components

Every reusable component lives inside

```
components/
```

Required components

- Button
- Card
- Badge
- Avatar
- Container
- Section
- SectionHeading
- Navbar
- Footer
- Hero
- GitHubPanel
- ProjectCard
- Timeline
- ContactForm
- SocialLinks
- MobileMenu

---

# Responsive Breakpoints

Mobile

640px

Tablet

768px

Laptop

1024px

Desktop

1280px

Large Desktop

1536px

---

# Accessibility

Target WCAG AA

Requirements

- Keyboard navigation
- Focus indicators
- Semantic HTML
- High colour contrast
- Screen reader friendly
- Alt text on images

---

# Performance Goals

Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

---

# GitHub Integration

Display

- Contribution Graph
- Latest Commit
- Pinned Repositories
- Recent Activity
- Languages
- Followers
- Repository Count

Refresh

Every deployment

---

# Project Pages

Each project includes

- Overview
- Problem
- Solution
- Screenshots
- Architecture
- Challenges
- Lessons Learned
- Tech Stack
- GitHub
- Live Demo
- Future Improvements

---

# Blog

Powered by MDX

Each article includes

- Reading time
- Tags
- Share buttons
- Syntax highlighting
- Table of contents

---

# Future Features

- AI Portfolio Assistant
- Command Palette
- Search
- Dark/Light Theme
- Analytics Dashboard
- Reading List
- Certifications
- Speaking Events
- GitHub Timeline
- Visitor Counter

---

# Engineering Standards

Every new component must be

- Reusable
- Accessible
- Responsive
- Type-safe
- Documented

Avoid duplicate code.

---

# Definition of Done

A feature is complete when:

- Responsive
- Accessible
- Tested
- Type-safe
- Documented
- Reviewed
- Optimized

---

# Project Philosophy

This portfolio is not just a personal website.

It is a demonstration of professional software engineering practices.

Every feature should answer one question:

> "Would I be proud to discuss this implementation during a software engineering interview?"

If the answer is no, keep improving it.