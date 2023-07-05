import { SiExpress } from 'react-icons/si';

function Tag({ name }) {
  return (
    <div className="flex items-center gap-2 bg-white text-black w-fit px-2 rounded-md text-sm">
      <SiExpress />
      {name}
    </div>
  );
}

export default Tag;
