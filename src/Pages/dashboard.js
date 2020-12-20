import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loader from '../Pages/common/loader/loader'

import { postRandomData, resetRandomData, deleteRandomData, expireRandomData } from '../redux/actions'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handlePostData = () => {
        this.props.handlePostData();
    }

    handleResetRandomData = () => {
        this.props.handleResetRandomData();
    }

    handleDeleteRandomData = () => {
        this.props.handleDeleteRandomData();
    }

    handleExpireRandomData = () => {
        this.props.handleExpireRandomData();
    }

    render() {
        return (
            <>
            {this.props.loading && <Loader />}
                <span>Dashboard</span>

                <div className="row">
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Generate random data</h5>
                                <p className="card-text">A Generate data button will generate 10000 random data in Mongo DB</p>
                                <button onClick={(e)=>this.handlePostData()} className="btn btn-primary">Generate Data</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Reset random data</h5>
                                <p className="card-text">Reset Data button will delete all rows</p>
                                <button onClick={(e)=>this.handleResetRandomData()} className="btn btn-primary">Reset Data</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Delete random data</h5>
                                <p className="card-text">Delete data button will update rows as deleted</p>
                                <button onClick={(e)=>this.handleDeleteRandomData()} className="btn btn-primary">Delete Data</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Expire random data</h5>
                                <p className="card-text">Expire data button will update rows as expired</p>
                                <button onClick={(e)=>this.handleExpireRandomData()} className="btn btn-primary">Expire Data</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">See Analytics</h5>
                                <p className="card-text">Analytics button will go to other page and will display line chart and pie chart</p>
                                <a href="http://localhost:3000/analytics" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Analytics</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 shadow p-3 mb-5 bg-white rounded">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Random data List</h5>
                                <p className="card-text">Displays all the list of random records.</p>
                                <a href="http://localhost:3000/list" target="_blank" rel="noopener noreferrer" className="btn btn-primary">List</a>
                            </div>
                        </div>
                    </div>
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
        handlePostData: () => { dispatch(postRandomData()) },
        handleResetRandomData: () => { dispatch(resetRandomData()) },
        handleDeleteRandomData: () => { dispatch(deleteRandomData()) },
        handleExpireRandomData: () => { dispatch(expireRandomData()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);