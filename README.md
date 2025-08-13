# Amanda Regan's Personal Website

This is the source code for Amanda Regan's personal website, built with Hugo and Tailwind CSS.

## Development Setup

### Prerequisites
- Node.js and npm
- Hugo (extended version)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development Commands

#### CSS Development
- Watch and automatically rebuild CSS during development:
```bash
npm run css:dev
```
- Build CSS once (with minification):
```bash
npm run css:build
```

#### Hugo Development
- Start Hugo development server:
```bash
npm run dev
```
- Build site for production:
```bash
npm run build
```

## Project Structure

- `assets/css/main.css` - Main CSS file that gets processed by Tailwind
- `static/css/style.css` - Generated CSS file (do not edit directly)
- `layouts/` - Hugo templates
- `content/` - Site content in markdown format

## Color Scheme

This site uses a custom "highland" theme with the following color palette:

### Primary Colors
- **Primary**: `#1e2228` - Dark charcoal (main brand color)
- **Secondary**: `#4B5563` - Slate gray (secondary text/elements)
- **Accent**: `#0b22e8` - Bright blue (links, highlights, CTAs)

### Base Colors
- **Base-100**: `#F3EEE6` - Light cream (main background)
- **Base-200**: `#1e2228` - Dark charcoal (secondary background)
- **Base-300**: `#2a2f38` - Medium charcoal (tertiary background)
- **Neutral**: `#F3EEE6` - Light cream (neutral elements)

### Semantic Colors
- **Info**: `#3B82F6` - Blue (information, alerts)
- **Success**: `#22C55E` - Green (success states, confirmations)
- **Warning**: `#F59E0B` - Amber (warnings, cautions)
- **Error**: `#EF4444` - Red (errors, destructive actions)
- **Terracotta**: `#E85D75` - Warm coral (highlights, special elements)
- **Teal**: `#0F766E` - Deep teal (academic, professional contexts)
- **Burgundy**: `#9F1239` - Rich burgundy (elegant, sophisticated elements)

### Usage in Components

#### Badges
```markdown
{{< badge text="Primary Badge" color="primary" />}}
{{< badge text="Secondary Badge" color="secondary" />}}
{{< badge text="Accent Badge" color="accent" />}}
{{< badge text="Info Badge" color="info" />}}
{{< badge text="Success Badge" color="success" />}}
{{< badge text="Warning Badge" color="warning" />}}
{{< badge text="Error Badge" color="error" />}}
{{< badge text="Neutral Badge" color="neutral" />}}
{{< badge text="Terracotta Badge" color="terracotta" />}}
{{< badge text="Teal Badge" color="teal" />}}
{{< badge text="Burgundy Badge" color="burgundy" />}}
```

#### Alert Styles
```markdown
{{< alert type="info" message="Info message" style="outline" />}}
{{< alert type="warning" message="Warning message" style="soft" />}}
{{< alert type="error" message="Error message" style="dash" />}}
{{< alert type="success" message="Success message" />}}
```

## Technologies Used

- [Hugo](https://gohugo.io/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library 