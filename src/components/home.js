import React, { useEffect, useState } from 'react';
import FormularioPresupuesto from './formularioPresupuesto';
import FormularioGastos from './formularioGastos';
import CalculosPresupuesto from './calculosPresupuesto';
import 'antd/dist/antd.css';

function Home () {

    const [render, setRender] = useState(false);
    
    let datosJson = JSON.parse(localStorage.getItem('presupuesto'));
    let presupuestoIJson = 0;
    
    if (!datosJson) {
        datosJson = [];
    } else {
        if (datosJson.length !== 0) {
            presupuestoIJson = datosJson[0].presupuestoInicial
        } else {
            presupuestoIJson = 0;
        }
    }

    const [presupuestoInicial, setPresupuestoInicial] = useState(presupuestoIJson);
    const [datos, setDatos] = useState(datosJson);

    function guardarDatos (dat) {
        dat.presupuestoInicial = presupuestoInicial;
        setDatos([...datos, dat]);
    }

    function eliminarDato (dato) {
        let filtro = datos.filter(x => x.id !== dato);
        setDatos(filtro);
    }

    useEffect(() => {
        let datosJson = JSON.parse(localStorage.getItem('presupuesto'));
        if (datosJson) {
            localStorage.setItem('presupuesto', JSON.stringify(datos));
        } else {
            localStorage.setItem('presupuesto', JSON.stringify([]));
        }
    }, [datos]);

    return (
        <div style={{display:'flex', justifyContent:'center', marginTop:100}}>
            {datosJson.length === 0 && !render ? <FormularioPresupuesto setPresupuestoInicial={setPresupuestoInicial} setRender={setRender}/> : null }
            {datosJson.length === 0 && render && datos.length === 0 ? <div><FormularioGastos guardarDatos={guardarDatos} /></div> : null }
            {datosJson.length === 0 && datos.length !== 0 ? <><div><FormularioGastos guardarDatos={guardarDatos} /></div> <div> <CalculosPresupuesto setPresupuestoInicial={setPresupuestoInicial} eliminarDato={eliminarDato} datos={datos} presupuestoInicial={presupuestoInicial} /> </div></> : null}
            
            {datosJson.length !== 0 ? <><div><FormularioGastos guardarDatos={guardarDatos} /></div> <div> <CalculosPresupuesto setPresupuestoInicial={setPresupuestoInicial} eliminarDato={eliminarDato} datos={datos} presupuestoInicial={presupuestoInicial} /> </div></> : null}
        </div>
    )
}

export default Home;
