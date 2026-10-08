# How to Deploy Your Portfolio

Since your code is already on GitHub, deploying is very easy! I recommend using **Vercel** as it is optimized for React/Vite apps.

## Option 1: Deploy with Vercel (Recommended)

1.  **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign up/login with your **GitHub account**.
2.  **Add New Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   You should see your repository `Vignesh_Portfolio` in the list. Click **"Import"**.
3.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect `Vite`. If not, select `Vite`.
    *   **Root Directory**: Leave as `./`.
    *   **Build Command**: `npm run build` (default).
    *   **Output Directory**: `dist` (default).
4.  **Deploy**: Click **"Deploy"**.
    *   Vercel will build your site. In about a minute, you'll get a live URL (e.g., `vignesh-portfolio.vercel.app`).

## Option 2: Deploy with Netlify

1.  **Go to Netlify**: Visit [netlify.com](https://netlify.com) and login with GitHub.
2.  **Add New Site**:
    *   Click **"Add new site"** -> **"Import from an existing project"**.
    *   Select **GitHub**.
3.  **Select Repo**: Choose `Vignesh_Portfolio`.
4.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  **Deploy**: Click **"Deploy Site"**.

## Important Note on Routing
If you add multiple pages (using `react-router`) in the future, you might need a `vercel.json` or `_redirects` file. For this single-page portfolio, **no extra configuration is needed**.
