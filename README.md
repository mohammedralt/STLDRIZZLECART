# STL Drizzle Cart — Website

A full-featured website for STL Drizzle Cart, built with React + TypeScript + Tailwind CSS + Supabase + Formspree.

---

## 🚀 Quick Start (VSCode)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example env file:

```bash
cp .env.example .env
```

Then fill in your values in `.env` (see setup steps below).

### 3. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🗄️ Supabase Setup

### Step 1 — Create a Supabase project

1. Go to [https://supabase.com](https://supabase.com) and sign in
2. Click **New Project**, give it a name (e.g. `stldrizzlecart`), choose a region, and create

### Step 2 — Run the migration SQL

1. In your Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Open `supabase_migration.sql` from this project folder
4. Paste the entire contents and click **Run**

This creates the `bookings` table with the correct columns and security policies.

### Step 3 — Get your API keys

1. In Supabase, go to **Settings → API**
2. Copy:
   - **Project URL** → paste as `VITE_SUPABASE_URL` in `.env`
   - **anon / public key** → paste as `VITE_SUPABASE_ANON_KEY` in `.env`

---

## 📧 Formspree Setup

### Option A — Use the existing form ID

The code already has form ID `xjgewnkj` pre-configured. If that form belongs to your Formspree account, you're done — no changes needed.

### Option B — Create a new Formspree form

1. Go to [https://formspree.io](https://formspree.io) and sign in (or create a free account)
2. Click **New Form**
3. Name it something like `STL Drizzle Cart Bookings`
4. Set the notification email to `umairhussain1551@gmail.com`
5. Copy the form ID from the form's URL (e.g. `https://formspree.io/f/YOUR_FORM_ID`)
6. Set `VITE_FORMSPREE_ID=YOUR_FORM_ID` in your `.env` file

---

## 📁 Project Structure

```
stldrizzlecart/
├── public/
│   └── favicon.svg          ← Replace with real logo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Reviews.tsx
│   │   ├── BookingForm.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── supabase.ts       ← Supabase client
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example              ← Copy to .env and fill in
├── supabase_migration.sql    ← Run this in Supabase SQL editor
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🖼️ Replacing Placeholder Images

Search the code for `images.unsplash.com` — those are placeholder images. Replace them with:

| File | What to replace | Variable/path |
|------|----------------|---------------|
| `Hero.tsx` | Logo circle | Put your logo at `public/logo.png` and use `<img src="/logo.png" />` |
| `About.tsx` | Founders photo | Put at `public/founders.jpg` |
| `Services.tsx` | Product photo | Put at `public/product.jpg` |
| `Gallery.tsx` | 4 gallery images | Put at `public/gallery-1.jpg` through `gallery-4.jpg` |

---

## 🌐 Deploying to stldrizzlecart.com

### Recommended: Vercel (free)

1. Push this project to GitHub
2. Go to [https://vercel.com](https://vercel.com) and import the repo
3. Add your environment variables in the Vercel dashboard (same as `.env`)
4. Deploy — Vercel gives you a free `.vercel.app` URL instantly
5. To connect `stldrizzlecart.com`:
   - Buy the domain at [Namecheap](https://namecheap.com) or [Google Domains](https://domains.google)
   - In Vercel → Settings → Domains → Add your domain
   - Follow the DNS instructions Vercel gives you

### Alternative: Netlify

Same process — connect GitHub repo, add env vars, and add your custom domain in the Netlify dashboard.

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 📝 Viewing Bookings in Supabase

1. Go to your Supabase dashboard
2. Click **Table Editor** in the sidebar
3. Click on the `bookings` table
4. All form submissions will appear here in real time!

You can also set up email notifications in **Supabase → Database → Webhooks** for instant alerts when a new booking comes in.

---

## 🛟 Support

Questions? Contact Umair at umairhussain1551@gmail.com or (630) 915-8121.
