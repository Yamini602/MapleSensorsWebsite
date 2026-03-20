🍁 MapleSensors

Production website for a Canadian precision sensor distributor — AI-assisted frontend with full independent ownership of infrastructure, deployment, and email configuration.

Live Site: www.maplesensors.ca  |  Deployed on: Netlify  |  Domain: Spaceship

Overview
--------
MapleSensors goes beyond a typical portfolio project. The frontend was built using Claude Code (AI-assisted development) — but the focus of this project was everything that comes after the code: getting a real domain live, wiring up a CI/CD pipeline, configuring DNS from scratch, and setting up a fully authenticated business email system.
All infrastructure, deployment, and email configuration was done independently.

Tech Stack
----------
LayerTechnologyFrontendHTML5, CSS3, Vanilla JavaScript (AI-assisted via Claude Code)DeploymentNetlify — CI/CD connected to GitHubVersion ControlGit + GitHubDomainSpaceship registrar → Netlify DNSBusiness EmailZoho MailForm HandlingNetlify Forms → email notificationsSSLAuto-provisioned via Let's Encrypt

What I Built & Configured
-------------------------
**Frontend -**

Responsive multi-page layout — mobile-first across all screen sizes
Product catalogue with dynamic JavaScript filtering
Contact form integrated with Netlify Forms
Scroll-triggered reveal animations

**Infrastructure (independently configured) -**

Custom domain purchased and nameservers delegated to Netlify DNS
Full DNS zone setup — NETLIFY, MX, SPF, DKIM, and DMARC records
Git → Netlify CI/CD pipeline — every push deploys to production in ~30 seconds
Zoho Mail configured with complete email authentication stack:

MX records — inbound email routing to Zoho servers
SPF — authorized Zoho as legitimate sender
DKIM — cryptographic email signing via zmail._domainkey
DMARC — policy enforcement with aggregate reporting

**Netlify Forms → Zoho inbox notification pipeline**

**What I Learned:**

DNS management — configuring a full DNS zone from scratch, understanding how MX, TXT, and CDN records work together
Email authentication — SPF, DKIM, and DMARC aren't just acronyms — I configured all three and debugged real delivery failures
CI/CD thinking — Git-connected deployments change how you approach version control and ship code
AI-assisted development — prompting effectively, reviewing generated code, and knowing enough to catch what's wrong
Production debugging — real issues on live infrastructure (DNS propagation, DKIM verification, form routing) are the best teacher
