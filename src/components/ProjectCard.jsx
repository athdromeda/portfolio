import { FiExternalLink } from 'react-icons/fi';
import Tag from './Tag';

function ProjectCard({ title, description, thumbnail, projectUrl }) {
  return (
    <a className="text-left cursor-pointer transition-transform hover:-translate-y-2 hover:bottom-2 hover:shadow-lg">
      <img src={thumbnail} alt="" />
      <div className="bg-[#7329c6] flex flex-col py-4 px-5">
        <h3 className="flex items-center justify-between">
          <b>{title}</b>
          <a href={projectUrl}>
            <FiExternalLink />
          </a>
        </h3>
        <p className="text-sm">{description}</p>
        <div className="mt-4">
          <Tag name={'express'} />
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
