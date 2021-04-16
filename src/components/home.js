import React, { useState } from 'react';
import FormularioPresupuesto from './formularioPresupuesto';
import FormularioGastos from './formularioGastos';
import Listado from './listado';
import CalculosPresupuesto from './calculosPresupuesto';

function Home () {

    const [presupuestoInicial, setPresupuestoInicial] = useState(0);
    const [render, setRender] = useState(false);
    const [datos, setDatos] = useState([]);

    function guardarDatos (dat) {
        setDatos([...datos, dat]);
    }

    return (<>
        {!render ? <FormularioPresupuesto setPresupuestoInicial={setPresupuestoInicial} setRender={setRender}/> : null }
        {render ? <FormularioGastos guardarDatos={guardarDatos} /> : null }
        {datos.length !== 0 ? <> <Listado datos={datos}/> <CalculosPresupuesto datos={datos} presupuestoInicial={presupuestoInicial} /> </> : null}
        </>
    )
}

export default Home;
