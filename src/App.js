import React from 'react'
import './App.css'
import { Row, Col } from "react-bootstrap";
import BookShelf from './components/Body/BookShelf'
import HeadSection from './components/Header/HeadSection'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Searchpage from './components/Body/Searchpage'
import {getAll} from "./components/Body/BooksAPI";
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            books:[],
            searchResult:[],
            tabs:[
                {id:1, defaultActiveKey:"currentlyReading",title:"Current Readings"},
                {id:2, defaultActiveKey:"wantToRead",title:"Want to Read"},
                {id:3, defaultActiveKey:"read",title:"Read"},
            ]
        }
    }

    componentDidMount(){
        getAll().then(
            response=>{
                this.setState({ books: response})

            }
        )
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" render={props=>(
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
                    <div className="open-search">
                        <Link   to="/search">
                            <button>Add a book</button>
                        </Link>

                    </div>
                </div>
                    )}

                />
                <Route path="/search" render={props=>(
                    <Searchpage books={this.state.books}></Searchpage>
                )}/>
            </BrowserRouter>
        );
    }
}
export default App
