import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectList from '../data/projectList';

const Button = ({ text, setCategory, selectedCategory }) => {
  const buttonStyle =
    selectedCategory == text
      ? 'px-2 py-1 border border-white bg-white text-black'
      : 'px-2 py-1 border border-white hover:bg-white hover:text-black';

  return (
    <button
      onClick={() => setCategory(text)}
      className={'text-sm ' + buttonStyle}
    >
      {text}
    </button>
  );
};

function Projects() {
  const [category, setCategory] = useState('All');
  const projectCards = projectList
    .filter((project) => {
      if (category == 'Front-end') {
        return project.stack.includes('vite') || project.stack.includes('next');
      }
      if (category == 'Back-end') {
        return project.stack.includes('express');
      }
      if (category == 'Python') {
        return project.stack.includes('python')
      }
      return true;
    })
    .map((project, id) => (
      <ProjectCard
        key={id}
        title={project.title}
        description={project.description}
        thumbnailUrl={project.thumbnailUrl}
        projectUrl={project.projectUrl}
        stack={project.stack}
      />
    ));

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <div className="flex gap-3">
        <Button
          selectedCategory={category}
          setCategory={setCategory}
          text={'All'}
        />
        <Button
          selectedCategory={category}
          setCategory={setCategory}
          text={'Front-end'}
        />
        <Button
          selectedCategory={category}
          setCategory={setCategory}
          text={'Back-end'}
        />
        <Button
          selectedCategory={category}
          setCategory={setCategory}
          text={'Python'}
        />
      </div>
      <div className="flex w-full flex-wrap">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
          {projectCards.filter((_, id) => id % 3 == 0)}
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
          {projectCards.filter((_, id) => id % 3 == 1)}
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
          {projectCards.filter((_, id) => id % 3 == 2)}
        </div>
      </div>
    </div>
  );
}

export default Projects;
