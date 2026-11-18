# Ashish Eye Hospital – Next.js (App Router)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- Same CSS/design as the PHP site (app/main.css, app/animations.css)
- Forms post to /api/appointment and /api/contact -> saved in data/*.json
  (on Vercel/serverless use a DB or email service instead; edit lib/store.ts)
- Set NEXT_PUBLIC_SITE_URL for production metadata
