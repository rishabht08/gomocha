import React from 'react';
import OrderReadyTime from '../OrderReadyTime/OrderReadyTime';
import ShopDetails from '../ShopDetails/ShopDetails';
import DirectionsAndCall from '../DirectionsAndCall/DirectionsAndCall';
// import Footer from '../../DashboardView/Footer/Footer';
import { Link } from 'react-router';
import './confirmation-view.scss';
import '../../App/app.scss';
import shops from "../../../../dummy-shop-data.json"
import cookie from 'js-cookie';

var ConfirmationView = React.createClass({

    // propTypes: {
    //     methodOfTrans: React.PropTypes.string,
    //     pickupTime: React.PropTypes.oneOfType([
    //         React.PropTypes.string,
    //         React.PropTypes.bool
    //     ]),
    //     duration: React.PropTypes.string,
    //     selectedShop: React.PropTypes.object,
    //     distance: React.PropTypes.string,
    //     userLocation: React.PropTypes.shape({
    //         lat: React.PropTypes.number,
    //         lng: React.PropTypes.number
    //     }),
    //     selectedShopLocation: React.PropTypes.shape({
    //         lat: React.PropTypes.number,
    //         lng: React.PropTypes.number
    //     }),
    //     expectedPickupTime: React.PropTypes.string
    // },
    
    getInitialState: function () {
        return {
            username: '',
            userLocation: {
                lat: '',
                lng: ''
            },
            shops: [],
            selectedShop: {},
            selectedShopLocation: {
                lat: '',
                lng: ''
            },
            distance: '',
            duration: '',
            durationSeconds: undefined,
            items: [],
            specialInstructions: '',
            notification: {
                add: false,
                delete: false,
                error: false,
                form: false,
                additionalInfo: false,
                userLocation: false
            },
            methodOfTrans: '',
            methodOfTransShow: true,
            pickupTime: true,
            expectedPickupTime: '',
            favorite: false,
            paymentInfo: {
                nameOnCard: '',
                cardNumber: undefined,
                expMonth: '',
                expYear: '',
                cvv: undefined
            },
            previousOrders: [],
            favoriteOrders: [],
            menuShow: false,
        }
    },

    render: function() {
        return (
            <div>
                <div className="confirmation-view-container">
                    <div className="title-cover">
                        <h1>You're all set!</h1>
                        <div className="confirmation-success">
                            <i className="fa fa-check-circle fa-5x" aria-hidden="true"></i>
                        </div>
                    </div>

                    <OrderReadyTime
                    methodOfTrans={this.state.methodOfTrans}
                    pickupTime={this.state.pickupTime}
                    duration={this.state.duration} />
                    <ShopDetails
                    selectedShop={shops[2]}
                    distance={this.state.distance} />
                    <DirectionsAndCall
                    selectedShop={shops[2]}
                    userLocation={this.state.userLocation}
                    selectedShopLocation="San Francisco" />
                </div>
                    <Link to="/" className="back-to-dashboard">
                        <button className="next-button">
                            Dashboard
                            <i className="fa fa-home fa-lg" aria-hidden="true"></i>
                        </button>
                    </Link>
                {/* <Footer /> */}
            </div>
        )
    }
});

export default ConfirmationView;
