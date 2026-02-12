# Vercel Deployment Guide for Portfolio

## Prerequisites
1. Create a [Vercel account](https://vercel.com)
2. Create a [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas) (free tier available)
3. Install Vercel CLI: `npm install -g vercel`

## Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier is fine)
3. Create a database user with password
4. Whitelist all IP addresses (0.0.0.0/0) for Vercel serverless functions
5. Copy your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`)

## Deploy to Vercel

### Method 1: Via Vercel Dashboard (Easiest)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Import Project"
4. Import your GitHub repository
5. Set the root directory to `app`
6. Add environment variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string
7. Click "Deploy"

### Method 2: Via Vercel CLI

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variable:
   ```bash
   vercel env add MONGODB_URI
   ```
   Then paste your MongoDB connection string

5. Redeploy with environment variable:
   ```bash
   vercel --prod
   ```

## Environment Variables

Set these in Vercel Dashboard under Settings > Environment Variables:

- `MONGODB_URI` - Your MongoDB Atlas connection string (Required)

## After Deployment

1. Your site will be live at: `https://your-project.vercel.app`
2. Test the contact form to ensure it works
3. Check MongoDB Atlas to see if contact submissions are being saved

## Troubleshooting

- **Contact form not working**: Check Vercel function logs in dashboard
- **Database connection error**: Verify MongoDB URI and IP whitelist
- **Build errors**: Check build logs in Vercel dashboard

## Local Development

For local development, create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

Then run:
```bash
npm install
npm run dev
```

## Custom Domain (Optional)

1. Go to Vercel Dashboard > Your Project > Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
