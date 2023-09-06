import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";

import { Container } from "react-bootstrap";
import MyButton from "./components/MyButton";
import SingleBook from "./components/Singlebook";
function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      <MyButton />

      <SingleBook />
      <MyFooter />
    </Container>
  );
}

export default App;
