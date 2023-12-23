import React from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/images/Mockup.png';
import { useState } from 'react';

const Herosection = () => {
  const style = {
    background: 'linear-gradient(to right, rgba(24, 173, 228, 1), rgba(239, 143, 45, 1), rgba(170, 88, 170, 1))',
    // Add other styles as needed
  };

  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const circleStyle = {
    background: 'red', // Set the background color to red
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    cursor: 'pointer',
  };

  return (
    <Container fluid style={style}>
      <Row className="d-flex align-items-center">
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '5vw', fontWeight: 'bold' }}>
            Web3Makr Redefining
          </p>
        </Col>
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '5vw', fontWeight: 'bold' }}>
            How You Create
          </p>
        </Col>
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw' }}>
            Unlock the blockchain potential to create
          </p>
        </Col>
        <Col md={12} className="text-center">
          <p style={{ fontFamily: 'Inter', color: 'white', fontSize: '2vw' }}>
            Web3 Applications
          </p>
        </Col>
        <Col md={12} className="text-center">
          <div style={circleStyle} onClick={handlePlayClick}>
            <FontAwesomeIcon icon={faPlay} style={{ color: 'white', fontSize: '4vw' }} />
          </div>
        </Col>
        <Col md={12} className="text-center">
          <img src={Image} alt='' className="img-fluid" />
        </Col>
      </Row>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>YouTube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Embed the YouTube video iframe here */}
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your_video_id"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Herosection;

