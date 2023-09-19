"use client"
import React, { useEffect, useState } from "react";
import CardGrid from "./PropertyCard";
import axios from "axios";


const MainCard = () => {
    const [cardsData, setCardsData] = useState<any[]>([]);
    const [filteredCards, setFilteredCards] = useState<any[]>([]);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.dreamprovider.in/api/properties',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCardsData(response.data.data);
                setFilteredCards(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const handleSearch = (searchQuery: string) => {
        const filteredCards = cardsData.filter((card) =>
            card.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCards(filteredCards);
    };
    const handleFilter = (searchQuery: string) => {
        const filteredCards = cardsData.filter((card) =>
            card.attributes.address.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCards(filteredCards);
    };
    const ajeet = () => {
        setFilteredCards(cardsData)
    }
    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-semibold mb-4">Card Grid</h1>
            <div className="flex w-full justify-between items-center">
                <div className="ml-16 mt-10 flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="rounded-l-lg p-2 w-96 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button
                        type="button"
                        className="px-4 bg-blue-500 text-white font-semibold p-2 rounded-r-lg hover:bg-blue-600"
                        onClick={() => handleSearch("")}
                    >
                        Search
                    </button>
                    <div className="ml-6"><label htmlFor="city">Choose a City</label>
                        <select name="city" id="city" onChange={(e) => handleFilter(e.target.value)}>
                            <option value="Mahanapuri colony">Mahanapuri colony</option>
                            <option value="Chhitupur">Chhitupur</option>
                            <option value="durgakund">durgakund</option>
                            <option value="bhogaveer Lanka">bhogaveer Lanka</option>
                        </select></div>
                </div>
                <div> <button className=" bg-blue-500 text-white font-semibold  p-2 hover:bg-blue-600
                " onClick={ajeet}>Fetch More</button>
                </div>
            </div>
            <CardGrid cardsData={filteredCards} />
        </div>
    );
};

export default MainCard;
