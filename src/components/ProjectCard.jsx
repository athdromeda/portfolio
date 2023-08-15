import { FiExternalLink } from 'react-icons/fi';
import Tag from './Tag';
import { useState } from 'react';

function ProjectCard({ title, description, thumbnailUrl, projectUrl, stack }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="h-80 my-16 md:my-6 md:mx-3 text-left cursor-pointer bg-white flex flex-col justify-between"
    >
      <div className="h-full">
        <img src={thumbnailUrl} alt="" />
      </div>
      <div className="bg-[#7329c6] h-40 flex flex-col py-4 px-5">
        <h3 className="flex items-center justify-between">
          <b>{title}</b>
          {isHover && (
            <a href={projectUrl}>
              <FiExternalLink />
            </a>
          )}
        </h3>
        <p className="text-sm">{description}</p>
        {isHover && (
          <div className="mt-4 flex flex-wrap gap-1">
            {stack.map((item, id) => (
              <Tag key={id} name={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
