import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      {/* <AllTheBooks /> */}
      <BookList books={fantasy} />
      <CommentArea />
      <MyFooter />
    </Container>
  );
}

export default App;
