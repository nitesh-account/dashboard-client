import React, { Component } from 'react';
import { connect } from 'react-redux'

import {fetchData} from '../redux/actions'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    handleFetchData = () => {
        this.props.handleFetchData(2);
    }
    render() {
        return (        
                <div>
                    <button
                    onClick={(e)=>this.handleFetchData()}
                    className="btn btn-primary"
                    >fetch test</button>

                    <div>
                        {this.props.user}
                    </div>
                </div>
        )
    }

}

const mapStateToProps = (state)=> {
    return{
        user: state.dashboardReducer.user,
        error: state.dashboardReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleFetchData: (id) => {dispatch(fetchData(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);