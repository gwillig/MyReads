import React from 'react'

import './App.css'
import Tabsbody from './components/Tabs/Tabsbody'
import HeadSection from './components/Header/HeadSection'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div>
                <Row style={{backgroundColor:"#17a2b8"}}>
                    <Col>
                        <HeadSection></HeadSection>
                    </Col>
                </Row>
                <Row  style={{backgroundColor:"#17a2b8"}}>
                    <Col style={{paddingRight:" 0px"}}>
                    <Tabsbody></Tabsbody>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Footer></Footer>
                </Row>
            </div>
        );
    }
}

export default App
