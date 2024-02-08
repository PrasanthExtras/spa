import React, { useState,useContext } from 'react';
import { setBrandDetails } from './HomeSlice';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Details } from './Home';
const CarForm = ({brandid}) => {
  const [formData, setFormData] = useState({
    brand_id : brandid,
    model: '',
    color: '',
    location: '',
    noOfOwners: '',
    yearOfManufacture: '',
    transmission: '',
    insuranceValidUntil: '',
    externalFitments: '',
    kms: '',
    photo: null,
  });

  const { brand } = useContext(Details);
  const [submittedDetails, setSubmittedDetails] = useState(null);

  const dispatch = useDispatch();
  const formDetails = useSelector(state => state.details.brandDetails);
  const handleChange = (event) => {
    const { id, value, type, files } = event.target;

    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const updatedData = [...formDetails, formData];
    dispatch(setBrandDetails(updatedData));
  
    setSubmittedDetails(JSON.stringify(updatedData, null, 2));
    event.target.reset();
  };




  return (
    <Container>
      <Row className="justify-content-md-start text-start">
        <Col md={6}>
          <p>Add Details for the selected brand - <strong>{brand}</strong></p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder="Enter model" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" placeholder="Enter color" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="noOfOwners">
              <Form.Label>Number of Owners</Form.Label>
              <Form.Control type="text" placeholder="Enter number of owners" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="yearOfManufacture">
              <Form.Label>Year of Manufacture</Form.Label>
              <Form.Control type="text" placeholder="Enter year of manufacture" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="transmission">
              <Form.Label>Transmission</Form.Label>
              <Form.Control type="text" placeholder="Enter transmission type" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="insuranceValidUntil">
              <Form.Label>Insurance Valid Until</Form.Label>
              <Form.Control type="text" placeholder="Enter Insurance Valid Until" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="externalFitments">
              <Form.Label>External Fitments</Form.Label>
              <Form.Control type="text" placeholder="Enter external fitments" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="kms">
              <Form.Label>KMS</Form.Label>
              <Form.Control type="text" placeholder="Enter kilometers" onChange={handleChange}/>
            </Form.Group>

            <Form.Group controlId="photo">
              <Form.Label>Photo Upload</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleChange}/>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Saved Details</h3>
          {submittedDetails && <pre>{submittedDetails}</pre>}
        </Col>
      </Row>
    </Container>
  );
};

export default CarForm;
