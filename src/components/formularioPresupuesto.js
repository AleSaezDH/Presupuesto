import React, { useState } from 'react';
import Error from './errores';

function FormularioPresupuesto ({setPresupuestoInicial, setRender}) {

    const [valor, setValor] = useState(0);
    const [error, setError] = useState(false);

    function agregarPresupuesto (ev) {
        ev.preventDefault();
        let valorInput = document.getElementById('valor').value;
        if (parseInt(valorInput) <= 0 || valorInput === '') {
            setError(true);
            return ;
        }

        setValor(parseInt(valorInput));
        setError(false);
        setPresupuestoInicial(parseInt(valorInput));
        setRender(true);
    }

    // es necesario parsearlo porque siempre que recibo datos de un evento aunque el input sea de tipo number se reciben
    // como string

    console.log(valor);
    return (
        <div>
            <h1>Coloca tu presupuesto</h1>
            <form onSubmit={agregarPresupuesto}>
                <input id='valor' type='number' placeholder='Ej: 5000' />
                <input type='submit' value='Guardar'/>
            </form>
            {error ? <Error mensaje='Coloca un número válido'/> : null}
        </div>
    )
}

export default FormularioPresupuesto;
