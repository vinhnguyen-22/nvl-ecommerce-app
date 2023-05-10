'use client';
import Container from '../Container';
import Categories from './Categories';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div
      className="fixed w-full bg-white z-10 shadow-sm top-0"
      style={{ height: 230 }}
    >
      <div className="py-1 border-b-[1px] bg-white ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 ">
            <Logo />
            <Search />
            <UserMenu />
          </div>
          <Nav />
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
