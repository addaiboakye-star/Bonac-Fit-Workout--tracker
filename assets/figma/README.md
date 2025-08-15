# Figma Design Assets

This directory contains assets exported from the NeuroFit-AI-Workout-Tracker Figma design.

## Directory Structure

- `images/` - Exported images, photos, and illustrations
- `icons/` - SVG icons and iconography
- `fonts/` - Custom fonts used in the design
- `exports/` - Direct exports from Figma (components, screens, etc.)

## How to Add Assets

1. **Export from Figma:**
   - Select the component/asset in Figma
   - Use the export panel on the right sidebar
   - Choose appropriate format (SVG for icons, PNG for images, etc.)
   - Export with 1x, 2x, and 3x resolutions for responsive images

2. **Naming Convention:**
   - Use kebab-case for file names
   - Include size in filename if multiple sizes exist
   - Example: `workout-card-icon.svg`, `hero-image-2x.png`

3. **Organization:**
   - Place icons in the `icons/` folder
   - Place images in the `images/` folder
   - Place fonts in the `fonts/` folder
   - Place component exports in the `exports/` folder

## Integration with Components

After adding assets, import them in your React components:

```tsx
import Image from 'next/image';
import heroImage from '@/assets/figma/images/hero-image.png';
import WorkoutIcon from '@/assets/figma/icons/workout-icon.svg';

export default function Component() {
  return (
    <div>
      <Image src={heroImage} alt="Hero" />
      <WorkoutIcon className="w-6 h-6" />
    </div>
  );
}
```

## Fonts Integration

If you have custom fonts from the Figma design:

1. Place font files in `assets/figma/fonts/`
2. Update `src/app/layout.tsx` to include local font loading
3. Update your Tailwind config to include the custom fonts

Example:
```tsx
import localFont from 'next/font/local';

const customFont = localFont({
  src: '../assets/figma/fonts/custom-font.woff2',
  variable: '--font-custom',
});
```