import React, { useState } from "react"

const Ganchos = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1)

    return (
        <>
            <h3 className="m-2">soy Hooks</h3>
            <div className="p-5 d-flex flex-column">
                <p>You clicked {count} times</p>
                <button onClick={increaseCount}>
                    Click me
                </button>
            </div>
        </>
    )
}

export default Ganchos