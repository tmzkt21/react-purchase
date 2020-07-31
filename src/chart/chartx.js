import React from "react";
import Validation from "../../../../../../../../utils/validation";
class XAxisTickLineChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {x, y, stroke, payload} = this.props;
        let year = Validation.checkEmpty(payload) || Validation.checkEmpty(payload.value)|| payload.value.toString().length !== 6
            ? "" : payload.value.toString().substring(0,4);

        let month = Validation.checkEmpty(payload) || Validation.checkEmpty(payload.value)|| payload.value.toString().length !== 6
            ? "월" : Number(payload.value.toString().substring(4,6)) + "월";

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={14} textAnchor="middle" fill="#666" fontSize={16}>{month}</text>
                <text x={0} y={0} dy={27} textAnchor="middle" fill="#B7B7B7" fontSize={12}>{year}</text>
            </g>
        )
    }
}

XAxisTickLineChart.propTypes = {
    x: React.PropTypes.string,
    y: React.PropTypes.string,
    stroke: React.PropTypes.string,
    payload: React.PropTypes.string,
};

export default XAxisTickLineChart;