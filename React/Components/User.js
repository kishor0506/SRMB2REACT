import React, { useState } from "react";
import './User.css';



const User = () => {
    const [nme, setnme] = useState({
        name: 'kishor',
        dte: new Date()
    })

    return (
        <div>
            <div className="container-fluid">
            <div className="alert alert-dark" role="alert">
                UserName and  Date
            </div>
            {/* <h3 classNameName="username">Name:{nme.name}</h3>
            <br />
            <h3 classNameName="date"> Date:{nme.dte.toString()}</h3> */}
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">UserName</h5>
                            <p className="card-text">{nme.name}</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Date</h5>
                            <p className="card-text">{nme.dte.toString()}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default User;
