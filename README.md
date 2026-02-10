# LeadingToday - Landing Page

A high-converting landing page for LeadingToday, helping South African entrepreneurs fix unclear messaging, broken systems, and admin chaos.

## Design Philosophy

Built with:
- **Matt Gray's style**: Clean, minimal, high-contrast, mobile-first
- **Steven Bartlett's aesthetic**: Bold typography, lots of white space
- **StoryBrand methodology**: Customer as hero, clear problem-solution-transformation

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Inter (body) + Instrument Serif (headings)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Hosting**: Ready for Vercel deployment

## Getting Started

### Development

```bash
# Install dependencies (if not already installed)
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## Project Structure

```
leadingtoday/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles & design system
├── components/
│   ├── HeroSection.tsx
│   ├── ThreeThingsSection.tsx
│   ├── ClearMessagingSection.tsx
│   ├── SimpleSystemsSection.tsx
│   ├── TimeFreedomSection.tsx
│   ├── GetStartedSection.tsx
│   ├── AboutSection.tsx
│   ├── LeadMagnetSection.tsx
│   ├── CoffeeBookingSection.tsx
│   └── Footer.tsx
├── public/                  # Static assets (add images here)
├── tailwind.config.ts       # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## Design System

### Colors

- **Primary Dark**: `#0A0A0A` (headings, hero text)
- **Primary Gray**: `#404040` (body text)
- **Primary Accent**: `#2563EB` (CTA buttons)
- **Accent Orange**: `#F97316` (highlights)
- **Accent Green**: `#10B981` (success states)

### Typography Scale

- **Hero Headline**: 56px (3.5rem) - Mobile: 36px
- **Section Headline**: 40px (2.5rem)
- **Subsection Headline**: 30px (1.875rem)
- **Body Large**: 20px (1.25rem)
- **Body Regular**: 16px (1rem)
- **Body Small**: 14px (0.875rem)

### Spacing

Based on 8px unit system with:
- **Micro spacing**: 8px, 16px
- **Section spacing**: 64px, 96px
- **Container max-width**: 1200px
- **Content max-width**: 720px

## Components

### 1. Hero Section
- Main headline with clear value proposition
- Pain points list
- Dual CTA buttons (Download + Book Coffee)

### 2. Three Things We Fix
- Grid layout with icons
- Messaging, Systems, Admin focus
- Hover effects on cards

### 3. Step 1: Clear Messaging
- Two-column layout (text + visual)
- Problem/solution structure
- CTA to download framework

### 4. Step 2: Simple Systems
- Before/after comparison
- Visual process flow
- Results-focused messaging

### 5. Step 3: Time Freedom
- Timeline layout
- Weekend scenario storytelling
- Emotional connection

### 6. How to Get Started
- Three-step numbered process
- Large visual numbers
- Multiple CTAs

### 7. About Section
- Johann's story
- Three core beliefs
- Personal connection

### 8. Lead Magnet Section
- Form with validation (React Hook Form + Zod)
- Name, Email, Business Type fields
- Success state handling
- **TODO**: Connect to ConvertKit/Mailchimp API

### 9. Coffee Booking Section
- Calendly embed placeholder
- Clear expectations
- Trust-building copy
- **TODO**: Add actual Calendly embed URL

### 10. Footer
- Three-column layout
- Quick links
- Social media icons
- Copyright & legal links

## Customization Needed

### 1. Images & Assets
Replace placeholders in these components:
- `AboutSection.tsx` - Add Johann's photo
- `ClearMessagingSection.tsx` - Add 5-Soundbite Framework diagram
- `LeadMagnetSection.tsx` - Add Clarity Checklist mockup

### 2. Forms Integration

**Lead Magnet Form** (`LeadMagnetSection.tsx`, line ~32):
```typescript
// Replace with actual API endpoint
const response = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

Create `/app/api/subscribe/route.ts` for ConvertKit/Mailchimp integration.

### 3. Calendly Integration

**Coffee Booking** (`CoffeeBookingSection.tsx`, line ~46):
Replace the placeholder div with:
```jsx
<iframe
  src="https://calendly.com/your-calendly-link"
  width="100%"
  height="700"
  frameBorder="0"
></iframe>
```

### 4. Social Media Links

Update URLs in `Footer.tsx` (lines ~54, ~64):
- LinkedIn: Replace `https://linkedin.com`
- YouTube: Replace `https://youtube.com`

### 5. Analytics

Add to `app/layout.tsx`:
```typescript
// Google Analytics
// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

// Add <Analytics /> to layout
```

## Deployment to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LeadingToday landing page"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Custom Domain**:
   - In Vercel dashboard → Settings → Domains
   - Add `leadingtoday.co.za`
   - Update DNS records as instructed

4. **Environment Variables**:
   ```bash
   # Add in Vercel dashboard → Settings → Environment Variables
   CONVERTKIT_API_KEY=your_key
   CONVERTKIT_FORM_ID=your_form_id
   ```

## Performance Optimizations

- ✅ Next.js Image optimization ready
- ✅ Font optimization with `next/font`
- ✅ Automatic code splitting
- ✅ CSS optimization with Tailwind
- ✅ Framer Motion animations (lightweight)
- ✅ Form validation (client-side)

Expected Lighthouse scores: **95+** across all metrics

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance (WCAG AA)
- ✅ Alt text placeholders (add actual descriptions)

## Mobile Responsive

Breakpoints:
- `sm`: 640px
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)

All components are mobile-first and fully responsive.

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Check [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with precision and speed. Elementary. 🔍
