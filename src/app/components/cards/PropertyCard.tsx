"use client"
import React from "react";
import Card from "./PropertyDetails";

type CardData = {
    id: number;
    attributes: {
        name: string;
        address: string;
        owner_number: string;
        property_types: string;
        price: { price: number; value: string }[];
    };
};

type CardGridProps = {
    cardsData: CardData[];
};

const CardGrid: React.FC<CardGridProps> = ({ cardsData }) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardsData.map((card, index) => (
                <Card
                    key={card.id}
                    name={card.attributes.name}
                    address={card.attributes.address}
                    owner_no={card.attributes.owner_number}
                    property_Type={card.attributes.property_types}
                    prices={card.attributes.price}
                />))}
        </div>
    );

};

export default CardGrid;
