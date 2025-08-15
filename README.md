# Bonac Fit - Workout Tracker

Modern workout tracker with premium features, online coaching, equipment & supplement store, and multi-method payments (Visa, MoMo, Voda Cash, bank transfer).

**Inspired by IFBB Pro William Bonac.**

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/addaiboakye-star/Bonac-Fit-Workout--tracker.git
   cd Bonac-Fit-Workout--tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Figma Design Integration

This project is designed to integrate seamlessly with the **NeuroFit-AI-Workout-Tracker Figma design**.

### Adding Design Assets

1. **Export Assets from Figma:**
   - Open your Figma design file
   - Select the asset you want to export
   - Use the Export panel in the right sidebar
   - Choose the appropriate format:
     - **SVG** for icons and simple graphics
     - **PNG** for complex images (export 1x, 2x, 3x for different screen densities)
     - **WOFF2** for custom fonts

2. **Organize Assets:**
   ```
   assets/figma/
   ├── images/          # Photos, illustrations, complex graphics
   ├── icons/           # SVG icons and simple graphics
   ├── fonts/           # Custom font files
   └── exports/         # Direct component/screen exports
   ```

3. **Naming Convention:**
   - Use kebab-case: `workout-card-icon.svg`
   - Include density for images: `hero-image-2x.png`
   - Be descriptive: `primary-button-background.svg`

### Integrating Assets in Components

#### Images
```tsx
import Image from 'next/image';
import heroImage from '@/assets/figma/images/hero-workout.png';

export default function Hero() {
  return (
    <Image
      src={heroImage}
      alt="Hero workout scene"
      width={800}
      height={400}
      priority
    />
  );
}
```

#### SVG Icons
```tsx
import WorkoutIcon from '@/assets/figma/icons/workout-icon.svg';

export default function IconButton() {
  return (
    <button>
      <WorkoutIcon className="w-6 h-6 text-orange-600" />
      Start Workout
    </button>
  );
}
```

#### Custom Fonts
1. Add font files to `assets/figma/fonts/`
2. Update `src/app/layout.tsx`:
   ```tsx
   import localFont from 'next/font/local';

   const brandFont = localFont({
     src: '../assets/figma/fonts/brand-font.woff2',
     variable: '--font-brand',
   });

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body className={`${brandFont.variable} antialiased`}>
           {children}
         </body>
       </html>
     );
   }
   ```

3. Update `tailwind.config.ts`:
   ```typescript
   module.exports = {
     theme: {
       extend: {
         fontFamily: {
           brand: ['var(--font-brand)'],
         },
       },
     },
   };
   ```

### Design System Integration

#### Colors
Update `tailwind.config.ts` with your Figma color palette:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        // Add more colors from your Figma design
      },
    },
  },
};
```

#### Component Styling
The project includes placeholder components in `src/components/` that should be updated to match your Figma designs:

- `src/components/ui/Button.tsx` - Reusable button component
- `src/components/layout/Header.tsx` - Main navigation header
- `src/components/features/WorkoutCard.tsx` - Workout display card

Each component includes TODO comments indicating where Figma styles should be applied.

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── features/        # Feature-specific components
└── assets/
    └── figma/           # Design assets from Figma

public/                  # Static assets
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Features Roadmap

- [ ] User authentication and profiles
- [ ] Workout tracking and logging
- [ ] Progress visualization
- [ ] Online coaching integration
- [ ] Equipment and supplement store
- [ ] Multi-payment integration (Visa, MoMo, Voda Cash, Bank Transfer)
- [ ] Social features and community
- [ ] Nutrition tracking
- [ ] AI-powered workout recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Ready to transform your fitness journey with Bonac Fit? Let's build something amazing! 💪**