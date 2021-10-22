import React from 'react';

const ProductDisplay = (props) => {
    //console.log(props);
    const renderProducts = props.prodData.map((data) => {
        return (
            <div className="media" key={data.id}>
                <div className="media-left">
                    <img src={data.image} alt="" className="media-object" style={{ width: 100 }} />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{data.name}</h4>
                    <p>{data.description}</p>
                    <p>Use: {data.usess}</p>
                    <p>Cost: {data.cost}</p>
                </div>
                <hr />
            </div>
        )
    })
    return (
        <div className="container">
            {renderProducts}
        </div>
    )
}

export default ProductDisplay;