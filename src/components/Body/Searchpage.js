import React from "react";
import {search, update} from "./BooksAPI";
import BookCard from "./BookCard";
import {Link} from 'react-router-dom'


class Searchpage extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            searchResult:[],
            books:this.props.books
        }
    }

    handleChange(book_id,select_shelf){
        /*
        * @description
            Changes for a given book the shelf
        * */


        this.setState(
            {searchResult:this.state.searchResult.map(book=>{
                    if (book.id === book_id){
                        book.shelf = select_shelf
                        //Add Book to shelf
                        this.setState({books:[...this.state.books,book]})
                        // Update in Backend
                        update(book,select_shelf)
                    }
                    return book
                })
                }
        )


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
                    this.state.books.map(book=>{

                        response.map(book_search_result=>{

                            if(book.title==="Pro React"&&book_search_result.title==="Pro React"){
                                book_search_result.shelf=book.shelf
                                return  book_search_result

                            }
                            //===================

                            if(book.id===book_search_result.id){

                                book_search_result.shelf=book.shelf
                                return  book_search_result
                            }
                            //Check if book has already a shelf
                            if(typeof book_search_result.shelf==='undefined'){
                                book_search_result.shelf="none"
                                return  book_search_result
                            }

                            return  book_search_result
                        })

                        return book
                    })

                    this.setState({ searchResult: response})


                }
            })

        }
        else{
            this.setState({searchResult:[]})
        }

    }
    render(){

        return(

            <div className="search-books">
                <div className="search-books-bar">

                    <Link   to="/">
                        <button className="close-search"></button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input onChange={this.searchBooks} type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
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
        )
    }

}
export default Searchpage
