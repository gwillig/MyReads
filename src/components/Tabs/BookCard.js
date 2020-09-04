import React from "react";
import {update} from "./BooksAPI";



class BookCard extends React.Component {



    state = {
        book:this.props.book,
    }

    getStyle = (book)=>{

        //1.Step: Check if image_url is not empty
        if(book.book.imageLinks){
            return{
                width: 128,
                height: 192,
                backgroundImage: `url(${book.book.imageLinks.thumbnail})`,
            }
        }

    }
    handleChange(e){
        /*@description:
            Detected change in select tag

        */
        //1.Step: Get the selected shelf for the book
        let select_shelf = e.target.value;
        let book_id = e.target.getAttribute("data-bookid");
        //2.Step: Call the parent function and handover the book and selected shelf
        this.props.handleChange(book_id,select_shelf)
    }

    render(){
        console.log(this.state.book.shelf)
        // return(<h1>{this.state.book.shelf}</h1>)
        return (
            <li key={this.state.book.id}>
                <div className="book">
                    <div className="book-top">

                        <div className="book-cover" style={this.getStyle(this.state)}></div>
                        <div className="book-shelf-changer">
                            <select data-bookid= {this.state.book.id} value={this.state.book.shelf} onChange={this.handleChange.bind(this)}>
                                <option value="move" disabled>Move to...</option>
                                <option  value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.state.book.title}</div>
                    <div className="book-authors">{this.state.book.authors?this.state.book.authors.toString():"Unkown"}</div>


                </div>
            </li>    )
    }
}

export default BookCard