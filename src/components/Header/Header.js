import React from 'react'

class Header extends React.Component {

    style_h1={
        backgroundColor:"#174687",
        fontcolor:'rgb(255 255 255)'
    }
    render() {
        return (
            <div style={this.style_h1} className="aapp">
                <h1>My Reads</h1>
                <h3>An app to ograinze your ebooks</h3>
            </div>
        )
    }
}

export default Header
