# Premium Agency Website

A modern, premium-looking Next.js website built with the App Router, TypeScript, and Tailwind CSS. Features glassmorphism design, smooth animations, and optimized for performance and SEO.

## ✨ Features

- **Modern Design**: Premium glassmorphism UI with smooth animations
- **Performance Optimized**: Fast loading times and optimal Core Web Vitals
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Mobile First**: Fully responsive design that works on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safe**: Built with TypeScript for better development experience
- **Contact Form**: Interactive contact form with validation
- **Smooth Animations**: Framer Motion animations for engaging UX

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vercel** - Deployment platform

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd premium-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌍 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Set up your environment variables in Vercel dashboard

### Deploy to Other Platforms

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📝 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME="Premium Agency"

# Contact Form
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
FORM_SECRET_KEY=your-secret-key

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Customization

1. **Colors & Branding**: Update colors in `tailwind.config.js`
2. **Content**: Modify content in `app/page.tsx` and component files
3. **Images**: Replace placeholder images in `public/images/`
4. **SEO**: Update metadata in `app/layout.tsx`

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation
│   ├── ServiceCard.tsx    # Service cards
│   ├── Testimonial.tsx    # Testimonial cards
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx         # Footer
├── public/
│   ├── images/           # Static images
│   └── robots.txt       # SEO robots file
├── .env.example         # Environment variables template
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (600, 700)
- **Secondary**: Purple (600, 700)
- **Accent**: Blue (600)
- **Neutral**: Slate (50-900)

### Components
- **Glass Effect**: Glassmorphism utility class
- **Buttons**: Primary and secondary button styles
- **Cards**: Service and testimonial card components

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- ESLint configuration for Next.js
- TypeScript strict mode
- Prettier for code formatting (add `.prettierrc` if needed)

## 📊 Performance

This website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS scores
- **SEO**: Meta tags, structured data, sitemap
- **Accessibility**: WCAG 2.1 AA compliance
- **Loading Speed**: Image optimization, code splitting

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all TypeScript types are correct
2. **Animation Issues**: Check Framer Motion version compatibility
3. **Styling Issues**: Verify Tailwind CSS configuration
4. **Deployment**: Check environment variables and build settings

### Support

For issues and questions:
1. Check the documentation
2. Review the GitHub issues
3. Contact the development team

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ by Premium Agency
