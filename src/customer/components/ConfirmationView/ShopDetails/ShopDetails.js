import React from 'react';
import './shop-details.scss';
import cookie from 'js-cookie';

var ShopDetails = React.createClass({

    propTypes: {
        selectedShop: React.PropTypes.object,
        distance: React.PropTypes.string
    },

    render: function () {

        console.log("prop", this.props.selectedShop)
        let dining = JSON.parse(cookie.get("dining"))


        // var selectedShop = this.props.selectedShop;


        return (
            <div className="shop-details-container">
                <h2>{dining.name}</h2>
                <p>"28 6th St, San Francisco"</p>

                <p>{dining.rating}</p>
                <img src={dining.photo} />
                <p>Distance: 0.5 mi</p>
            </div>
        )
    }
});

export default ShopDetails;
