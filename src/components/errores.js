import React from 'react';
import { Alert } from 'antd';

function Errores ({nombre, valor, mensaje}) {
    return (<>
        {mensaje ? <Alert type='warning' showIcon message={mensaje} /> : null}
        <div style={{display:'flex', flexDirection:'column'}}>
            {nombre && nombre.trim() === '' || !isNaN(nombre) ? <Alert style={{marginTop:20, marginBottom:20}} type='warning' showIcon message='Coloca un nombre válido'/> : null}
            {valor === 0 ||  isNaN(valor) ? <Alert type='warning' showIcon message='Coloca un número válido'/> : null}
        </div>
        </>
    )
}

export default Errores;
