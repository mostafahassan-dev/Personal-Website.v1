import React from 'react';
import './Archive.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { topicFormat } from '../../constants/constants';
import { Helmet } from 'react-helmet-async';


const monthNames = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

function Archive({data}) {
  
  return (
    <>
    <Helmet>
      <title>Archive | Mostafa Hassan</title>
      <meta name="description" content="A big list of repos I’ve worked on" />
    </Helmet>
    
    <Container className='section__padding'>
        <Link to="/" className='back-link d-inline-block' aria-label="back">
          <BsArrowLeftShort className='arrow' /> <span>Mostafa Hassan</span>
        </Link>
       <div className="archive px-1 m-1  px-md-3 m-md-3">

        <div className="archive-header pb-3 ">
          <h1 className='mb-3'>Archive</h1>
          <p>A big list of Repos I’ve worked on</p>
        </div>        
        <Row className='mt-5 py-2 th'>
          <Col xs={4} md={2}><h4>Date</h4></Col>
          <Col xs={6} md={5}><h4> Project</h4></Col>
          <Col md={4} className='d-none d-md-block'><h4> Topics</h4></Col>
          <Col xs={1}><h4>Link </h4></Col>
        </Row>
        {data && (      
            
            data.filter((repo)=> repo.name !== 'mostafahassan-dev')
              .sort((a, b) => {
                const dateA = new Date(a.created_at);
                const dateB = new Date(b.created_at);
                return dateB - dateA;
              })
              .map((repo) => (
                  <Row key={repo.id} className='align-item-start py-2 tb'>
                    <Col  xs={4} md={2} className='date'>
                      <p>{`${monthNames[repo.created_at.slice(5, 7)]}-${repo.created_at.slice(0, 4)}`}</p>                  
                    </Col>

                    <Col xs={6}  md={5} className='title'>
                      <p>{repo.name}</p>
                      <p className='d-none d-md-block'>{repo.description}</p>
                    </Col>

                    <Col  md={4} className=' d-none d-md-block topics'>
                      <ul className='list-unstyled d-none d-md-flex flex-wrap '>
                        {repo.topics.map((topic, index) => (
                          // topicFormat[topic] &&
                          <li key={`${repo.id}-${index}`}>{topicFormat[topic] || topic}</li>
                        ))}
                      </ul>
                    </Col>

                    <Col xs={1} className='links d-flex '>
                      <a className='d-none d-md-block' href={repo.html_url} target='_blank' rel="noopener noreferrer"> <FiGithub /></a>
                      {
                        repo.homepage !== '' && repo.homepage !== null 
                        ? (<a className='ms-1 ms-md-2' href={repo.homepage} target='_blank' rel="noopener noreferrer"><FiExternalLink /></a>) 
                        : (<a className='ms-1 ms-md-2 d-md-none' href={repo.html_url} target='_blank' rel="noopener noreferrer"> <FiGithub /></a> )
                      }
                    </Col>      
                  </Row>
              ))
        )}
       </div>
 
    
  </Container>
  </>
  
  );
}

export default Archive;
