import './app.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Detail from './Detail';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoesChange] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <section className="main">
            <h1 className="main-title">최대 40% 할인</h1>

            <p className="main-desc">
              여성의류 최대 40%할인 이벤트 진행중입니다.
            </p>
            <Button variant="primary" className="main-btn">
              더 보러가기
            </Button>
          </section>
          <div className="container">
            <div className="row">
              {shoes.map((data, i) => {
                return <Item shoes={data} i={i}></Item>;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>
      </Switch>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <div className="item">
        <img
          src={
            'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
          }
          alt="img1"
          width="100%"
        />
        <h2>{props.shoes.title}</h2>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
      </div>
    </div>
  );
}

export default App;
