import React from "react"

export default class Hover extends React.Component {
    
    handleMouseOver = () => console.log("te veo");
    
    render() {
        return (
            <>
                <h3 className="m-2">soy Hover</h3>
                <div className="p-5 d-flex flex-column">
                    <div
                    className="bg-secondary p-4"
                    onMouseOver={this.handleMouseOver}
                    >
                        <h1>
                            te veo 0.0
                        </h1>
                    </div>
                </div>
            </>
        )
    }
}