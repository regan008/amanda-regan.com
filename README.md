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

## Technologies Used

- [Hugo](https://gohugo.io/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library 