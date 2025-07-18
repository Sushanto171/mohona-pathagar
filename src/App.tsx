import { Outlet } from "react-router";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="min-h-[calc(100vh-230px)]">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
