import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: 'Tic Tac Toe Game',
        description: 'A simple tic tac toe game built with Python.',
        image: '/Tic-Tac.png',
        tag: 'Python',
        link: 'https://github.com/soplima/Tic-tac-toe-game'
    },
    {
        id: 2,
        title: 'Number Guessing Game',
        description: 'A Number Guessing Game built with Python.',
        image: '/number-guessing.png',
        tag: 'Python',
        link: 'https://github.com/soplima/Number-Guessing-Game'
    },
    {
        id: 3,
        title: 'Password Generator',
        description: 'A simple password generator built with Python.',
        image: '/password-gen.png',
        tag: 'Python',
        link: 'https://github.com/soplima/Password-Generator'
    }
]    

const ProjectsSection = () => {
  return (
    <>
    <h2 className="text-4xl font-bold mb-4">Meus Projetos</h2>
    <div>{projectsData.map((project) => 
    <ProjectCard 
    key={project.id} 
    title={project.title} 
    description={project.description} 
    imgUrl={project.image} 
    link={project.link}
    />)}
    </div>
    </>
  )
}

export default ProjectsSection