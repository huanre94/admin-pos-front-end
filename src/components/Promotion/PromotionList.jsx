import React from 'react';

function PromotionList({ promotions }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Tipo Promocion</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {promotions?.map(promotion =>
                        <tr key={promotion.promotionId}>
                            <td>{promotion.promotionId}</td>
                            <td>{promotion.name}</td>
                            <td>{promotion.promotionTypeId}</td>
                            <td>{promotion.vigence}</td>
                            <td>{promotion.expiration}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => alert("Llamando promocion " + promotion.promotionId)}>Edit.</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default PromotionList