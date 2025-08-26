import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blog.scss';

const blogPosts = [
  {
    id: 1,
    title: '5 Things Every Business Website Needs',
    excerpt: 'Discover the essential elements that make a business website effective and drive conversions.',
    link: 'https://3ddigital.com/5-things-every-business-website-needs/'
  },
  {
    id: 2,
    title: 'Why Mobile-Friendly Design Matters',
    excerpt: 'Learn why responsive design is crucial for your website\'s success in today\'s mobile-first world.',
    link: 'https://www.theedigital.com/blog/why-mobile-design-matters'
  },
  {
    id: 3,
    title: 'The Power of SEO for Small Businesses',
    excerpt: 'Understand how Search Engine Optimization can help your small business get found online.',
    link: 'https://aioseo.com/benefits-of-seo-for-small-businesses/'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Our Blog & Resources</h2>
          <p className="lead text-muted">Stay informed with our latest insights and helpful articles on web design and digital marketing.</p>
        </div>
        <Row className="g-4 justify-content-center">
          {blogPosts.map(post => (
            <Col md={6} lg={4} key={post.id}>
              <Card className="blog-post-card h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h5" className="fw-bold">{post.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{post.excerpt}</Card.Text>
                  <Button variant="outline-primary" href={post.link} className="mt-auto">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
