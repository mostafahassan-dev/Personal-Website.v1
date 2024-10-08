import React from 'react'
import { projects } from '../../constants/constants'
import { Heading, ProjectCard } from '../../components'
import { Col,  Container,  Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsArrowRightShort} from 'react-icons/bs'


function Projects() {
  const visibleProjectsCount = 4;
  const visibleProjects = projects.slice(0, visibleProjectsCount)



  return (
    <section id='projects' className='section__padding'>
      <Heading sectionHeader= 'Some Projects I’ve Built'/>

      <Container className='px-0' >
        <Row className='project-cards g-0'>
          {visibleProjects.map(({ title, description, image, tags, source, visit, id }) => (
            <Col sm={12}  key={id} className='pb-3 px-0'>
              <ProjectCard
                title={title}
                description={description}
                image={image}
                tags={tags}
                source={source}
                visit={visit}
              />
            </Col>
            ))
          }
        </Row>
        <div>
          <Link to="/portfolio" className='custom-link d-inline-block m-0 mt-5' aria-label="View Full Portfolio">
            <span>View Full Portfolio</span> <BsArrowRightShort className='arrow'/> 
          </Link>
        </div>
        

      </Container>
     
    </section>
  )
}

export default Projects