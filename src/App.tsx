import { Outlet } from "react-router";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="">
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default App;
