import React, { useState } from 'react';
import { Card, List, Skeleton, Input } from 'antd';
import Error from './errores';

function CalculosPresupuesto ({datos, presupuestoInicial, eliminarDato, setPresupuestoInicial}) {

    const [estadoInput, setEstadoInput] = useState(false);
    const [valorInput, setvalorInput] = useState(presupuestoInicial);

        let plata = datos.map(x => x.dinero);
        let totalPlata = plata.reduce( (valorAnterior, valorActual) => {
            return valorAnterior - valorActual;
          }, presupuestoInicial);

          const gridStyle = {
            width: '100%',
            textAlign: 'center',
          };

          /*function editarDato () {
              let obtenerInput;
              new Promise ((resolve, reject) => {
                  resolve(setEstadoInput(true));
              }).then(valor => {
                  obtenerInput = parseInt(document.getElementById('input').value);
                });
          }*/

          function guardarPresupuesto () {
            setPresupuestoInicial(valorInput);
            setEstadoInput(false);
            let datosJson = JSON.parse(localStorage.getItem('presupuesto'));
            if (datosJson.length !== 0) {
                datosJson[0].presupuestoInicial = valorInput;
                localStorage.setItem('presupuesto', JSON.stringify(datosJson));
            }
          }
          
          let arrayPrimeraLista = [0];

    return (<>
        <Card style={{minWidth:500, marginLeft:50}}>
            <List className="demo-loadmore-list" itemLayout="horizontal" dataSource={arrayPrimeraLista} renderItem={dato => (
                <List.Item actions={!estadoInput || valorInput <= 0 || isNaN(valorInput) ? [<a onClick={() => setEstadoInput(true)} key="list-loadmore-more">editar</a>] : [<a onClick={() => guardarPresupuesto()} key="list-loadmore-more">guardar</a>]}>
                    <Skeleton loading={dato.loading} active>
                        <h3>Presupuesto Inicial ${estadoInput ? <Input style={{width:80, marginLeft:5}} id='input' defaultValue={presupuestoInicial} onChange={(e) => setvalorInput(parseInt(e.target.value))} /> : presupuestoInicial}</h3>
                    </Skeleton>
                </List.Item>
            )} />
            {valorInput <= 0 || isNaN(valorInput) ? <div style={{width:220, margin:'0 auto', marginBottom:25}}> <Error valor={1} mensaje='Coloca un número válido' /> </div> : null}
            <List className="demo-loadmore-list" itemLayout="horizontal" dataSource={datos} renderItem={dato =>
            (
                <Card>
                    <Card.Grid style={gridStyle}>
                        <List.Item actions={[<a onClick={() => eliminarDato(dato.id)} key="list-loadmore-more">eliminar</a>]} >
                            <Skeleton loading={dato.loading} active>
                                <div> {dato.fecha} </div>
                                <div style={{width:200, color:'rgba(0, 0, 0, 0.45)', wordWrap:'break-word'}}> {dato.nombre} </div>
                                <div>$ {dato.dinero} </div>
                            </Skeleton>
                        </List.Item>
                    </Card.Grid>
                </Card>
            )}
            />
            <h3 style={{marginTop:20}}>Presupuesto restante ${totalPlata}</h3>
        </Card>
        </>
    )
}

export default CalculosPresupuesto;