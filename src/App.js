import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Tabsbody from './components/Tabs/Tabsbody'
import Header from './components/Header/Header'
import { Row, Container, Col } from "react-bootstrap";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Header></Header>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabsbody></Tabsbody>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        );
    }
}

export default App
