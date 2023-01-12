import React from "react"

const IMG_URL= "http://martinwullich.com/wp-content/uploads/2022/11/hasbulla-magomedov-10212022-1443272.jpg"

export default class Click extends React.Component{
    constructor(props) {
        super(props)
    }

    clickHandler = () => console.log("click");
    methodHandler = () => {
        console.log("soy regular method function");
        console.log(this);
    }
    arrowHandler = () => {
        console.log("soy arrow method");
        console.log(this);
    }


    render() {
        return (
            <>
                <h1 className="m-2">soy app</h1>
                <div className="p-5 d-flex flex-column">
                    <button
                        onClick={this.clickHandler}
                        className="btn btn-info mb-2"
                    >
                    Dame tu click
                    </button>

                    <button
                        onClick={this.arrowHandler}
                        className="btn btn-danger mb-2"
                    >
                    el "this" arrow
                    </button>

                    <button
                        onClick={this.methodHandler}
                        className="btn btn-success mb-2"
                    >
                    el "this" method
                    </button>

                    <img src={IMG_URL} alt="hasbulla"/>
                </div>
            </>
        )
    }
}