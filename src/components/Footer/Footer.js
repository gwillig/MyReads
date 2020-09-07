import React from 'react'
import App from "../../App";

class Footer extends React.Component {
    state = {}

    render() {
        const footer_style = {
            backgroundColor: "#CEDFD4",
            width: "100%"


        }
        return (
            <div style={footer_style}>
                <h5 style={{textAlign: "right"}}> © All rights reserved. Designed by Gustav Willig</h5>
            </div>
        )


    }
}

export default Footer
