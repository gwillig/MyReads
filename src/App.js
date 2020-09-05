import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Tabsbody from './components/Tabs/Tabsbody'
import HeadSection from './components/Header/HeadSection'
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
                <Row style={{backgroundColor:"#174687"}}>
                    <Col>
                        <HeadSection></HeadSection>
                    </Col>
                </Row>
                <Row >

                        <Tabsbody></Tabsbody>

                </Row>
                <Row>

                </Row>
            </Container>
        );
    }
}

export default App
