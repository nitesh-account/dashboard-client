import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from '../Pages/common/loader/loader'

import { getRandomData } from '../redux/actions'
import { LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class Analytics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.handleGetRandomData();
    }

    setPieChartData = (randomData) => {
        let data01 = [];
        if (randomData !== undefined) {
            const activeIndicatorYCount = randomData.data.filter(data => data.activeIndicator === "Y").length;
            const activeIndicatorNCount = randomData.data.filter(data => data.activeIndicator === "N").length;
            data01 = [
                { name: 'Active Indicator Y', value: activeIndicatorYCount }, { name: 'Active Indicator N', value: activeIndicatorNCount },
            ];
        }
        return data01;
    }

    setLineChartData = (randomData) => {
        let data01 = [];
        if (randomData !== undefined) {
            const activeIndicatorYCount = randomData.data.filter(data => data.activeIndicator === "Y").length;
            const activeIndicatorNCount = randomData.data.filter(data => data.activeIndicator === "N").length;
            data01 = [
                { name: 'December', activeIndicatorY: activeIndicatorYCount, activeIndicatorN: activeIndicatorNCount },
                { name: 'January', activeIndicatorY: 0, activeIndicatorN: 0 },
                { name: 'February', activeIndicatorY: 0, activeIndicatorN: 0 },
            ];
        }
        return data01;
    }

    render() {
        return (
            <>
                {this.props.loading && <Loader />}
                <div className="row">
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pie Chart</h5>
                                {this.props.randomData !== undefined && this.props.randomData.data.length > 0 ?
                                    <PieChart width={300} height={300}>
                                        <Pie dataKey="value" isAnimationActive={false} data={this.setPieChartData(this.props.randomData)} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                                        <Tooltip />
                                    </PieChart> : <p className="card-text">There are no data</p>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Line Chart</h5>
                                <LineChart width={600} height={300} data={this.setLineChartData(this.props.randomData)}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="activeIndicatorY" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="activeIndicatorN" stroke="#82ca9d" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        randomData: state.dashboardReducer.randomData,
        loading: state.dashboardReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetRandomData: () => { dispatch(getRandomData()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
