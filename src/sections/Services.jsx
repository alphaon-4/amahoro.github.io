import React, { useState } from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import PriceTier from '../components/PriceTier';
import './Services.scss';

const servicesData = [
  {
    icon: <i className="fas fa-desktop"></i>,
    title: 'Custom Websites Rwanda',
    text: 'Bespoke websites tailored to your brand and goals, built right here in Rwanda.'
  },
  {
    icon: <i className="fas fa-shopping-cart"></i>,
    title: 'E-Commerce Solutions',
    text: 'Powerful online stores that drive sales and growth for businesses in Rwanda.'
  },
  {
    icon: <i className="fas fa-rocket"></i>,
    title: 'Landing Pages & Campaigns',
    text: 'High-converting pages for your marketing campaigns, optimized for the Rwandan market.'
  },
  {
    icon: <i className="fas fa-sync-alt"></i>,
    title: 'Website Redesigns & Modernization',
    text: 'Modernize your online presence with a fresh new look, ensuring your site stands out in Rwanda.'
  },
  {
    icon: <i className="fas fa-search"></i>,
    title: 'SEO Services Rwanda',
    text: 'Improve your ranking on search engines and get found by customers across Rwanda.'
  },
  {
    icon: <i className="fas fa-server"></i>,
    title: 'Hosting & Maintenance Rwanda',
    text: 'Reliable hosting and support to keep your site running smoothly for your Rwandan audience.'
  }
];

const pricingData = {
  monthly: [
    {
      title: 'Subscription',
      price: 39,
      maintenanceFee: 23,
      features: [
        'Basic Website (Up to 3 pages)',
        'Responsive Design',
        'Basic SEO',
        'Contact Form',
        'Ongoing Support'
      ],
      isFeatured: false
    },
    {
      title: 'Business',
      price: 99,
      maintenanceFee: 40,
      features: [
        'Up to 5 Pages',
        'Advanced SEO',
        'E-commerce Integration',
        'Blog Setup',
        '3 Months Support'
      ],
      isFeatured: true
    },
    {
      title: 'Premium',
      price: 150,
      maintenanceFee: 70,
      features: [
        'Unlimited Pages',
        'Custom Features',
        'Advanced Analytics',
        'Priority Support',
        '6 Months Support'
      ],
      isFeatured: false
    }
  ],
  yearly: [
    {
      title: 'Subscription',
      price: 390,
      maintenanceFee: 23,
      features: [
        'Basic Website (Up to 3 pages)',
        'Responsive Design',
        'Basic SEO',
        'Contact Form',
        'Ongoing Support'
      ],
      isFeatured: false
    },
    {
      title: 'Business',
      price: 990,
      maintenanceFee: 40,
      features: [
        'Up to 5 Pages',
        'Advanced SEO',
        'E-commerce Integration',
        'Blog Setup',
        '1 Year Support'
      ],
      isFeatured: true
    },
    {
      title: 'Premium',
      price: 1500,
      maintenanceFee: 70,
      features: [
        'Unlimited Pages',
        'Custom Features',
        'Advanced Analytics',
        'Priority Support',
        '1 Year Support'
      ],
      isFeatured: false
    }
  ]
};


const Services = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleBillingCycleChange = (val) => {
    setBillingCycle(val);
  };

  return (
    <section id="services" className="services-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">What We Offer</h2>
          <p className="lead text-muted">A complete suite of services to build and grow your online presence.</p>
        </div>
        <Row className="g-4 mb-5">
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={index} className="animate__animated animate__fadeInUp">
              <ServiceCard {...service} />
            </Col>
          ))}
        </Row>

        {/* Pricing Section */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Pricing</h2>
          <p className="lead text-muted">Flexible plans to fit your budget and needs.</p>
          <ToggleButtonGroup type="radio" name="billing-cycle" value={billingCycle} onChange={handleBillingCycleChange} className="mt-3">
            <ToggleButton id="monthly-btn" value="monthly" variant="outline-success">
              Monthly
            </ToggleButton>
            <ToggleButton id="yearly-btn" value="yearly" variant="outline-success">
              Yearly (Save 15%)
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Row className="g-4 justify-content-center">
          {pricingData[billingCycle].map((tier, index) => (
            <Col md={6} lg={4} key={index} className="animate__animated animate__fadeInUp">
              <PriceTier {...tier} billingCycle={billingCycle} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
