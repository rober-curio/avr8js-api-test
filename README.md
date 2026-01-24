# AVR8js API Test

Minimal test project to verify API routes work on Vercel with Node.js 20.x

## Deploy to Vercel

1. Initialize git:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub:
```bash
gh repo create avr8js-api-test --public --source=. --push
```

3. Deploy to Vercel:
- Go to https://vercel.com/new
- Import the `avr8js-api-test` repository
- Make sure Node.js version is set to 20.x (it will use the package.json engines field)
- Deploy

## Test

After deployment:
```bash
curl https://your-deployment-url.vercel.app/api/hello
```

Should return:
```json
{
  "message": "API is working!",
  "nodeVersion": "v20.x.x",
  "timestamp": "2026-01-24T..."
}
```
