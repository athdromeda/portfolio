import { SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const tagIcon = [
  {
    express: <SiExpress />,
    tailwind: <SiTailwindcss />,
    next: <SiNextdotjs />,
  },
];

function Tag({ name }) {
  return (
    <div className="flex text-xs items-center gap-2 bg-white text-black w-fit px-2 py-1 rounded-md">
      {tagIcon[name]}
      {name}
    </div>
  );
}

export default Tag;
