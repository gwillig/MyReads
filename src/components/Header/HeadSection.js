import React from 'react'
import {Jumbotron } from "react-bootstrap";

class HeadSection extends React.Component {

    style_head={
        backgroundColor:"rgb(23 70 135 / 0%)",
        color:'rgb(255 255 255)'
    }

    render() {
        return (
            <Jumbotron fluid style={this.style_head}>
                    <h1>My Reads</h1>
                    <h3>An app to ograinze your ebooks</h3>
            </Jumbotron>
        )
    }
}

export default HeadSection
