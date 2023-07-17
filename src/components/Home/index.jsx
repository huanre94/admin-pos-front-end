import { useState } from "react";
import { useEffect } from "react";
import './styles.css'
import { Card, Container, Row } from "react-bootstrap";

const Home = () => {
    const [cocktails, setCocktails] = useState([])

    const GetCocktails = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
            .then(res => res.json())
            .then(res => res.drinks);

        console.log(response)

        setCocktails(response)
    }

    useEffect(() => {
        GetCocktails()
    }, []);

    return (
        <>
            <Container style={{ margin: "8px" }} fluid="true">
                <Row>
                    {
                        cocktails.map((c, index) =>
                            <Card className="drinkCard" key={c.idDrink} style={{ margin: "8px", width: '18rem' }}>
                                <Card.Img alt={c.strDrink} src={c.strDrinkThumb} />
                                <Card.Title> {c.strDrink}</Card.Title>
                                <Card.Subtitle>Hola mundo</Card.Subtitle>
                                <Card.Body >Sambo</Card.Body>
                                <Card.Footer>#{index + 1}</Card.Footer>
                            </Card>
                        )
                    }

                </Row>
            </Container>
        </>
    );

}

export default Home;
