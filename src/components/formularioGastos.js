import { useState } from "react";
import React from 'react';
import Error from './errores';

function FormularioGastos ({guardarDatos}) {

    const [error, setError] = useState(false);
    const [nombre, setNombre] = useState('');
    const [valor, setValor] = useState(0);

    function agregarGasto (ev) {
        ev.preventDefault();

        if (nombre.trim() === '' || !isNaN(nombre) || parseInt(valor) <= 0 || valor === '') {
            setError(true);
            return ;
        }
        
        setError(false);

        let objetoDeDatos = {
            nombre : nombre,
            dinero : parseInt(valor),
            id : Math.floor(Math.random()*10000000)
        }
        guardarDatos(objetoDeDatos);
        setNombre('');
        setValor(0);
        
    }

    return (<>
        <h1>Coloca aca tus gastos</h1>
        <form onSubmit={agregarGasto}>
            <label>Nombre del gasto</label>
            <input type='text' placeholder='Ej: transporte' value={nombre} onChange={(ev) => setNombre(ev.target.value)}/>

            <label>Valor del gasto</label>
            <input type='number' placeholder='Ej: 500' value={valor} onChange={(ev) => setValor(ev.target.value)} />

            <input type='submit' value='Guardar' />
        </form>
        {error ? <Error mensaje='Revisa que los campos esten bien' /> : null}
        </>
    )
}

export default FormularioGastos;
