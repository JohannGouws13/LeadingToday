# LeadingToday - Complete Deployment Guide

**Last Updated:** 10 February 2026  
**Project:** LeadingToday Landing Page  
**Domain:** leadingtoday.co.za  
**Repository:** https://github.com/JohannGouws13/LeadingToday

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [What We Built](#what-we-built)
3. [Session Changes Summary](#session-changes-summary)
4. [GitHub Deployment](#github-deployment)
5. [Vercel Deployment](#vercel-deployment)
6. [DNS Configuration](#dns-configuration)
7. [Troubleshooting](#troubleshooting)
8. [Future Updates](#future-updates)

---

## 🎯 Project Overview

**Purpose:** High-converting landing page for LeadingToday - helping South African entrepreneurs fix unclear messaging, broken systems, and admin chaos.

**Tech Stack:**
- Next.js 16.1.6 (App Router)
- TypeScript 5.9.3
- Tailwind CSS 3.4.19
- Framer Motion 12.30.0
- Lucide React 0.563.0

**Live URLs:**
- Production: https://leadingtoday.co.za
- Vercel Preview: https://leadingtoday.vercel.app
- Local Dev: http://localhost:3000/landing

---

## 🏗️ What We Built

### Active Components (11 Total)

1. **LandingHero.tsx**
   - Main headline: "You're One Story Away From Doubling Your Revenue"
   - Three problem cards: Unclear Messaging, Broken Systems, Admin Chaos
   - Dual CTAs: Download Framework | Book Coffee

2. **CallToActionBreak.tsx**
   - Coffee booking CTA between sections
   - "You didn't start a business to drown in admin..."

3. **SalesSystemSection.tsx**
   - THE HOOK framework (4-step story-based selling)
   - Label Pain → Show Freedom → Sell Map → Reveal Cost

4. **ThreeFixesSection.tsx**
   - The LeadingToday Entrepreneurs Playbook
   - 3 fixes with before/after pitch examples:
     - Business Consultant example
     - Accountant example
     - Engineer example

5. **HowItWorksLanding.tsx**
   - 3-step process section
   - Download → Coffee → Build System

6. **WhyIBuiltThisSection.tsx**
   - Personal story and core beliefs
   - Johann's background and mission

7. **SocialProofLanding.tsx**
   - Testimonials from Cape Town & Johannesburg
   - Statistics: 10,000+ users, 15 hours saved, 32% increase

8. **FAQLanding.tsx**
   - Accordion-style FAQ section
   - Common objections handled

9. **FinalCTASection.tsx**
   - Final conversion section
   - 3 CTA cards: Download | Book Coffee | Watch Case Study

10. **FooterLanding.tsx**
    - Footer with links and social media
    - LinkedIn and YouTube integration

11. **LeadMagnetModalLanding.tsx**
    - Modal for downloading THE HOOK Framework
    - Form with name, email, business type

### Design Features

✅ **Professional Styling:**
- Clean blue-first design (#2563EB)
- No gradients (removed for cleaner look)
- No emojis (professional, not ChatGPT-style)
- Proper gray/blue card combinations

✅ **South African Localization:**
- R currency (not £)
- Local references (WhatsApp, networking events)
- South African cities in testimonials

✅ **Mobile-First:**
- Responsive breakpoints (sm, md, lg, xl)
- Touch-friendly buttons
- Optimized for mobile traffic

---

## 📝 Session Changes Summary

### What We Fixed/Changed:

1. **Removed All Emojis**
   - Before: 😴 and 👀 in examples
   - After: Clean professional text
   - Changed checkmarks to proper icons

2. **Updated Currency**
   - Before: £20k
   - After: R20k (South African Rands)

3. **Updated Problem Copy**
   - Before: "your 90-second pitch put them to sleep"
   - After: "the answer to 'what do you do' put them to sleep"

4. **Updated Fix 02**
   - Before: "Customers book through 8 manual steps..."
   - After: "Customers pay you through 8 manual steps. Too many steps = customers ghosting us."

5. **Updated Fix 02 Solution**
   - Before: "8 steps become 2 clicks..."
   - After: "Automate your business. 2 clicks. Click. Pay. Done. Your business continues while you sleep."

6. **Updated Fix 03 Solution**
   - Before: "Systems that run Monday morning..."
   - After: "Your systems are in place. Your business is growing itself. You get to spend time with those you love."

7. **Added Coffee CTA Break**
   - New section between Hero and Playbook
   - Reinforces conversion opportunity early

8. **Added THE HOOK Framework Section**
   - Replaced "Sales System" section
   - 4-step framework explanation
   - Story-based selling approach

9. **Added 3 Before/After Examples**
   - Business Consultant pitch
   - Accountant pitch
   - Engineer pitch

10. **Changed Color Scheme**
    - Removed: Red/green blocks in before/after
    - Added: Gray/blue professional cards

11. **Project Organization**
    - Created: "Latest website 10 Feb" backup folder
    - Created: "Old Components Archive" for unused components
    - Cleaned up components folder

---

## 🚀 GitHub Deployment

### Initial Setup (Already Done)

```bash
# 1. Navigate to project
cd "/Users/johanngouws/Desktop/LT Consulting/JohannG/leadingtoday"

# 2. Remove unwanted files
rm -f nul

# 3. Initialize git
git init

# 4. Stage all files
git add .

# 5. Create initial commit
git commit -m "Initial commit: LeadingToday landing page with THE HOOK framework"

# 6. Add remote repository
git remote add origin https://github.com/JohannGouws13/LeadingToday.git

# 7. Rename branch to main
git branch -M main

# 8. Push to GitHub
git push -u origin main
```

### For Future Updates

```bash
# 1. Check what changed
git status

# 2. Stage your changes
git add .

# 3. Commit with a message
git commit -m "Describe your changes here"

# 4. Push to GitHub
git push

# Vercel will automatically deploy the changes!
```

### Repository Structure

```
leadingtoday/
├── components/              # 11 active components
├── app/
│   ├── landing/
│   │   └── page.tsx        # Main landing page
│   ├── layout.tsx
│   └── page.tsx            # Redirects to /landing
├── public/
│   └── images/             # All images
├── Latest website 10 Feb/  # Backup of current version
├── Old Components Archive/ # Archived old components
├── PROJECT_STATUS.md       # Project status document
├── DEPLOYMENT_GUIDE.md     # This file
└── README.md              # Main README
```

---

## ☁️ Vercel Deployment

### Step 1: Initial Vercel Setup

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Log In"

2. **Connect GitHub**
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your repositories

3. **Import Project**
   - Click "Add New..." → "Project"
   - Find "LeadingToday" in your repository list
   - Click "Import"

4. **Configure Project**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live at: `leadingtoday.vercel.app`

### Step 2: Add Custom Domain

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"

2. **Add Domain**
   - Type: `leadingtoday.co.za`
   - Click "Add"

3. **Vercel Shows DNS Instructions**
   - Type: A
   - Name: @
   - Value: `216.198.79.1`

4. **Add www Subdomain (Optional)**
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

---

## 🌐 DNS Configuration

### Where to Configure DNS

Go to your domain registrar where you purchased `leadingtoday.co.za`:
- XNEELO (most common in SA)
- GoDaddy
- Namecheap
- Register.co.za
- Other

### DNS Records to Add

#### Required: A Record for Root Domain

```
Type:  A
Name:  @ (or leave blank, or "leadingtoday.co.za")
Value: 216.198.79.1
TTL:   Automatic (or 3600)
```

#### Optional but Recommended: CNAME for www

```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
TTL:   Automatic (or 3600)
```

### Step-by-Step: XNEELO (Common SA Provider)

1. **Log in to XNEELO Control Panel**
   - Visit: https://my.xneelo.co.za

2. **Navigate to Domains**
   - Click "Domains" in the sidebar
   - Select "leadingtoday.co.za"

3. **Access DNS Management**
   - Click "DNS Records" or "Zone File"
   - Click "Add Record" or "Edit Zone"

4. **Add A Record**
   - Record Type: A
   - Host: @ (or blank)
   - Points to: 216.198.79.1
   - TTL: 3600 (or leave default)
   - Click "Save" or "Add Record"

5. **Add CNAME Record (for www)**
   - Record Type: CNAME
   - Host: www
   - Points to: cname.vercel-dns.com
   - TTL: 3600
   - Click "Save"

6. **Remove Old Records (if any)**
   - Delete any old A records pointing to different IPs
   - Keep MX records (for email) if you have them

### Verification

**How to Check if DNS is Propagating:**

```bash
# On Mac/Linux Terminal
dig leadingtoday.co.za

# Should show:
# leadingtoday.co.za.  3600  IN  A  216.198.79.1
```

**Or use online tools:**
- https://www.whatsmydns.net
- Enter: leadingtoday.co.za
- Type: A
- Should show: 216.198.79.1

### Timeline

- **Minimum:** 5 minutes
- **Typical:** 1-2 hours
- **Maximum:** 48 hours

**In Vercel:**
- The "Invalid Configuration" warning will disappear
- Status will change to "Valid Configuration"
- SSL certificate will auto-provision

---

## 🔧 Troubleshooting

### Common Issues

#### 1. "Invalid Configuration" Warning in Vercel

**Cause:** DNS records not updated or not propagated yet

**Solution:**
- Double-check DNS records at your registrar
- Wait up to 48 hours for propagation
- Use `dig` or whatsmydns.net to verify

#### 2. Site Not Loading

**Causes:**
- DNS not propagated
- Wrong IP address
- Caching

**Solutions:**
- Clear browser cache (Cmd+Shift+R on Mac)
- Try incognito/private window
- Wait for DNS propagation
- Check DNS records are correct

#### 3. SSL Certificate Error

**Cause:** SSL not provisioned yet

**Solution:**
- Wait for DNS to fully propagate
- Vercel will auto-provision SSL (usually 5-10 minutes after DNS is valid)
- No action needed on your part

#### 4. Changes Not Showing

**Cause:** Browser or CDN caching

**Solutions:**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Try incognito window
- Wait 1-2 minutes for Vercel CDN to update

#### 5. Build Failed on Vercel

**Cause:** Build errors or missing dependencies

**Solutions:**
- Check Vercel build logs
- Ensure `package.json` has all dependencies
- Test build locally: `npm run build`
- Check for TypeScript errors

---

## 🔄 Future Updates

### Making Changes to the Website

1. **Edit Locally**
   ```bash
   cd "/Users/johanngouws/Desktop/LT Consulting/JohannG/leadingtoday"
   npm run dev
   # Make your changes
   # Test at http://localhost:3000/landing
   ```

2. **Commit to GitHub**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

3. **Automatic Deployment**
   - Vercel detects the push
   - Automatically builds and deploys
   - Live in ~1-2 minutes
   - No manual steps needed!

### Environment Variables (If Needed Later)

**For API Keys, etc.:**

1. In Vercel Dashboard
2. Go to Settings → Environment Variables
3. Add variables:
   - `NEXT_PUBLIC_CONVERTKIT_API_KEY`
   - `CALENDLY_API_KEY`
   - etc.

4. Redeploy for changes to take effect

### Adding Email Service (Future)

**When you want to connect the lead magnet form:**

1. Sign up for email service (ConvertKit, Mailchimp, etc.)
2. Get API key
3. Create `/app/api/subscribe/route.ts`
4. Add API key to Vercel environment variables
5. Update `LeadMagnetModalLanding.tsx` to call API
6. Push to GitHub → Auto-deploy

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Create GA4 Property**
   - Visit: https://analytics.google.com
   - Create property for leadingtoday.co.za

2. **Get Measurement ID**
   - Copy your G-XXXXXXXXXX ID

3. **Add to Project**
   - Install: `npm install @next/third-parties`
   - Update `app/layout.tsx`
   - Add Google Analytics component

4. **Push Changes**
   ```bash
   git add .
   git commit -m "Add Google Analytics"
   git push
   ```

### Vercel Analytics (Built-in)

1. In Vercel Dashboard
2. Go to Analytics tab
3. Enable Vercel Analytics
4. Install package if prompted
5. Already free for your usage level!

---

## 🎯 Success Checklist

### Initial Deployment
- [x] Removed nul file
- [x] Organized components (active vs archived)
- [x] Created backup folder
- [x] Initialized git repository
- [x] Pushed to GitHub
- [x] Created Vercel account
- [x] Connected GitHub to Vercel
- [x] Imported LeadingToday project
- [x] Initial Vercel deployment successful
- [x] Added custom domain in Vercel
- [ ] Updated DNS records at registrar (IN PROGRESS)
- [ ] DNS propagation complete
- [ ] SSL certificate provisioned
- [ ] Site live at leadingtoday.co.za

### Post-Launch
- [ ] Test all CTAs (Download, Book Coffee)
- [ ] Test on mobile devices
- [ ] Set up Google Analytics
- [ ] Connect email service for lead magnet
- [ ] Add Calendly API if needed
- [ ] Monitor Vercel Analytics
- [ ] A/B test different copy

---

## 📞 Quick Reference

### Important URLs
- **GitHub Repo:** https://github.com/JohannGouws13/LeadingToday
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Live Site:** https://leadingtoday.co.za
- **Preview URL:** https://leadingtoday.vercel.app
- **Local Dev:** http://localhost:3000/landing

### Important Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Deploy to GitHub (auto-deploys to Vercel)
git add .
git commit -m "Your message"
git push
```

### DNS Records Quick Reference

```
A Record:
Type:  A
Name:  @
Value: 216.198.79.1

CNAME Record:
Type:  CNAME  
Name:  www
Value: cname.vercel-dns.com
```

### Support Resources
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** support@vercel.com
- **This Guide:** Check PROJECT_STATUS.md and DEPLOYMENT_GUIDE.md

---

## 🎉 Final Notes

**You've successfully:**
✅ Built a professional, high-converting landing page  
✅ Organized your codebase  
✅ Deployed to GitHub  
✅ Set up Vercel deployment  
✅ Configured custom domain (DNS pending)

**Next time you need to update:**
1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub
4. Vercel auto-deploys!

**That's it!** Your deployment workflow is now streamlined and automated.

---

**Created:** 10 February 2026  
**Author:** AI Assistant  
**Project:** LeadingToday  
**Status:** ✅ Production Ready
