# Support Youth DJs Site

Standalone Astro static site for the Support Youth DJs community campaign operated by Ryan the 1 LLC.

This project is separate from 19U Roster and should not be merged into the 19U repo.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to `dist`.

## Netlify

- Build command: `astro build`
- Publish directory: `dist`
- Production domain: `supportyouthdjs.com`
- DNS stays at Squarespace unless Ron explicitly approves a nameserver move.

## Email

Email is intended to be hosted at DreamHost only for:

- contact@supportyouthdjs.com
- shop@supportyouthdjs.com

Do not guess mail DNS values. Retrieve MX, SPF, DKIM, and DMARC records from DreamHost before changing Squarespace DNS.
