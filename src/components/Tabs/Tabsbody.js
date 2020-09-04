import React from 'react'

import {Tabs,Tab} from 'react-bootstrap';
import BookCards from './BookCards'
import {getAll} from "./BooksAPI";


class Tabsbody extends React.Component {

    state = {books:[]}
    componentDidMount(){
        getAll().then(
            response=>{
                this.setState({ books: response})
                console.log(response)
            }
        )
    }

    //
    sort_books=(books,shelf)=>{
        /*
        @description:
          Sort to book to the different shelfs
         */
        books.filter(book=>{return book.shelf===shelf})
    }

    render() {


        return (
            <Tabs defaultActiveKey="current_readings" id="uncontrolled-tab-example">
                <Tab eventKey="current_readings" title="Current Readings">
                    <div className="bookshelf">
                        <div className="bookshelf-books">
                            <ol className="books-grid">

                                <BookCards
                                    books={this.state.books}
                                    shelf={"currentlyReading"}
                                ></BookCards>
                            </ol>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="want_to_read" title="Want to Read">

                </Tab>
                <Tab eventKey="read" title="Read">

                </Tab>
                <Tab eventKey="search" title="search">

                </Tab>
            </Tabs>
        );
    }
}
export default Tabsbody
