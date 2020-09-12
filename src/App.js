import React from 'react'
import './App.css'
import { Row, Col } from "react-bootstrap";
import BookShelf from './components/body/BookShelf'
import HeadSection from './components/Header/HeadSection'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


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
                    <BookShelf></BookShelf>
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
