# 5 February 2025 - Next Steps

## 1. Choose the Framework Name

**Options:**
- [ ] 7 Second Pitch
- [ ] The LTP (LeadingToday Playbook)
- [ ] The HOOK Framework ⭐ (Currently in use on the website)

**Decision:** _________________________

**Rationale:**
- **The HOOK Framework**: Already integrated into the website copy, memorable acronym, action-oriented
- **7 Second Pitch**: Direct and clear, focuses on the time benefit
- **The LTP**: Professional acronym, ties to brand name

---

## 2. Rebrand the Website

Once the name is chosen, update all references across the site:

### Files to Update:
- [ ] `components/LandingHero.tsx` - Main headline and CTA text
- [ ] `components/ThreeFixesSection.tsx` - Framework references in Fix 01
- [ ] `components/HowItWorksLanding.tsx` - Step 1 description
- [ ] `components/LeadMagnetModalLanding.tsx` - Modal content and download button
- [ ] Any other components mentioning "HOOK Framework"

### Branding Checklist:
- [ ] Update all CTAs to use the new framework name
- [ ] Ensure consistent capitalization throughout
- [ ] Update meta descriptions if needed
- [ ] Check all button text for consistency

---

## 3. Create the Document

### Document Structure:

**Cover Page:**
- Framework name with logo/branding
- Subtitle: "Master Your 7-Second Pitch"
- Johann Gouws & LeadingToday branding

**Content Sections:**

1. **Introduction**
   - Why messaging matters
   - The cost of confusion
   - What you'll learn

2. **The Framework**
   - The 4 lines that hook attention
   - How to structure your pitch
   - Examples (Before/After)

3. **Your Turn**
   - Worksheet/template to fill in
   - Step-by-step guide
   - Common mistakes to avoid

4. **Next Steps**
   - Practice tips
   - How to test your pitch
   - Call to action (book coffee with Johann)

### File Format:
- [ ] Create PDF version (primary)
- [ ] Consider editable Word/Google Doc version
- [ ] Design with brand colors (blue #2563eb)

### Tools Needed:
- Canva / Figma for design
- Export as PDF
- Save to `/public/downloads/` folder

---

## 4. Add Download Functionality

### Current Status:
- Modal exists: `LeadMagnetModalLanding.tsx`
- Download button triggers modal
- Form collects: Name, Email, Business Name (optional)

### To Implement:

#### Option A: Direct Download (Simple)
```javascript
// In LeadMagnetModalLanding.tsx
const handleSubmit = async (e) => {
  e.preventDefault();

  // Save to database/email service (if needed)
  // await saveContact(formData);

  // Trigger download
  const link = document.createElement('a');
  link.href = '/downloads/hook-framework.pdf';
  link.download = 'The-HOOK-Framework.pdf';
  link.click();

  // Close modal
  onClose();
};
```

#### Option B: Email Delivery (Recommended)
- Integrate with email service (Resend, SendGrid, or Mailchimp)
- Send personalized email with download link
- Add contacts to mailing list
- Track downloads

### Implementation Tasks:
- [ ] Place PDF in `/public/downloads/` folder
- [ ] Update modal submit handler
- [ ] Test download flow
- [ ] Set up email service integration (if using Option B)
- [ ] Add thank you message after download
- [ ] Set up analytics tracking for downloads

---

## 5. Testing Checklist

Before going live:
- [ ] Download works on desktop
- [ ] Download works on mobile
- [ ] Form validation works correctly
- [ ] Email is collected properly
- [ ] PDF opens and displays correctly
- [ ] All links in PDF are clickable
- [ ] Branding is consistent throughout
- [ ] Test on different browsers (Chrome, Safari, Firefox)

---

## 6. Post-Launch

- [ ] Monitor download metrics
- [ ] Set up automated welcome email sequence
- [ ] Create follow-up email campaign
- [ ] Track conversion rate (downloads → coffee bookings)
- [ ] Collect user feedback on the framework

---

## Notes:

**Current Website Copy Using "HOOK Framework":**
- LandingHero: "Get The 7-Second Pitch That Closes Deals"
- ThreeFixesSection Fix 01: "The HOOK Framework. Four lines. Seven seconds."
- HowItWorksLanding Step 1: "Download The HOOK Framework"

**File Locations:**
- Landing page: `/app/landing/page.tsx`
- Components: `/components/`
- Public assets: `/public/`

---

## Questions to Answer:

1. What exactly are the "4 lines" of the HOOK Framework?
2. Do we have example pitches ready for the PDF?
3. What's the ideal length for the PDF? (1 page, 5 pages, 10 pages?)
4. Should we require email opt-in or allow direct download?
5. Do we need legal disclaimers/copyright notice in the PDF?

---

## Success Metrics:

- [ ] Framework name chosen and documented
- [ ] Website fully rebranded with new name
- [ ] PDF created and looks professional
- [ ] Download functionality tested and working
- [ ] First 10 downloads collected
- [ ] Follow-up email sequence ready

---

**Start Time:** _________
**Completion Time:** _________
**Status:** Not Started / In Progress / Complete
