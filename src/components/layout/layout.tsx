import NavBar from '../navBar/navBar';

interface Children {
  children: React.ReactNode;
}

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
