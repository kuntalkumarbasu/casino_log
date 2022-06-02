import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

class PlayerDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deletePlayerData: null,
            closetransactionText: null,
        };

    }


    deletelog(logId) {

        this.setState({deletePlayerData: 'Deleting data...'});

        const formData = {
            logId: logId
        };

        new Promise((resolve, reject) => {
                fetch(SERVER_BASE_URL_FULL+'?url=search/deletelogdata', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({formData})
                }).then(response => response.json())
                    .then((data) => {

                        this.setState({deletePlayerData: null});
                        this.props.getPlayersData(this.props.playersdata[0].user_id);

                    }).catch(error => {
                        
                        alert("System Exception");
                        reject(error);
                    });
        });

        return false;    
    }

    closetransaction(user_id){

        this.setState({closetransactionText: 'Please wait. Closing transaction for this user.'});

        const formData = {
            user_id: user_id
        };

        new Promise((resolve, reject) => {
                fetch(SERVER_BASE_URL_FULL+'?url=search/closetransaction', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({formData})
                }).then(response => response.json())
                    .then((data) => {

                        this.setState({closetransactionText: null});
                        this.props.getPlayersData(this.props.playersdata[0].user_id, 'Transaction closed for this user.');

                    }).catch(error => {
                        alert("System Exception");
                        reject(error);
                    });
        });

        return false;    

    }


    render() {
        const {playersdata} = this.props; //uplift relating variable;
        
        return (
            <table width="100%">
                <tbody>
                    
                    <tr>
                    <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                                <table width="100%">
                                <tbody>
                                    <tr>
                                        <td colSpan="2"><h1>{playersdata[0].user_name}'s Log</h1></td>
                                    </tr>
                                    <tr>
                                        <td><h3>Phone No. {playersdata[0].user_phone_number}</h3></td>
                                        <td><h3>&nbsp;&nbsp;Balance : {playersdata[0].new_balance}</h3></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                                <table width="100%" id="players">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                        <table width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <th width="20%">Cashier : </th>
                                                                <th width="20%">Date</th>
                                                                <th width="20%">Time</th>
                                                                <th width="20%">Amount</th>
                                                                <th width="20%">Collection Type</th>
                                                                <th width="20%">Payment</th>
                                                            </tr>
                                                            
                                                            {(playersdata !== null && playersdata.length > 0) &&
                                                                playersdata.map((eachplayersdata, keyplayersdata) => (  
                                                                    <tr key={`eachuser-${keyplayersdata}`}>
                                                                        <td width="20%">{eachplayersdata.cashier_name}</td>
                                                                        <td width="20%">{moment(eachplayersdata.collection_time).format('MM/DD/YYYY')}</td>
                                                                        <td width="20%">{moment(eachplayersdata.collection_time).format("hh:mm a")} </td>
                                                                        <td width="20%">{eachplayersdata.amount_collected}</td>
                                                                        <td width="20%">{eachplayersdata.type_of_collection}</td>
                                                                        <td width="20%">{eachplayersdata.type_of_payment}</td>
                                                                        
                                                                    </tr>
                                                                ))
                                                            }
                                                            
                                                        </tbody>
                                                       </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                               </table>
                                        </td>
                                    </tr>
                                </tbody>
                               </table>
                        </td>
                    </tr>
                    <tr>
                    <td>&nbsp;</td>
                    </tr>
                    <tr>
                    <td>
                        {/*<button onClick={() => this.closetransaction(playersdata[0].user_id)} type="button" className="submitbutton">Close Transaction</button> &nbsp; &nbsp; {this.state.closetransactionText} */}
                    </td>
                    </tr>
                    <tr>
                    <td></td>
                    </tr>
                    
                </tbody>
            </table>
        );
    }


}

export default PlayerDetails;
