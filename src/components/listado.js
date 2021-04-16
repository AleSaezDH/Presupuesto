import React from 'react'

function Listado ({datos}) {
    return <>
    {datos.map(dato => {
        return <ul key={dato.id}>
            <li>{dato.nombre}</li>
            <li>{dato.dinero}</li>
        </ul>
    })}
    </>
}

export default Listado;
