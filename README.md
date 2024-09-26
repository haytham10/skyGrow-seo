# SkyGrow SEO Agency Website

Welcome to **SkyGrow**, your professional SEO agency. This repository contains the source code for the SkyGrow website, where clients can select from various SEO service packages, submit information, and process payments. The site is built using **Next.js** with the **App Router** and styled with **Tailwind CSS**.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview
SkyGrow is a minimalistic, dark-themed SEO agency website that allows clients to:
- Browse and choose from three SEO service packages.
- Submit their information after selecting a package.
- Process payments securely via Stripe or PayPal.
- Receive communication via email after purchase.

## Technologies Used
- **Next.js (App Router)**: A React framework for building web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Stripe/PayPal**: Payment gateways for secure transactions.
- **Google Analytics**: For tracking user interactions.
- **Automated Emails**: For follow-up communication.

## Features
- Dark, minimalistic design.
- Responsive layout for mobile and desktop.
- Three customizable SEO service packages.
- Client information collection and secure payment processing.
- Automated email communication post-purchase.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/sky-grow-agency.git

2. **Navigate to the project directory**:
   ```bash
   cd sky-grow-agency
   
3. **Install dependencies**:
   ```bash
   npm install
   
4. **Set up environment variables**:
- Create a .env.local file in the root of the project.
- Add your payment gateway keys, email service configurations, and other required variables.

5. **Run the development server**:
   ```bash
   npm run dev

6. **Build for production**:
   ```bash
   npm run build

## Usage
- Visit the homepage to view the SEO service packages.
- Select a package and proceed to submit your information.
- Complete the payment securely through Stripe or PayPal.
- You will receive an email confirmation upon successful payment.

  
## File Structure
  The key directories in the project include:
    ```bash
    
    /app
    
    /home            // Homepage components
    
    /services        // SEO service packages
    
    /thank-you       // Thank you page after payment
    
    /contact         // Contact page for inquiries
    
    /components        // Reusable components (e.g., Testimonial, PackageCard, Form)
  
    /styles            // Tailwind global styles
    /lib               // Utility files (email service, payment gateways)

## Deployment
- The site can be deployed using Vercel or any platform that supports Next.js applications.
- Follow the platform's guidelines to deploy the built version of the app (npm run build).

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

