# Launch Prep

## Current Direction

- Registrar/DNS: Squarespace
- Website host: Netlify
- Source repo: GitHub
- Email host: DreamHost
- Nameservers stay at Squarespace
- DNS changes require Ron's explicit approval

## Website DNS Records

Retrieve final values from the Netlify dashboard after the site is created and the custom domains are added.

- Apex/root: must retrieve from Netlify dashboard
- `www`: must retrieve from Netlify dashboard

Known Netlify external DNS documentation commonly uses:

- Apex fallback A record: `75.2.60.5`
- Apex ALIAS/ANAME target where supported: `apex-loadbalancer.netlify.com`
- `www` CNAME target: the exact Netlify site subdomain, such as `support-youth-djs-site.netlify.app`, after the site exists

Do not apply these until Netlify confirms the exact records for this site.

## DreamHost Email DNS Records

Retrieve final values from DreamHost after adding `supportyouthdjs.com` for email.

Mailboxes to prepare only:

- contact@supportyouthdjs.com
- shop@supportyouthdjs.com

Records needed for Squarespace:

- MX: must retrieve from DreamHost dashboard
- SPF TXT: must retrieve from DreamHost dashboard
- DKIM TXT: must retrieve from DreamHost dashboard if provided
- DMARC TXT recommendation: conservative starter after mailbox is live, such as `v=DMARC1; p=none; rua=mailto:contact@supportyouthdjs.com`

Current Squarespace email security defaults block sending and should be replaced only after DreamHost values are confirmed.
