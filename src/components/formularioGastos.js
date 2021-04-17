import { useState } from "react";
import React from 'react';
import Error from './errores';
import { Input, Button, Card } from 'antd';

function FormularioGastos ({guardarDatos}) {

    const [error, setError] = useState(false);
    const [nombre, setNombre] = useState('');
    const [valor, setValor] = useState(0);

    function agregarGasto (ev) {
        ev.preventDefault();

        if (nombre.trim() === '' || !isNaN(nombre) || parseInt(valor) <= 0 || isNaN(valor)) {
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
      
        return (
            <Card>
                <h1 style={{textAlign:'center', marginBottom:20}}>Coloca tus gastos</h1>
                <form onSubmit={agregarGasto}  style={{display:'flex', justifyContent:'center', flexDirection:'column', width:500}}>
                    <label style={{fontSize:15}}>Gasto</label>
                    <Input style={{marginBottom:20, marginTop:5}} value={nombre} onChange={(ev) => setNombre(ev.target.value)} />
            
                    <label style={{fontSize:15}}>Valor del gasto</label>
                    <Input addonBefore='$' style={{marginBottom:20, marginTop:5}} value={valor} onChange={(ev) => setValor(ev.target.value)} />
            
                    <Button style={{marginTop:10}} type="primary" htmlType="submit"> Guardar </Button>
                </form>
                <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                    {error ? <Error nombre={nombre} valor={valor} /> : null}
                </div>
            </Card>
        );
      };

export default FormularioGastos;
