import React from 'react'
import './Profile.css'

import { Col, Container, Row  } from 'react-bootstrap'
import{BsGithub,BsLinkedin ,BsInstagram, BsWhatsapp} from 'react-icons/bs'
import { MyNav } from '../../components'

function Profile({ avatar}) {
  const resumeURL = "/Mostafa_Hassan_Resume.pdf";
  return (
    <Container className='profile section__padding sticky-top d-flex flex-column justify-content-lg-between  '>
      <Row>
        <Col className="pe-4 pe-lg-0 d-flex flex-column flex-md-row-reverse align-items-center justify-content-between flex-lg-column align-items-lg-start ">
          <div className="avatar me-md-5 ">
            <img src={avatar} alt="avatar"  width='100%' height='100%' />
          </div>
          <div className=" text-center text-md-start">
            <h2>Mostafa Hassan</h2>
            <p className='pe-md-3'>Crafting interfaces. Building polished software and web experiences.</p> 
            
            <a href={resumeURL}
              target="_blank" rel='noopener noreferrer' >
              <button  className='custom-btn mt-1'>
                Resume
              </button>
            </a>            
          </div>
         
          <MyNav />
        </Col>
      </Row>    
      <Row className="links mt-4 max-width d-none d-md-flex ">
        <Col xs={2}> <a href='https://www.linkedin.com/in/mostafahassan-dev/'target='_blank' rel='noopener noreferrer'> <BsLinkedin title='LinkedIn'/></a> </Col>
        <Col xs={2}> <a href='https://github.com/mostafahassan-dev' target='_blank'rel='noopener noreferrer' > <BsGithub title='GitHub'/></a> </Col>
        <Col xs={2}> <a href='https://www.instagram.com/mostafahassan.dev/'target='_blank' rel='noopener noreferrer'> <BsInstagram title='Instagram'/></a> </Col>      
        <Col xs={2}> <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"> <BsWhatsapp title="WhatsApp" /> </a></Col>
      </Row>
  

     
    </Container>
  )
}

export default Profile