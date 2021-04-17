import React from 'react';
import { Card, List, Skeleton } from 'antd';

function CalculosPresupuesto ({datos, presupuestoInicial, eliminarDato}) {

        let plata = datos.map(x => x.dinero);
        let totalPlata = plata.reduce( (valorAnterior, valorActual) => {
            return valorAnterior - valorActual;
          }, presupuestoInicial);

          const gridStyle = {
            width: '100%',
            textAlign: 'center',
          };

    return (
        <Card style={{minWidth:500, marginLeft:50}}>
            <h3 style={{marginBottom:20}}>Presupuesto Inicial ${presupuestoInicial}</h3>
            <List className="demo-loadmore-list" itemLayout="horizontal" dataSource={datos} renderItem={dato =>
            (
                <Card>
                    <Card.Grid style={gridStyle}>
                        <List.Item actions={[<a onClick={() => eliminarDato(dato.id)} key="list-loadmore-more">eliminar</a>]} >
                            <Skeleton loading={dato.loading} active>
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
    )
}

export default CalculosPresupuesto;