
import React from 'react';
type Price = {
    price: number;
    value: string;
};

interface CardProps {
    name: string;
    address: string;
    owner_no: string;
    property_Type: string;
    prices: Price[];
}

const Card: React.FC<CardProps> = ({ name, address, owner_no, property_Type, prices }) => {
    return (
        <div className="p-4 md:w-1/2 lg:w-1/4  ">
            <div className="border rounded-lg p-4 w-80 bg-white h-80">
                <h2 className="text-xl font-semibold">Owner Name: {name}</h2>
                <p className="mt-2">Address: {address}</p>
                <p>owner-no: {owner_no}</p>
                <p>property_Type:{property_Type}</p>
                <div className="mt-2">
                    {prices.map((price, index) => (
                        <div key={index}>
                            <span className="font-semibold">{price.value}: </span>
                            <span>{price.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
