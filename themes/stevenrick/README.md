# Steven Rick Custom Theme

A completely detached, self-contained Hugo theme powering [stevenrick.com](https://stevenrick.com). It was originally built on top of the [Barks theme](https://github.com/timothygebhard/barks) but has been decoupled to allow unimpeded customization.

## Features

- **Portfolio Grid System**: Responsive 3-column grid layout for showcasing projects.
- **Publications Page**: Academic publication listing with year sections.
- **Affiliations Page**: Professional roles and service page.
- **Enhanced Landing Page**: Multi-section academic profile with customizable cards.
- **Card-Based Layouts**: Hover effects and visual hierarchy.
- **Responsive Design**: Mobile-first approach with multiple breakpoints.

## Usage

### Portfolio Section

Create portfolio items in `content/portfolio/`:

```markdown
+++
title = "Project Name"
featured_image = "images/project-thumbnail.jpg"
+++

## Overview
Project description...

## Artifacts
- [Paper](https://doi.org/...)
```

### Publications Page

Create `content/publications.md`:

```markdown
+++
title = 'Publications'
layout = 'publications'
+++

#### 2025

Author et al. (2025). [Title](https://doi.org/...).
*Venue*
```

### Affiliations Page

Create `content/links.md`:

```markdown
+++
title = 'Affiliations & Service'
layout = 'affiliations'
+++

## Current Roles

**Organization** (Role)
Description [Link →](https://example.com)
```

### Landing Page

Set the layout in `content/_index.md`:

```markdown
+++
layout = 'landing_page'
image = 'images/headshot.jpg'
+++

Tagline

## Current
- Item

## Prior
- Item

---
Call to action text
```

## Customization

All styling respects the color variables defined in your main `hugo.toml`:

```toml
[params.colors]
  background_color = "#fcfbf9"
  text_color = "#333333"
  link_color = "#60c17d"

[params.typography]
  title_font = "Roboto Serif"
  body_font = "Roboto Sans Serif"
```

## Architecture

This theme is completely standalone. All internal files are integrated into a single cohesive structure located at `themes/stevenrick`. You can freely modify `assets/*.scss` and `layouts/` directly without worrying about inheritance overrides causing complex CSS bugs.

## Credits

Originally branched from the excellent [Barks theme](https://github.com/timothygebhard/barks) by Timothy Gebhard.

## Author

**Steven R. Rick**
- Website: [stevenrick.com](https://stevenrick.com)
- GitHub: [@stevenrick](https://github.com/stevenrick)
