Upload Website
This project is a static website built with HTML, CSS, and JavaScript, deployed to AWS S3 automatically using GitHub Actions.

Deployment Pipeline
Every time you push to the main branch, the site is automatically deployed to your S3 bucket using a GitHub Actions workflow.

How It Works
GitHub Actions Workflow Steps:
1️⃣ Trigger on Push

The workflow triggers only on pushes to the main branch.

2️⃣ Checkout Repository

Uses actions/checkout@v2 to pull your latest code.

3️⃣ Configure AWS Credentials

Uses aws-actions/configure-aws-credentials@v2

Credentials are securely stored in GitHub Secrets:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS Region: us-east-1

4️⃣ Sync to S3

Runs:

bash
Copy
Edit
aws s3 sync ./public/ s3://july16sushantpaudelbucket --delete
Uploads files from ./public/ to S3

Deletes files in the bucket that are not in ./public/

Deployment Requirements
AWS S3 Bucket: july16sushantpaudelbucket

GitHub Secrets:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

Files to be deployed are located in the public/ folder

Usage
Clone the repository

Add your website files to the public/ folder

Commit and push to main

The workflow will automatically deploy your site to S3

License
This project is for personal or educational use. Feel free to modify it for your own deployment needs.