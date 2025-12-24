---
description: Deploy website to GitHub Pages with verification
---

# Deploy to GitHub Pages

Follow these steps to deploy the website to aalam.xyz:

## 1. Build and Deploy

// turbo
```bash
npm run deploy
```

This builds the production bundle and pushes to the `gh-pages` branch.

## 2. Wait for GitHub Pages to Update (30-60 seconds)

// turbo
```bash
sleep 45
```

## 3. Verify Deployment Registered

// turbo
```bash
gh api repos/1955mars/AalamEpochCalendar/deployments --jq '.[0] | {created_at, sha: .sha[0:7], environment}'
```

Check that the `created_at` timestamp is within the last 2 minutes.

## 4. Verify Live Site Responds

// turbo
```bash
curl -s -o /dev/null -w "%{http_code}" https://aalam.xyz/
```

Should return `200`. If not, wait 30 more seconds and retry.

## 5. If Deployment Failed

If step 3 shows an old timestamp or step 4 doesn't return 200:

1. Check GitHub Actions: `gh run list --limit 5`
2. Retry deployment: `npm run deploy`
3. Wait 60 seconds and verify again

## Quick Deploy (All-in-One)

// turbo-all
```bash
npm run deploy && sleep 45 && curl -s -o /dev/null -w "Site status: %{http_code}\n" https://aalam.xyz/ && gh api repos/1955mars/AalamEpochCalendar/deployments --jq '"Latest deployment: " + .[0].created_at + " (commit: " + .[0].sha[0:7] + ")"'
```
