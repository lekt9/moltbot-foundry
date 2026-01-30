---
name: foundry-browser-helper
description: Helper skill for browser automation patterns - provides guidance on using the OpenClaw browser tool effectively
metadata: {"openclaw":{"emoji":"🌐","requires":{"config":["browser.enabled"]}}}
---

# Browser Automation Helper

This skill provides patterns and guidance for browser automation using the OpenClaw `browser` tool.

## Quick Reference

### Opening Pages
```
browser open https://example.com
browser open https://example.com --target host  # Use host browser (for auth)
```

### Taking Snapshots
```
browser snapshot           # AI-readable format
browser snapshot --aria    # ARIA tree format (more detailed)
```

### Interacting with Elements
After taking a snapshot, use refs from the output:
```
browser click ref=btn_submit
browser type ref=input_email "user@example.com"
browser select ref=dropdown_country "United States"
```

### Managing State
```
browser cookies get
browser cookies set name=session value=abc123
browser headers set Authorization "Bearer token123"
```

## Authentication Patterns

### Manual Login (Recommended for protected sites)
1. Open the target site in the openclaw browser profile
2. Log in manually through the browser UI
3. Your session persists in the profile

### Cookie-based Auth
```
browser cookies set name=auth_token value=your_token domain=.example.com
```

### Header-based Auth
```
browser headers set Authorization "Bearer your_api_token"
```

## Common Workflows

### Form Submission
1. `browser open <url>`
2. `browser snapshot` - identify form fields
3. `browser type ref=<field_ref> "value"` for each field
4. `browser click ref=<submit_ref>`
5. `browser snapshot` - verify result

### Data Extraction
1. `browser open <url>`
2. `browser snapshot --aria` - get detailed element tree
3. Parse the snapshot output for needed data

### Multi-step Workflow
1. Open starting page
2. Loop: snapshot → act → wait → snapshot
3. Verify final state

## Tips

- **Anti-bot detection**: For sites with protection, use manual login first
- **Sandbox mode**: Use `--target host` when you need persistent auth
- **Timing**: Add appropriate waits between actions for dynamic content
- **Debugging**: Use screenshots (`browser screenshot`) to see visual state

## Using with Skills

Reference this skill's folder with `{baseDir}`:
- Store screenshots: `{baseDir}/screenshots/`
- Load templates: `{baseDir}/templates/`
