import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col gap-12">
      <p>
        From building responsive e-commerce platforms that connect businesses to
        their customers, to crafting seamless user experiences for startups
        aiming to leave their mark, my projects reflect my commitment to
        excellence and pushing the boundaries of what&apos;s possible.
      </p>
      <div className="flex gap-12 flex-wrap items-center justify-center">
        <ProjectCard
          title={'API Waktu Salat'}
          description={'Moslem prayer times API built with Express'}
          thumbnail={'tn-wsapi.png'}
          projectUrl={'https://waktu-salat.vercel.app/'}
        />
        <ProjectCard
          title={'Memoir'}
          description={'Note-taking web apps with rich text-editing feature'}
          thumbnail={'tn-memoir.png'}
          projectUrl={'https://mymemoir.netlify.app/'}
        />
      </div>
    </div>
  );
}

export default Projects;
