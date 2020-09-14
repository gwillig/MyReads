import React from "react"
import { Collapse} from 'react-bootstrap'


class BookCard extends React.Component {

    state = {
        book:this.props.book,
        open: false,

    }

    getStyle =(book)=>{
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
    get_description= (book)=>{
        debugger
        try{

           console.log( book.props.book.description)
           let book_description =  book.props.book.description.substring(0, 100)
           return book_description
        }
        catch(e){
            return "No description"
        }
    }
    render(){
        const { open } = this.state;

        // return(<h1>{this.state.book.shelf}</h1>)
        return (
            <li key={this.state.book.id}>
                <div className="book">
                    <div className="book-top">

                        <div className="book-cover" style={this.getStyle(this.state)}
                             onClick={() => this.setState({open: !open})}
                             aria-controls="example-collapse-text"
                             aria-expanded={open}></div>
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


                    <div >
                        <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                                {
                                    this.get_description(this)
                                }

                                <a href={`${this.state.book.previewLink}`} target="noreferrer">...[MORE]</a>


                            </div>
                        </Collapse>
                    </div>

                </div>
            </li>    )
    }
}

export default BookCard
