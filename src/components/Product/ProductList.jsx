import PropTypes from 'prop-types';
import { Button, Container, Table } from 'react-bootstrap';

export const ProductList = ({ products }) => {


    console.log(products)
    return (
        <>
            <Container style={{ margin: "16px" }}>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>SKU</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map(product =>
                            <tr key={product.sku}>
                                <td>{product.productId}</td>
                                <td>{product.sku}</td>
                                <td>{product.name}</td>
                                <td>
                                    <Button color="primary">Editar</Button>
                                    <Button color="secondary">Eliminar</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

            </Container>
        </>
    );
}

ProductList.propTypes = {
    products: PropTypes.array
};