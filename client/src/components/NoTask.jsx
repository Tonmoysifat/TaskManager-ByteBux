import React from 'react';
import noDataImg from "../assets/images/no-results.png"
const NoTask = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 text-center">
                    <img alt="nodataImg" className="w-75" src={noDataImg}/>
                    <h4>No Task Added</h4>
                </div>
            </div>
        </div>
    );
};

export default NoTask;