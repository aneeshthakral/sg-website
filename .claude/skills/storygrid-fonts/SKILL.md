
---
name: storygrid-fonts
description: >
  Install and configure StoryGrid & Co. brand fonts (Bricolage Grotesque,
  Satoshi, JetBrains Mono) into the project. Use when setting up a new
  environment, onboarding fonts for Claude Design, or generating font asset
  files for pitch decks, proposals, RFPs/RFQs, LinkedIn carousels, and
  Instagram content.
when_to_use: >
  Trigger when the user mentions fonts, brand typography, design setup,
  Claude Design, pitch decks, proposals, RFPs, RFQs, LinkedIn carousels,
  or Instagram posts — and fonts are not yet confirmed installed.
---

# StoryGrid & Co. — Brand Font Setup

You are setting up the official StoryGrid & Co. type system.
Three fonts. One system. Apply without deviation.

## Brand Type System (v1.0 — Locked)

| Role         | Font                  | Weight               | Size Range     | Notes                          |
|--------------|-----------------------|----------------------|----------------|--------------------------------|
| Display      | Bricolage Grotesque   | Bold 700             | 48–64px        | Hero headlines, cover titles   |
| Section      | Bricolage Grotesque   | SemiBold 600         | 28–36px        | Section headers, slide titles  |
| Body         | Satoshi               | Regular 400          | 16–18px / 1.6lh| All long-form body text        |
| Captions     | Satoshi               | Medium 500           | 13–14px +0.02em| Labels, captions, tier names   |
| Mono/Accent  | JetBrains Mono        | Regular 400          | 13–14px        | AI labels, data, framework IDs |

---

## Step 1: Download Font Files

Run the following to fetch all three fonts via npm (no manual downloads needed):

```bash
mkdir -p assets/fonts/bricolage-grotesque
mkdir -p assets/fonts/satoshi
mkdir -p assets/fonts/jetbrains-mono

# Bricolage Grotesque via Google Fonts API
curl -L "https://fonts.google.com/download?family=Bricolage+Grotesque" \
  -o /tmp/bricolage.zip && \
  unzip -o /tmp/bricolage.zip -d assets/fonts/bricolage-grotesque/

# JetBrains Mono via npm (clean, versioned)
npm install --save-dev @fontsource/jetbrains-mono
cp -r node_modules/@fontsource/jetbrains-mono/files assets/fonts/jetbrains-mono/

# Satoshi via Fontshare CDN (approved for commercial use)
echo "Satoshi is served via Fontshare CDN. Add this to your CSS or HTML head:"
echo "@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap');"
```

## Step 2: Generate CSS Font Face File

Create `assets/fonts/storygrid-fonts.css`:

```css
/* StoryGrid & Co. — Brand Type System v1.0 */

/* Bricolage Grotesque — Display + Headings */
@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('./bricolage-grotesque/BricolageGrotesque-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('./bricolage-grotesque/BricolageGrotesque-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

/* Satoshi — Body + Captions (via Fontshare CDN) */
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap');

/* JetBrains Mono — Mono Accent */
@font-face {
  font-family: 'JetBrains Mono';
  src: url('./jetbrains-mono/jetbrains-mono-latin-400-normal.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* CSS Variables — StoryGrid Design Tokens */
:root {
  --font-display:   'Bricolage Grotesque', serif;
  --font-body:      'Satoshi', system-ui, sans-serif;
  --font-mono:      'JetBrains Mono', monospace;

  --size-display:   clamp(48px, 6vw, 64px);
  --size-section:   clamp(28px, 3.5vw, 36px);
  --size-body:      clamp(16px, 1.8vw, 18px);
  --size-caption:   13px;
  --size-mono:      13px;

  --lh-body:        1.6;
  --ls-caption:     0.02em;
}
```

## Step 3: Commit to Git

```bash
git add assets/fonts/
git add package.json package-lock.json
git commit -m "feat: add StoryGrid brand fonts (Bricolage Grotesque, Satoshi, JetBrains Mono)"
git push
```

---

## Step 4: Claude Design Setup Instructions

When the user is configuring Claude Design at claude.ai/design, provide these instructions:

**Company name and blurb field:**
**Font upload field (Add fonts, logos and assets):**
Upload the following files from `assets/fonts/`:
- `BricolageGrotesque-Bold.woff2`
- `BricolageGrotesque-SemiBold.woff2`
- `jetbrains-mono-latin-400-normal.woff2`
- `storygrid-fonts.css`

Note: Satoshi loads from Fontshare CDN — no file upload needed.

---

## Step 5: Apply Per Deliverable Type

### Pitch Decks and Proposals
- Cover title: Bricolage Grotesque Bold, 56–64px, `#F2EAE4` on `#080507`
- Slide headings: Bricolage Grotesque SemiBold, 32px
- Body copy: Satoshi Regular, 17px, `#C4A08A`, line-height 1.6
- Tier/pricing labels: Satoshi Medium, 13px, letter-spacing 0.02em
- Data callouts and framework labels: JetBrains Mono, 13px, `#2DD881`
- CTA buttons: Satoshi Medium, 15px, background `#E8451A`, text `#F2EAE4`

### RFPs and RFQs
- Document title: Bricolage Grotesque Bold, 48px
- Section headers: Bricolage Grotesque SemiBold, 28px
- Body paragraphs: Satoshi Regular, 16px, `#C4A08A`
- Reference codes and IDs: JetBrains Mono, 13px, `#D4912A`
- Tables: Satoshi Medium, 13px captions, Regular 14px data cells

### LinkedIn Carousels
- Slide 1 headline: Bricolage Grotesque Bold, 48px
- Slide body text: Satoshi Regular, 17–18px
- Accent labels (AI tags, stats): JetBrains Mono, 13px, `#2DD881`
- Slide count / attribution: Satoshi Medium, 12px, `#887060`
- CTA slide text: Bricolage Grotesque SemiBold, 28px

### Instagram Posts
- Single-image headline: Bricolage Grotesque Bold, 52–60px
- Caption overlay: Satoshi Regular, 15px
- Brand label: JetBrains Mono, 12px, `#E8451A`
- Story text: Satoshi Medium, 16px, high contrast only

---

## Verification Checklist

Before confirming setup as complete, verify:
- [ ] `assets/fonts/` directory exists in repo
- [ ] Bricolage Grotesque Bold and SemiBold `.woff2` files present
- [ ] JetBrains Mono `.woff2` file present
- [ ] `storygrid-fonts.css` created with all `@font-face` declarations and CSS variables
- [ ] Satoshi CDN import included in CSS
- [ ] Git commit made with message matching the convention above
- [ ] Claude Design font upload instructions provided to user
