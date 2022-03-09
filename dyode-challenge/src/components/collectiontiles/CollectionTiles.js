import React from "react";
import mensimage from "../../assets/mens.png";
import womensimage from "../../assets/womens.png";
import accessoriesimage from "../../assets/accessories.png";

const collections = [
    {
        name: "Women's",
        image:  womensimage
    },
    {
        name: "Men's",
        image: mensimage
    },
    {
        name: "Accessories",
        image: accessoriesimage
    }
]

const CollectionTiles = () => {
    return (
        <div className="collection-tiles">
            {collections.map(collection => 
                <div key={collection.image} className="collection-tiles--tile">
                    <img className="collection-tiles--tile__image" src={collection.image} alt={collection.name} />
                    <div className="collection-tiles--tile__text">
                        <h3 className="h3">{collection.name}</h3>
                    </div>
                </div>
            )}            
        </div>
    )
}

export default CollectionTiles;