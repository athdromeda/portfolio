import { FiMoon } from 'react-icons/fi';

function Header() {
  return (
    <header className="sticky flex items-center justify-between top-0 p-4 h-12 backdrop-blur-md ">
      <b>@athdromeda</b>
      <FiMoon />
    </header>
  );
}

export default Header;
