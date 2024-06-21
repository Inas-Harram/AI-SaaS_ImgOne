🤖 AI-SaaS_ImgOne

AI image SaaS platform with robust image processing capabilities, secure payment infrastructure, advanced AI features, and more.

🔧 Tech Stack:

Next.js TypeScript MongoDB Clerk (for authentication) Cloudinary (for image management) Stripe (for secure payments) Shadcn (for AI features integration) TailwindCSS (for styling)

🌟 Key Highlights:

Advanced Image Search Image Restoration Object Removal Community Image Showcase Responsive UI/UX

👉 Quick Start

Follow these steps to set up the project locally on your machine. Make sure you have the following installed on your machine: Git Node.js npm (Node Package Manager)

Cloning the Repository

git clone https://github.com/Inas-Harram/AI-SaaS_ImgOne.git 
cd imgone

Installation Install the project dependencies using npm: npm run dev

Set Up Environment Variables Create a new file named .env.local in the root of your project and add the following content:

#NEXT NEXT_PUBLIC_SERVER_URL=

#MONGODB MONGODB_URL=

#CLERK NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= CLERK_SECRET_KEY= WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/ NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= CLOUDINARY_API_KEY= CLOUDINARY_API_SECRET=

#STRIPE STRIPE_SECRET_KEY= STRIPE_WEBHOOK_SECRET= NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the Clerk, MongoDB, Cloudinary and Stripe

Running the Project

npm run dev

Open http://localhost:3000 in your browser to view the project.
