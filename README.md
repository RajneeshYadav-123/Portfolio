# Rajneesh Yadav - Portfolio

A premium, modern, and responsive developer portfolio built for Rajneesh Yadav, Full Stack Developer and GenAI Enthusiast.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## Features
- Fully responsive design (Mobile, Tablet, Desktop)
- Modern glassmorphism UI with subtle glowing effects and animations
- Centralized data configuration for easy content management
- Fast and optimized production build

## Local Setup

1. **Clone or Download the Repository:**
   Navigate to the project root directory.

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Copy the `.env.example` file to `.env.local` and add your social links:
   ```bash
   cp .env.example .env.local
   ```
   *Replace the placeholders in `.env.local` with your actual URLs.*

4. **Add Personal Assets:**
   - **Profile Image:** Place your profile picture at `public/rajneesh.jpeg`. It will automatically appear in the hero section with a glowing ring.
   - **Resume PDF:** Place your resume PDF at `public/Resume_Rajneesh_Yadav.pdf`. This will be available for download from the Hero section.

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit Content
All the personal information, projects, skills, and experience details are centralized in one file.
To update any information, edit `src/data/portfolio.ts`.

## How to Build for Production
To test the production build locally, run:
```bash
npm run build
npm start
```

## Vercel Deployment
This project is fully Vercel-compatible out of the box.
1. Push this repository to GitHub.
2. Log in to Vercel and import the repository.
3. Add the Environment Variables (from `.env.local`) in the Vercel dashboard during setup.
4. Click **Deploy**. Vercel will automatically detect Next.js and build the site.
