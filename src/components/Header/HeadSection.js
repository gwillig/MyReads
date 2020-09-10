import React from 'react'
import {Jumbotron } from "react-bootstrap";

class HeadSection extends React.Component {

    style_head={
        backgroundColor:"rgb(23 70 135 / 0%)",
        color:'rgb(255 255 255)'
    }

    span_style={
        color: "#63ff72",
    }

    render() {
        return (
            <Jumbotron  style={this.style_head}>
                    <h1>My Reads
                    <span style={this.span_style}>.</span>
                    </h1>
                    <h3>The clever way to organise your ebooks</h3>
            </Jumbotron>
        )
    }
}

export default HeadSection
