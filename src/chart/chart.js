import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';
import XAxisTickBarChart from "./XAxisTickLineChart";
import YAxisTickBarChart from "./YAxisTickLineChart";
import WageStatusTooltip from "./WageStatusTooltip";

class WageStatusBarChart extends React.Component {

    constructor(props) {
        super(props);

    }

    render () {
        const {data, tooltipForm} = this.props;

        return (
            <ResponsiveContainer>
                <BarChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 8}} barSize = {50}>
                    <XAxis dataKey="date" tick={<XAxisTickBarChart/>}/>
                    <YAxis tick={<YAxisTickBarChart/>} width={100}/>
                    <Tooltip content={<WageStatusTooltip tooltipForm={tooltipForm}/>}/>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <Bar name="총공제액" dataKey="total_deduct" stackId="a" fill="#ff0000" />
                    <Bar name="총지급액" dataKey="total_pay" stackId="a" fill="#1c90fb" />
                    <Legend align="right" verticalAlign="top"/>
                </BarChart>
            </ResponsiveContainer>
        )
    }
}

export default WageStatusBarChart;