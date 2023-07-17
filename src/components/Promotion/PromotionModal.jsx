import React, { useState } from "react"

import { promotionType, consumptionType } from '../../data/data.js';
import { Form } from "react-bootstrap";

export default function PromotionCreate() {
    const [promotion, setPromotion] = useState({
        promotionId: 0,
        name: '',
        promotionTypeId: 0,
        consumptionOrigin: '',
        status: true
    })

    const handleSubmit = e => {
        e.preventDefault();
        alert("Hola")
    }

    return (
        <>
            <div>
                <h3>Registro de promociones</h3>
            </div>

            <Form>
                {/* <div>
                    <label htmlFor="promotionId">Id:</label>
                    <input className='form-control' id="promotionId" readOnly type="text" />
                </div> */}

                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input className='form-control' id="name" name='name' type="text" />
                </div>

                <div>
                    <label htmlFor="description">Descripcion:</label>
                    <input className='form-control' id="description" name='description' type="text" />
                </div>


                <div>
                    <label htmlFor="promotionTypes">Tipo Promocion:</label>
                    <select id="promotionTypes" className="form-control" >
                        {promotionType.map(p => (<option key={p.PromotionTypeId} value={p.PromotionTypeId}>{p.Name}</option>))}
                    </select>
                </div>

                <label>Dias activos:</label>
                <div>
                    <label htmlFor="monday">Lunes</label>
                    <input type="checkbox" id="monday" />
                    <label htmlFor="tuesday">Martes</label>
                    <input type="checkbox" id="tuesday" />
                    <label htmlFor="wednesday">Miercoles</label>
                    <input type="checkbox" id="wednesday" />
                    <label htmlFor="thrusday">Jueves</label>
                    <input type="checkbox" id="thrusday" />
                    <label htmlFor="friday">Viernes</label>
                    <input type="checkbox" id="friday" />
                    <label htmlFor="saturday">Sabado</label>
                    <input type="checkbox" id="saturday" />
                    <label htmlFor="sunday">Domingo</label>
                    <input type="checkbox" id="sunday" />

                </div>

                <div>
                    <div>
                        <label htmlFor="consumptionTypes">Tipo Promocion:</label>
                        <select id="consumptionTypes" className="form-control">
                            {consumptionType.map(p =>
                                <option key={p.consumptionTypeId} value={p.consumptionTypeId}>{p.Name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='promotionConsumptionAmount' >Consumo Max.:</label>
                        <input id='promotionConsumptionAmount' className='form-control' name='consumptionAmount' type="number" />
                    </div>
                </div>

                <div>
                    <div >
                        <label htmlFor='promotionVigence'>Fecha Inicio:</label>
                        <input id='promotionVigence' className='form-control' name='vigence' type="datetime-local" />
                    </div>
                    <div >
                        <label htmlFor='promotionExpiration' >Fecha Fin:</label>
                        <input id='promotionExpiration' className='form-control' name='expiration' type="datetime-local" />
                    </div>
                </div>

                <label htmlFor="status">Activo:</label>
                <input id="status" name='status' type="checkbox" />



                <section>
                    <h5>Sucursales</h5>
                </section>

                <section>
                    <h5>Productos</h5>
                    {/* <div><button>Nuevo</button></div>

                <table>
                    <thead>

                        <th>SKU</th>
                        <th>Barra</th>
                        <th>Categoria</th>
                        <th>Nombre</th>
                        <th>Aplica</th>
                        <th>Porcentaje</th>
                    </thead>
                    <tbody></tbody>
                </table> */}
                </section>

                <section>
                    <h5>Clientes</h5>
                </section>

                <section>
                    <h5>Forma de pago</h5>
                </section>

                <section>
                    <h5>Premios</h5>
                </section>

                <section>

                </section>

                <input type="submit" id="enviar" value='Enviar' onClick={handleSubmit} />
                <input type="button" id="cancelar" value='Cancelar' className='btn btn-danger' onClick={() => alert("hola mundo")} />

            </Form >
        </>
    );
}

PromotionCreate.propTypes = {

}