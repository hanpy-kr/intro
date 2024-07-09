interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        padding: "100px",
      }}
    >
      {/* <Header /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
