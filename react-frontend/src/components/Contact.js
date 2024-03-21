import React from 'react';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { GiSmartphone } from "react-icons/gi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";


const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Make POST request to your server to save the form data
      await axios.post('http://localhost:5000/api/submitForm', values);
      
      // Log success message
      console.log('Form submitted:', values);
      
      // Reset form fields
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form" >
          <h1>Drop Us a Message</h1>
          <Row >
            <Col xs={12} sm={6} className="mt-3">
              <BootstrapForm.Group>
                <Field type="text" name="name" className="form-control " placeholder="Your Name" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
            <Col xs={12} sm={6} className="mt-3">
              <BootstrapForm.Group>
                <Field type="email" name="email" className="form-control " placeholder="Email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
            <Col xs={12} className="mt-3">
              <BootstrapForm.Group>
                <Field as="textarea" name="message" className="form-control " placeholder="Message" />
                <ErrorMessage name="message" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button type="submit" className="sub" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const Contact = () => {
  return (
    <div className="contact-wraper" id="contact">
      <Container>
        <div className="contact-wrap">
          <Row>
            <Col xs={12} sm={4}>
              <div className="detail-column">
                <span className="icn-wrap no-shrink "><GiSmartphone color="yellow" size={50} /></span>
                <div className="descr-wrap">
                  <h3>give us a call</h3>
                  <p><a href="tel:7771234567">(777) 123 4567</a>, <a href="tel:7771234567">(777) 123 4567</a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="detail-column">
                <span className="icn-wrap no-shrink "><FaRegEnvelope color="yellow" size={50} /></span>
                <div className="descr-wrap">
                  <h3>send us a message</h3>
                  <p><a href="mailto:info@company.com">info@company.com</a></p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="detail-column">
                <span className="icn-wrap no-shrink "><IoLocationOutline color="yellow" size={50} /></span>
                <div className="descr-wrap">
                  <h3>visit our location</h3>
                  <p>1234 Lorem Ispum Georgia, GA 12345</p>
                </div>
              </div>
            </Col>
          </Row>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
