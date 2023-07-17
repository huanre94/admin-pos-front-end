import React, { Suspense, useEffect, useState } from "react";
import GetPromotions from "../../services/GetPromotions";
import PromotionModal from "./PromotionModal";
import PromotionList from "./PromotionList";

function Promotion() {
    const [promotions, setPromotions] = useState([]);
    const [filteredpromotions, setFilteredPromotions] = useState([]);

    async function GetPromotions() {
        await fetch("https://localhost:15001/api/promotions")
            .then(data => data.json())
            .then(data => {
                setPromotions(data);
                setFilteredPromotions(data);
            }).
            catch(error => {

                console.log(error)
                setPromotions([]);
                setFilteredPromotions([]);
            }
            );
    }

    useEffect(() => {
        GetPromotions()
    }, [])

    const filterPromotions = (e) => {
        const searchValue = e.target.value;
        const currentPromotions = [...promotions];
        const matchingPromotions = currentPromotions.filter(promotion => promotion.name.trim().toUpperCase().includes(searchValue.trim().toUpperCase()));

        setFilteredPromotions(matchingPromotions);
    }

    let content =
        promotions.length === 0 ?
            <div>No existen promociones</div>
            :
            <>
                <div>
                    <label htmlFor="productSearch">Nombre: </label>
                    <input type="text" id="productSearch" onChange={filterPromotions} />
                </div>
                <PromotionList promotions={filteredpromotions} />
            </>;

    return (
        <>
            <h3>Maestra de Promociones</h3>
            <PromotionModal />
            <Suspense fallback={<>Cargando promociones...</>}>
                {content}
            </Suspense>
        </>
    )
}

export default Promotion;