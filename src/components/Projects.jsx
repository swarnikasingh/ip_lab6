import React from 'react'
import styled from 'styled-components';
import projectsData from './project';

const Projects = () => {
  const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 20px;
    margin: 20px;
    cursor: pointer;
  `;

  const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
  `;

  const TechStack = styled.p`
    font-size: 16px;
    color: #666;
  `;

  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <div>
      {projectsData.map((project) => (
        <Card key={project.id} onClick={() => handleClick(project.githubUrl)}>
          <Title>{project.name}</Title>
          <TechStack>{project.techStack}</TechStack>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
