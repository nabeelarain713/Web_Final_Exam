import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from '../assets/images/Mask group.png';

const Footer = () => {
  return (
    <div style={{ background: 'var(--bs-gradient)' }}>
      <Container fluid style={{ background: 'linear-gradient(to right, var(--bs-dark), var(--bs-black))' }}>
        <Row>
          <Col md={12} className="text-center">
            <img src={Image} alt='' className="img-fluid" />
          </Col>
          <Col md={12} sm={12} className="d-flex justify-content-center align-items-center mb-4" style={{ marginTop: "20px" }}>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>
              <a href="#Web3Makr" style={{ color: 'white', textDecoration: 'none' }}>Web3Makr</a>
            </span>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>
              <a href="#WhitePaper" style={{ color: 'white', textDecoration: 'none' }}>White paper</a>
            </span>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>
              <a href="#Services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            </span>
            <span style={{ color: 'white', marginRight: '30px', fontFamily: "Inter" }}>
              <a href="#Tool" style={{ color: 'white', textDecoration: 'none' }}>Tool</a>
            </span>
            <span style={{ color: 'white', fontFamily: "Inter" }}>
              <a href="#ContactUs" style={{ color: 'white', textDecoration: 'none' }}>Contact us</a>
            </span>
          </Col>
          <Col md={6} sm={12}>
            <p style={{ fontFamily: 'Inter', color: 'white' }}>
              Copyright 2022 © Web3makr
            </p>
          </Col>
          <Col md={6} sm={12} className="d-flex justify-content-end align-items-center">
            <a href="#Instagram" style={{ color: 'white', marginRight: '10px' }}>
              <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '24px' }} />
            </a>
            <a href="#Facebook" style={{ color: 'white', marginRight: '10px' }}>
              <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '24px' }} />
            </a>
            <a href="#Twitter" style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '24px' }} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Footer;
