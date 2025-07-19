Upload Website
A simple static website deployment pipeline using HTML, CSS, JavaScript, AWS S3, and GitHub Actions.

🚀 Automated Deployment
Whenever you push to the main branch, your site is automatically deployed to AWS S3 through a GitHub Actions pipeline.

⚙️ How It Works
GitHub Actions Workflow Steps:
1️⃣ Trigger on Push
Starts automatically on pushes to the main branch.

2️⃣ Checkout Code
actions/checkout@v2 pulls your latest repository code.

3️⃣ Configure AWS Credentials
aws-actions/configure-aws-credentials@v2 is used.

Your GitHub Secrets must include:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

Region: us-east-1

4️⃣ Sync to S3
aws s3 sync ./public/ s3://july16sushantpaudelbucket --delete
Uploads everything in ./public/ to your S3 bucket

Deletes files in S3 that are no longer present in ./public/

📦 Requirements
AWS S3 Bucket:
july16sushantpaudelbucket

GitHub Secrets:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

Website Files:
Put your static files in the public/ folder.

📝 Usage
1️⃣ Clone this repository

2️⃣ Add your website files to the public/ folder

3️⃣ Commit & push to main

4️⃣ Done! The workflow will deploy your site automatically.
