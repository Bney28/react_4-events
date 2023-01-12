import React, { useEffect, useState } from 'react'

const Efectos = () => {
    const [count, setCount] = useState(0)
    const [sorpresa, setSorpresa] = useState(10)


    useEffect(()=>{
        document.title = `Holas x ${count} veces`

        return () =>{ //Se ejecuta al desmontaje
            console.log("Chau");
        }
    })

    useEffect(() => {
      console.log("sorpresitas");
    }, [sorpresa])
    


    const handleClick = () => {
        setCount(count + 1)
    }

    const handleSorpresa = () => {
        setSorpresa(sorpresa + 1)
    }

    return (

        <>
            <h3 className="m-2">soy Efectos</h3>
            <div className="p-5 d-flex flex-column">

                <button 
                onClick={handleClick}
                className="btn btn-primary"
                >
                    Holas x {count} veces
                </button>

                <button 
                onClick={handleSorpresa}
                className="btn btn-primary"
                >
                    Sorpresa 
                </button>

            </div>
        </>


    )
}

export default Efectos