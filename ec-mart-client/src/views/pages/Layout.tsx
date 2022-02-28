import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
