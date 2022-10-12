// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreatePeople from "./components/CreatePeople.js";
import EditPeople from "./components/EditPeople.js";
import PeopleList from "./components/PeopleList.js";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-people"} className="nav-link">
                  People Management App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-people"} className="nav-link">
                    Create People
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/people-list"} className="nav-link">
                    People List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreatePeople />} />
                  <Route path="/create-people" element={<CreatePeople />} />
                  <Route path="/edit-people/:id" element={<EditPeople />} />
                  <Route path="/people-list" element={<PeopleList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
