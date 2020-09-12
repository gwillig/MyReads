import React from 'react'


class Footer extends React.Component {
    state = {}

    footer_style = {
        backgroundColor: "#CEDFD4",
        width: "100%"
    }
    render() {
        return (
            <div style={this.footer_style}>
                <h5 style={{textAlign: "right"}}> © All rights reserved. Designed by Gustav Willig</h5>
            </div>
        )


    }
}

export default Footer
