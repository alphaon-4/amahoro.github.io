import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { useSubscription } from '../context/SubscriptionContext';
import './CostCalculator.scss';

const CostCalculator = ({ totalCost, setTotalCost, selectedFeatures, setSelectedFeatures, features, fee, setFee }) => {
  const { selectedSubscription } = useSubscription();

  useEffect(() => {
    const featuresCost = selectedFeatures.reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return sum + (feature ? feature.price : 0);
    }, 0);

    let calculatedFee = 0;
    if (featuresCost >= 200 && featuresCost <= 500) {
      calculatedFee = 24;
    } else if (featuresCost >= 600 && featuresCost <= 1000) {
      calculatedFee = 50;
    } else if (featuresCost > 1000 && featuresCost <= 2000) {
      calculatedFee = 70;
    } else if (featuresCost > 2000) {
      calculatedFee = 90;
    }
    setFee(calculatedFee);

    const basePrice = selectedSubscription?.price || 0;
    const maintenanceFee = selectedSubscription?.maintenanceFee || 0;
    const finalCost = selectedSubscription ? basePrice + featuresCost + maintenanceFee : featuresCost + calculatedFee;
    setTotalCost(finalCost);
  }, [selectedFeatures, selectedSubscription, setTotalCost, features, setFee]);

  const handleFeatureChange = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedFeatures([...selectedFeatures, id]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(featureId => featureId !== id));
    }
  };

  const featuresCost = selectedFeatures.reduce((sum, featureId) => {
    const feature = features.find(f => f.id === featureId);
    return sum + (feature ? feature.price : 0);
  }, 0);

  return (
    <section id="cost-calculator" className="cost-calculator-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Website Cost Calculator</h2>
          <p className="lead text-muted">Estimate the cost of your dream website by selecting the features you need.</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <Form>
                  <Row>
                    {features.map(feature => (
                      <Col md={6} key={feature.id}>
                        <Form.Check
                          type="checkbox"
                          id={feature.id}
                          label={`${feature.name} (${feature.price})`}
                          onChange={handleFeatureChange}
                          checked={selectedFeatures.includes(feature.id)}
                          className="mb-2"
                        />
                      </Col>
                    ))}
                  </Row>
                  {selectedSubscription && (
                    <>
                      <hr className="my-4" />
                      <p className="text-muted maintenance-fee-text">Includes a ${selectedSubscription.maintenanceFee}/month fee for domain renewal, software updates, server maintenance, and support.</p>
                    </>
                  )}
                </Form>
                <hr className="my-4" />
                <div className="text-center">
                  <h3>Estimated Cost: <span className="text-success display-6 fw-bold">${featuresCost}</span></h3>
                  {!selectedSubscription && fee > 0 && (
                    <>
                      <h4 className="mt-3">Fee: <span className="text-primary">${fee}</span></h4>
                      <h3 className="mt-3">Total Cost: <span className="text-success display-6 fw-bold">${totalCost}</span></h3>
                    </>
                  )}
                  {selectedSubscription && (
                    <>
                      <h4 className="mt-3">Monthly Fee: <span className="text-primary">${selectedSubscription.maintenanceFee}/month</span></h4>
                      <h3 className="mt-3">Total Cost: <span className="text-success display-6 fw-bold">${totalCost}</span></h3>
                    </>
                  )}
                  <p className="text-muted mt-3">This is an estimate. For a precise quote, please use our contact form.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CostCalculator;
