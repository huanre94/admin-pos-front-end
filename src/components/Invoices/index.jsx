import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    async function GetInvoices() {
        try {
            await fetch(`https://localhost:15001/api/invoices/customerid/413718`)
                .then(data => data.json())
                .then(data => {
                    setInvoices(data);
                });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetInvoices()
    }, [invoices])

    return (
        <>
            <h1>Facturas</h1>
            <Container fluid="true">
                <Row>
                    {invoices?.map(invoice => (
                        <Card key={invoice.invoiceId} style={{ margin: "2px", width: '18rem' }}>
                            <Card.Title>Factura #{invoice.establishment}-{invoice.emission}-{invoice.invoiceNumber}</Card.Title>
                            <Card.Body >
                                <Card.Text></Card.Text>
                                <Card.Text>Fecha: {invoice.invoiceDate}</Card.Text>
                                <Card.Text>Total: $ {invoice.total}</Card.Text>
                                <Card.Text>Estado: {invoice.status === "C" ? "Activo" : "Inactivo"}</Card.Text>
                            </Card.Body>
                        </Card>

                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Invoices;