import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';
import '../../App/app.scss';
import './dashboard-view.scss';
import Swal from "sweetalert2"

var DashboardView = React.createClass({

    propTypes: {
        username: React.PropTypes.string,
        handleClearItemsFromOrder: React.PropTypes.func
    },

    startButton: function () {
        Swal.fire({
            title: 'What you want?',
            text: "Welcome, with your digital waiter!",
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Take away!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Dining!'
          }).then((result) => {
            if (result.value) {
                Swal.fire({
                    input: 'text',
                    inputPlaceholder: 'Members?',
                    title: 'How many member?',
                    text: "Availability",
                    icon: 'warning',
                    showCancelButton: true,
                    cancelButtonText: 'Yes!',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'No!'
                  }).then((result) => {
                    if (result.value) {
                      Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                        
                      )
                    }
                  })
                  
            }else if('Take away!'){
                window.location.href = "/custom-order"
            }
          })
    },

    render: function() {
        return (
            <div className="dashboard-container">
                <div className="title-cover">
                <h1>Hey {this.props.username}!</h1>
                <h1>Your coffee is just minutes away.</h1>
                </div>

                <div className="main-wrap">
                        <Link to="" className="start-button-wrap">
                            <button
                                onClick={this.startButton}
                                className="next-button start-button">
                                <i className="fa fa-coffee" aria-hidden="true"></i>
                                    Start
                            </button></Link>
                </div>
                {/* <div className="dash-landing-icon-wrap">
                    <div className="dash-landing-icon dash-landing-icon-1">
                        <img src="/img/landing-icon-1.png" />
                        <h2>Select a shop</h2>
                    </div>
                    <div className="dash-landing-icon dash-landing-icon-2">
                        <img src="/img/landing-icon-2.png" />
                        <h2>Place your order</h2>
                    </div>
                    <div className="dash-landing-icon dash-landing-icon-3">
                        <img src="/img/landing-icon-3.png" />
                        <h2>Ready when you arrive!</h2>
                    </div>
                </div>
                <Footer /> */}
            </div>
        )
    }
});

export default DashboardView;
