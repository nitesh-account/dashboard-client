import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from '../Pages/common/loader/loader'

import { getRandomData } from '../redux/actions'
import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"


class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.handleGetRandomData();
    }

    getRandomData = (randomData) => {
        console.log("getRandomData");
        let dataList = [];
        if (randomData !== undefined) {
            randomData.data.forEach(dataElement => {
                let dataElementObj = {};
                for (var key in dataElement) {
                    if (key !== "_id") dataElementObj[key] = dataElement[key];
                    if (key === "expiryDate" && dataElement[key] == null) dataElementObj[key] = "";
                }
                dataList.push(dataElementObj)
            });
        }
        return dataList;
    }

    render() {        
        return (
            <>
            {this.props.loading && <Loader />}
            <div>
                {this.props.randomData !== undefined && this.props.randomData.data.length > 0 ?
                    <ReactFlexyTable data={this.getRandomData(this.props.randomData)} sortable filterable /> :
                    <div className="col-sm-12 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">                                
                                <p className="card-text">There are no data</p>                                
                            </div>
                        </div>
                    </div>
                }
            </div>
            </>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
