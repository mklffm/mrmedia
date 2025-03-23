# Getting Started with Mr Media Agency Website

This guide will help you get the Mr Media Agency website up and running on your local machine, whether you're starting from scratch or working with the existing codebase.

## Starting from Scratch

If you want to build this project from scratch, follow these steps:

### 1. Set up a new Next.js project

```bash
# Create a new directory for your project
mkdir mr-media-agency
cd mr-media-agency

# Initialize a new Next.js project with TypeScript, ESLint, and Tailwind CSS
npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir

# Answer the prompts as follows:
# Would you like to use Turbopack for `next dev`? › No
# Would you like to customize the import alias? › Yes
# Import alias: @/*
```

### 2. Set up the project structure

Create the necessary folders and files:

```bash
# Create component directories
mkdir -p src/components
```

### 3. Install additional dependencies

```bash
# Install React Icons for beautiful SVG icons
npm install react-icons
```

### 4. Configure Tailwind CSS with custom colors

Edit the `tailwind.config.js` file to include our brand colors:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#FF0000',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
```

### 5. Create components

Create the following components in the `src/components` directory:

- `Header.tsx` - Navigation component with mobile menu
- `Hero.tsx` - Hero section with main messaging
- `Services.tsx` - Services offered section
- `About.tsx` - About the agency section
- `Testimonials.tsx` - Client testimonials section
- `Contact.tsx` - Contact form and information
- `Footer.tsx` - Footer with links and copyright

### 6. Create main page layout

Edit the `src/app/page.tsx` file to include all your components.

## Working with the Existing Codebase

If you're working with the existing codebase, follow these steps:

### 1. Clone the repository

```bash
git clone <repository-url>
cd mr-media-agency
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
mr-media-agency/
├── .next/               # Next.js build directory (generated)
├── node_modules/        # Node modules (generated)
├── public/              # Static files
├── src/
│   ├── app/             # App router directory
│   │   ├── globals.css  # Global CSS styles
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Home page component
│   └── components/      # React components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── .gitignore           # Git ignore file
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Development Workflow

1. **Make Changes**: Modify components in the `src/components` directory or create new ones.
2. **View Changes**: See your changes in real-time at [http://localhost:3000](http://localhost:3000).
3. **Add Pages**: Create new pages in the `src/app` directory following Next.js App Router conventions.
4. **Styling**: Use Tailwind CSS classes for styling components.

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com), the platform from the creators of Next.js.

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import your repository to Vercel.
3. Vercel will detect Next.js and configure the build settings automatically.
4. Your site will be deployed and a URL will be assigned.

## Troubleshooting

### Common Issues

1. **Missing Dependencies**: If you encounter errors about missing modules, run `npm install`.
2. **Tailwind CSS Not Working**: Make sure your `tailwind.config.js` file includes all the component paths.
3. **TypeScript Errors**: Check that you have the proper type definitions. You may need to run `npm install @types/react @types/react-dom` if those are missing.

### Getting Help

If you need further assistance:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Open an issue in the project repository 