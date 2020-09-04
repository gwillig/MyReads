import React from "react";




function BookCards(books) {

    let getStyle = (image_url)=>{

        return{
        width: 128,
        height: 192,
        backgroundImage: `url(${image_url})`,
        }
    }

    return books.books.map((book)=>(

            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={getStyle(book.imageLinks.smallThumbnail)}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                </div>
            </li>

        )
    )

}

export default BookCards
