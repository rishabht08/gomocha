import React from 'react';
import './shop-details.scss';

var ShopDetails = React.createClass({

    propTypes: {
        selectedShop: React.PropTypes.object,
        distance: React.PropTypes.string
    },

    render: function () {

        console.log("prop" , this.props.selectedShop)

        var selectedShop = this.props.selectedShop;

        return (
            <div className="shop-details-container">
                <h2>{selectedShop.name}</h2>
                <p>{selectedShop.vicinity}</p>

                <p>{selectedShop.rating}</p>
                <img src={selectedShop.icon}/>
                <p>Distance: 0.5 mi</p>
            </div>
        )
    }
});

export default ShopDetails;
