import React, { Component } from 'react';

//declare variable that contains the json
const data =
{
    "companyName": "Saljuper S.A.",
    "startDate": "2017-01-01",
    "endDate": "2017-12-31",
    "employee": {
        "identification": "0930055959",
        "name": "Hugo Restrepo",
        "position": "Analista Desarrollador",
        "salary": 850.00
    },
    "income": [
        {
            "code": "1",
            "description": "Sueldo",
            "quantity": "30",
            "value": 850.00
        }
    ],
    "outcome": [
        {
            "code": "45",
            "description": "Aporte personal IESS",
            "quantity": "",
            "value": 102.00
        }
    ]
}


class Payrole extends Component {
    render() {
        return (
            <div>
                <p>{data.companyName}</p>
                <p>Comprobante de pago</p>
                <p>Periodo {data.startDate} al {data.endDate}</p>
                <p>Empleado {data.employee.identification} {data.employee.name}</p>
                <div>
                    <p>Sueldo Mensual {data.employee.salary}</p>
                    <p>Cuenta #</p>
                    <p> Fecha Impresion {Date.now}</p>
                </div>

                <div>
                    <p>Ingresos</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Descripcion</th>
                                <th>Cantidad</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.income.map((income) => (
                                <tr key={income.code}>
                                    <td>{income.code}</td>
                                    <td>{income.description}</td>
                                    <td>{income.quantity}</td>
                                    <td>{income.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default Payrole;