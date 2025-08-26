import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './sections/Homepage';
import Services from './sections/Services';
import CostCalculator from './components/CostCalculator';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import { SubscriptionProvider } from './context/SubscriptionContext';

const features = [
  { id: 'basic', name: 'Basic Website (Up to 5 pages)', price: 200 },
  { id: 'ecommerce', name: 'E-commerce Functionality', price: 750 },
  { id: 'blog', name: 'Integrated Blog', price: 100 },
  { id: 'booking', name: 'Online Booking System', price: 350 },
  { id: 'customDesign', name: 'Custom Design & Branding', price: 400 },
  { id: 'seo', name: 'Advanced SEO Package', price: 250 },
  { id: 'maintenance', name: '1 Year Maintenance & Support', price: 200 },
  { id: 'socialMedia', name: 'Social Media Integration', price: 75 },
];

function App() {
  const [totalCost, setTotalCost] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [fee, setFee] = useState(0);

  return (
    <HelmetProvider>
      <SubscriptionProvider>
        <Helmet>
          <title>Amahoro Tech Solutions Rwanda - Your Partner for Web Development & Software</title>
          <meta name="description" content="Amahoro Tech Solutions is a leading software company in Rwanda. We build high-quality, affordable websites, custom software, and provide expert web development services. Get your cheap website or custom solution today!" />
          <meta name="keywords" content="software company Rwanda, web development Rwanda, build website Rwanda, cheap website Rwanda, website design Rwanda, custom software Rwanda, IT solutions Rwanda, Amahoro Tech Solutions" />
          <meta property="og:title" content="Amahoro Tech Solutions Rwanda - Your Partner for Web Development & Software" />
          <meta property="og:description" content="Amahoro Tech Solutions is a leading software company in Rwanda. We build high-quality, affordable websites, custom software, and provide expert web development services. Get your cheap website or custom solution today!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.amahorotechsolutions.com" />
          <meta property="og:image" content="https://www.amahorotechsolutions.com/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Amahoro Tech Solutions Rwanda - Your Partner for Web Development & Software" />
          <meta name="twitter:description" content="Amahoro Tech Solutions is a leading software company in Rwanda. We build high-quality, affordable websites, custom software, and provide expert web development services. Get your cheap website or custom solution today!" />
          <meta name="twitter:image" content="https://www.amahorotechsolutions.com/twitter-image.jpg" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Amahoro Tech Solutions",
              "url": "https://www.amahorotechsolutions.com",
              "logo": "https://www.amahorotechsolutions.com/amahoro-logo.svg",
              "description": "Leading software company in Rwanda offering web development, custom software, and IT solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "KG 543 St",
                "addressLocality": "Kigali",
                "addressRegion": "Kigali City",
                "postalCode": "",
                "addressCountry": "RW"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+250788123456",
                "contactType": "customer service",
                "email": "info@amahorotechsolutions.com"
              },
              "sameAs": [
                "https://www.facebook.com/amahorotechsolutions",
                "https://www.twitter.com/amahorotech",
                "https://www.linkedin.com/company/amahorotechsolutions"
              ]
            }
          `}} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Amahoro Tech Solutions",
              "url": "https://www.amahorotechsolutions.com",
              "logo": "https://www.amahorotechsolutions.com/amahoro-logo.svg",
              "sameAs": [
                "https://www.facebook.com/amahorotechsolutions",
                "https://www.twitter.com/amahorotech",
                "https://www.linkedin.com/company/amahorotechsolutions"
              ]
            }
          `}} />
        </Helmet>
        <Header />
        <main>
          <Homepage />
          <Services />
          <CostCalculator totalCost={totalCost} setTotalCost={setTotalCost} selectedFeatures={selectedFeatures} setSelectedFeatures={setSelectedFeatures} features={features} fee={fee} setFee={setFee} />
          <Portfolio />
          <About />
          <Blog />
          <Contact totalCost={totalCost} selectedFeatures={selectedFeatures} features={features} fee={fee} />
        </main>
        <Footer />
      </SubscriptionProvider>
    </HelmetProvider>
  );
}

export default App;