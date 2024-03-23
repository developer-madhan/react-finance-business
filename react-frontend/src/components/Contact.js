import React from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { GiSmartphone } from "react-icons/gi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Make POST request to your server to save the form data
      await axios.post("http://localhost:5000/api/submitForm", values);

      // Log success message
      console.log("Form submitted:", values);

      // Reset form fields
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Col md={6}>
          <Form className="contact-form pt-5">
            <h1>Drop Us a Message</h1>
            <Row>
              <Col xs={12} sm={6} className="mt-3 mt-md-5">
                <BootstrapForm.Group>
                  <Field
                    type="text"
                    name="name"
                    className="form-control "
                    placeholder="Your Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
              <Col xs={12} sm={6} className=" mt-3 mt-md-5">
                <BootstrapForm.Group>
                  <Field
                    type="email"
                    name="email"
                    className="form-control "
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
              <Col xs={12} className="mt-3">
                <BootstrapForm.Group>
                  <Field
                    as="textarea"
                    name="message"
                    className="form-control "
                    placeholder="Message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <Button type="submit" className="sub" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </Form>
        </Col>
      )}
    </Formik>
  );
};

function GoogleMap() {
  return (
    <Col md={6}  >
     <div style={{ position: "relative", overflow: "hidden", paddingTop: "56.25%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5391465867515!2d80.25592027479509!3d13.064980312824728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e8064e39d7%3A0xe7f430899c08fe2c!2sAiravath%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711168039509!5m2!1sen!2sin"
        width="600"
        height="650"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded"
      ></iframe>
    </div>
    </Col>
  );
}

const Contact = () => {
  return (
    <div className="contact-wraper" id="contact">
      <Container>
        <div className="contact-wrap justify-content-center">
          <Row>
            <Col xs={12} sm={4}>
              <div className="detail-column">
                <span className="icn-wrap no-shrink ">
                  <GiSmartphone color="yellow" size={50} />
                </span>
                <div className="descr-wrap">
                  <h3>give us a call</h3>
                  <p>
                    <a href="tel:7771234567">(777) 123 4567</a>,{" "}
                    <a href="tel:7771234567">(777) 123 4567</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="detail-column">
                <span className="icn-wrap no-shrink ">
                  <FaRegEnvelope color="yellow" size={50} />
                </span>
                <div className="descr-wrap">
                  <h3>send us a message</h3>
                  <p>
                    <a href="mailto:info@company.com">info@company.com</a>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="detail-column">
                <span className="icn-wrap no-shrink ">
                  <IoLocationOutline color="yellow" size={50} />
                </span>
                <div className="descr-wrap">
                  <h3>visit our location</h3>
                  <p>1234 Lorem Ispum Georgia, GA 12345</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <ContactForm />
            <GoogleMap />
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
