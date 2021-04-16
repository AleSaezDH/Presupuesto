import React, {useState} from 'react'

function CalculosPresupuesto ({datos, presupuestoInicial}) {

        let plata = datos.map(x => x.dinero);
        let totalPlata = plata.reduce( (valorAnterior, valorActual) => {
            return valorAnterior - valorActual;
          }, presupuestoInicial);

    return (<>
        <div>
            <h1>Presupuesto inicial</h1>
            <p>{presupuestoInicial}</p>
        </div>

        <div>
            <h1>Presupuesto restante</h1>
            <p>{totalPlata}</p>
        </div>
        </>
    )
}

export default CalculosPresupuesto;
