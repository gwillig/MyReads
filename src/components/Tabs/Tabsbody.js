import React from 'react'

import {Tabs,Tab} from 'react-bootstrap';
import BookCard from './BookCard'
import {getAll, search, update} from "./BooksAPI";


class Tabsbody extends React.Component {

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
                console.log(response)
            }
        )
    }

    handleChange(book_id,select_shelf){
        /*
        * @description
            Changes for a given book the shelf
        * */

        console.log(book_id)
        console.log(select_shelf)

        this.setState(
            {books:this.state.books.map(book=>{
                    if (book.id === book_id){
                        book.shelf = select_shelf
                    }
                    return book
                })            }
            )
        this.setState(
            {searchResult:this.state.searchResult.map(book=>{
                    if (book.id === book_id){
                        book.shelf = select_shelf
                        //Add Book to shelf
                        this.setState({books:[...this.state.books,book]})
                    }
                    return book
                })            }
        )
        debugger
    }


    searchBooks = (e)=>{
        let input_field =  e.target.value;
        //1.Step: Check if input value is emtpy:
        if (input_field!=="" ){
            search(input_field).then(response=>{
                //Step: Check if response contains an error
                if(response.error){
                    this.setState({searchResult:[]})
                }
                else{

                    //1.Step: Set the shelf for each book
                    //1.1.Step: Check for every book in search result if it is already in shelf
                    response.map(book_search_result=>{
                        this.state.books.map(book=>{
                            book_search_result.shelf="none"
                            if(book.id===book_search_result.id){
                                book_search_result.shelf=book.shelf
                                return
                            }
                        })
                    })
                    this.setState({ searchResult: response})
                    console.log(response)
                }
            })

        }


    }

    render() {


        return (
            <Tabs defaultActiveKey={this.state.tabs[0].defaultActiveKey} id="uncontrolled-tab-example">
                {/*Creates the three tabs "Current Reading, Want to Read, Read"*/}
                {this.state.tabs.map(element=>{
                    console.log(element.defaultActiveKey)
                    return (
                        <Tab key={element.id} eventKey={element.defaultActiveKey} title={element.title}>
                            <div className="bookshelf">
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {

                                            this.state.books.filter(
                                                book=>book.shelf===element.defaultActiveKey
                                            ).map((book)=>(
                                                <BookCard key={book.id}
                                                    book={book}
                                                    handleChange={this.handleChange.bind(this)}
                                                ></BookCard>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                        </Tab>
                    )

                })}
                <Tab  eventKey="search" title="Search">
                    <div className="bookshelf">
                        <div className="bookshelf-books">
                            <div key="searchField" className="input-group mb-3">
                                <input onChange={this.searchBooks} type="text" className="form-control" placeholder="Search Author" />
                            </div>
                            <ol className="books-grid">
                                {

                                    this.state.searchResult.map((book)=>(
                                        <BookCard key={book.id}
                                                  book={book}
                                                  handleChange={this.handleChange.bind(this)}
                                        ></BookCard>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                </Tab>

                {/*<Tab eventKey="search" title="Search">*/}
                {/*    <div key="searchField" className="input-group mb-3">*/}
                {/*        <input onChange={this.searchBooks} type="text" className="form-control" placeholder="Search Author" />*/}
                {/*    </div>*/}
                {/*    <div className="bookshelf">*/}
                {/*        <div className="bookshelf-books">*/}
                {/*            <ol className="books-grid">*/}
                {/*                <BookCard*/}
                {/*                    books={*/}
                {/*                        this.state.searchResult*/}
                {/*                    }*/}
                {/*                ></BookCard>*/}
                {/*            </ol>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Tab>*/}
            </Tabs>
        );
    }
}
export default Tabsbody
