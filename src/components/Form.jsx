import React, { useState } from "react";

const Form = () => {

    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado");
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    return (
        <>
            <h3 className="m-2">soy Form</h3>
            <div className="p-5 d-flex flex-column">
                <form onSubmit={handleSubmit}>

                    <div class="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input value={username}
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <button
                        className="btn btn-success"
                        type="submit"
                    >
                        enviar
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form