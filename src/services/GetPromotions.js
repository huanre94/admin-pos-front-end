const GetPromotions = () => {
    fetch("https://localhost:15001/api/promotions")
        .then(res => res.json())
        .then(json => {
            return json;
        })
        .catch(err => {
            return new Error("No existen promociones disponibles.");
        })
}

export default GetPromotions;