import React, { useState } from 'react';
import Error from './errores';
import { Button, Input, Card } from 'antd';

function FormularioPresupuesto ({setPresupuestoInicial, setRender}) {

    const [valor, setValor] = useState(0);
    const [error, setError] = useState(false);

    function agregarPresupuesto (ev) {
        ev.preventDefault();
        let valorInput = document.getElementById('valor').value;
        if (parseInt(valorInput) <= 0 || valorInput === '' || isNaN(valorInput) || valorInput.trim() === '') {
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

    return (
        <Card style={{width:500}}>
            <h1 style={{textAlign:'center', marginBottom:20}}>Coloca tu presupuesto</h1>
            <form onSubmit={agregarPresupuesto} style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
                <Input id='valor' placeholder="Ej: 5000" size='large'/>
                <Button htmlType='submit' type="primary" size='large' style={{marginTop:30, marginBottom:10}}> Guardar </Button>
            </form>
            <div style={{display:'flex', justifyContent:'center', marginTop:10}}>
                {error ? <Error valor={''} mensaje='Coloca un número válido'/> : null}
            </div>
        </Card>
    )
}

export default FormularioPresupuesto;
