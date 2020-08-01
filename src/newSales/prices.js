import React, { Component,Fragment } from 'react';
import Breadcrumb from '../admin/common/breadcrumb';
import { Navigation, Box, MessageSquare, Users, Briefcase, CreditCard, ShoppingCart, Calendar } from 'react-feather';
import CountUp from 'react-countup';
import { Chart } from "react-google-charts";
import CanvasJSReact from '../assets/canvas/canvasjs.react';

import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';
import { 
    pieOptions, 
    doughnutOption, 
    lineOptions, 
    buyOption, 
    employeeData, 
    employeeOptions 
} from '../atomic/constants/chartData'
// image impoer
import user2 from '../assets/images/dashboard/user2.jpg';
import user1 from '../assets/images/dashboard/user1.jpg';
import man from '../assets/images/dashboard/man.png';
import user from '../assets/images/dashboard/user.png';
import designer from '../assets/images/dashboard/designer.jpg'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export class Prices extends Component {

    render() {
        return (

            <Fragment>
                {/*<Breadcrumb title="Dashboard" parent="Dashboard" />*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xl-3 col-sm-6 xl-50">
                                            <div className="order-graph sm-order-space">
                                            </div>
                                        </div>
                                        <div className="col-xl-6 xl-100">
                                            <div className="order-graph xl-space">
                                                <h6>신차시세예측</h6>
                                                <div className="ct-4 flot-chart-container">
                                                    <Line data={employeeData} options={employeeOptions}  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Prices
