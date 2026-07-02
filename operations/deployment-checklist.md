# Deployment Checklist

1. Create GitHub repo `support-youth-djs-site`.
2. Push this standalone project to that repo.
3. Create Netlify site from the GitHub repo.
4. Confirm build command `astro build`.
5. Confirm publish directory `dist`.
6. Add custom domains in Netlify:
   - `supportyouthdjs.com`
   - `www.supportyouthdjs.com`
7. Copy exact Netlify DNS records for Squarespace.
8. Add `supportyouthdjs.com` in DreamHost for email.
9. Create only:
   - `contact@supportyouthdjs.com`
   - `shop@supportyouthdjs.com`
10. Copy exact DreamHost MX, SPF, DKIM, and DMARC guidance for Squarespace.
11. Apply DNS only after Ron approves.
