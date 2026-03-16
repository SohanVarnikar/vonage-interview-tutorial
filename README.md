# Journey Builder Dashboard

A modern, interactive journey builder application built with Vue 3 and VueFlow, featuring drag-and-drop workflow creation, dynamic auto-connections, and comprehensive validation.

## Features

- 🎯 **Drag & Drop Interface** - Create workflows by dragging nodes onto the canvas
- 🔗 **Auto-Connections** - Smart variable-based connections between input/output nodes
- ✅ **Validation System** - Comprehensive form and connection validation
- 🎨 **Modern UI** - Beautiful Tailwind CSS design with animations
- 📡 **API Integration** - Save journeys to external endpoints
- 🚨 **Custom Alerts** - Professional notification system

## Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation & Setup

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd interview-tutorial
   ```

2. **Install dependencies and start development server**
   ```bash
   npm run install-and-start
   ```
   
   Or manually:
   ```bash
   npm install
   npm run dev
   ```

3. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The development server will automatically open your browser

## Node Types

- **Start Node** - Journey entry point
- **Input Node** - Collect user input with variable names
- **Output Node** - Display messages with variable interpolation
- **Email Node** - Send emails with dynamic content
- **Wait Node** - Add delays (minutes/hours/days)
- **Condition Node** - Branch logic based on user actions
- **End Node** - Journey completion

## Auto-Connection Feature

The system automatically creates connections when:
- An input node has a name (e.g., `user_name`)
- An output/email node references that variable (e.g., `Hello {user_name}!`)

## Build for Production

```bash
npm run build
npm run preview
```

## Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **VueFlow** - Node-based editor for Vue.js
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool

## Project Structure

```
src/
├── components/
│   ├── Alert.vue           # Custom alert component
│   ├── JourneyBuilder.vue  # Main dashboard
│   └── nodes/              # Individual node components
│       ├── StartNode.vue
│       ├── InputNode.vue
│       ├── OutputNode.vue
│       ├── EmailNode.vue
│       ├── WaitNode.vue
│       ├── ConditionNode.vue
│       └── EndNode.vue
├── App.vue                 # Root component
├── main.js                 # Application entry point
└── style.css               # Global styles
```

## Development

- Hot module replacement enabled
- TypeScript support ready
- ESLint configuration available
- Tailwind CSS v4 with modern syntax

## License

MIT License

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/` — Main source code
- `src/components/` — Vue components
- `public/` — Static assets and index.html
- `vite.config.js` — Vite configuration
- `package.json` — Project metadata and scripts
