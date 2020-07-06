import React from 'react';
import OrderTotal from '../../CustomOrderView/OrderTotal/OrderTotal';
import SpecialInstructionsOS from '../SpecialInstructionsOS/SpecialInstructionsOS';
// import Footer from '../../DashboardView/Footer/Footer';
import { Link } from 'react-router';
import '../../App/app.scss';
import './order-summary.scss';
import request from "superagent"
import _ from 'lodash';
import moment from "moment"
import axios from "axios"
import cookie from 'js-cookie';

var OrderSummaryView = React.createClass({

    // propTypes: {
    //     items: React.PropTypes.array,
    //     handleDeleteItemFromOrder: React.PropTypes.func,
    //     specialInstructions: React.PropTypes.string,
    //     handleOrderSubmit: React.PropTypes.func
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

    componentWillMount(){

        this.setState({
            items: this.props.location.state ? this.props.location.state.items : [] 
        })

    },

    handleDeleteItemFromOrder: function (index) {
        var items = this.state.items;
        items.splice(index, 1);
        this.setState({
            items: items
        })
    },

    handleOrderSubmit: function () {

        if (this.state.pickupTime === true) {
            var expectedPickupTime = moment().add(this.state.durationSeconds, 's').format('LT');
        } else {
            var expectedPickupTime = '';
        }

        var date = moment().format('l');
        var time = moment().format('LT');

        // request.post('/api/orders')
        //     .set('Content-Type', 'application/json')
        //     .send({
        //         username: this.state.username,
        //         items: this.state.items,
        //         specialInstructions: this.state.specialInstructions,
        //         selectedShop: this.state.selectedShop.name,
        //         selectedShop_id: this.state.selectedShop.place_id,
        //         favorited: this.state.favorite,
        //         date: date,
        //         time: time,
        //         timeUntilArrival: this.state.duration,
        //         secondsUntilArrival: this.state.durationSeconds,
        //         timeSelectedForPickup: this.state.pickupTime,
        //         expectedPickupTime: expectedPickupTime,
        //         completed: false
        //     })
        //     .end(function (err, res) {
        //         if (err) {
        //             console.log(err);
        //         }
        //         console.log("submit ordder" , res)
        //     })

        const data = {
            "transaction_id" : "BRN1079",
            "amount": parseInt(cookie.get("amount")),
            "isCashOnDelivery": true,
            "isPaymentReceived": false,
            "isDelivered": false,
            "noOfSeatsConfirmed": parseInt(cookie.get("seatNumber"))
        }

        axios.post("http://13.127.237.253:5000/api/v1/orders/" , data).then(res=>{
            console.log("afeter submit" , res)
            window.location.href = "/confirmation"
        })

        this._handleStateClear();
    },

    _handleStateClear: function () {
        this.setState({
            items: [],
            specialInstructions: '',
            methodOfTrans: '',
            favorite: false,
            paymentInfo: {
                nameOnCard: '',
                cardNumber: undefined,
                expMonth: '',
                expYear: '',
                cvv: undefined
            },
        })
    },


    render: function() {
        
   
        return (
            <div>
            <div className="main-wrap">
            <div className="order-summary-container">
                <div className="title-cover">
                    <h1>Order Summary</h1>
                    <div className="userProgress">
                        <div id="fourOfFive">
                        </div>
                    </div>
                </div>

                <div className="os-order-total-container">
                    <OrderTotal
                        orderItems={this.state.items}
                        handleDeleteItemFromOrder={this.handleDeleteItemFromOrder} />
                </div>

                <SpecialInstructionsOS
                    specialInstructions={this.state.specialInstructions} />

                <div  className="order-summary-link">
                    <button
                        onClick={this.handleOrderSubmit}
                        className="next-button order-summary-button">
                            Submit Order
                            <i className="fa fa-check fa-lg" aria-hidden="true"></i>
                    </button>
                </div>

                <Link to="/custom-order">
                    <button className="next-button order-summary-edit-button">
                        Edit my order
                        <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    </button>
                </Link>
            </div>
            </div>
            {/* <Footer /> */}
        </div>
        )
    }
});

export default OrderSummaryView;
