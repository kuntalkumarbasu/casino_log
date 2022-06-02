import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

class AddCashier extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typeofcollectiontext: 'Purchasing Chips',
            typeofcollectionvalue: 'request',
            typeofpayment: 'ACC',
            selectedPlayerId: props.selectedPlayerId,
            formsubmiterror: null,
            formsubmiterrorClassCode: null,
        };

        //this.onChangeCollection =  this.onChangeCollection.bind(this);
        //this.onChangeTypeOfPayment =  this.onChangeTypeOfPayment.bind(this);
        //this.displayPlayerData =  this.displayPlayerData.bind(this);
    }


    /*submit() {
        let errorsCount = 0;
        this.setState({formsubmiterror : null, formsubmiterrorClassCode : null});

        if(document.getElementById('collection_amount').value == null || document.getElementById('collection_amount').value == '') errorsCount++;

        var previous_balance = 0;
        if(this.props.playersdata != null)
            previous_balance = this.props.playersdata[0].new_balance;

        if (errorsCount === 0) {
            
            const formData = {
                'player_id' : this.state.selectedPlayerId,
                'collection_amount' : document.getElementById('collection_amount').value,
                'type_of_collection' : this.state.typeofcollectionvalue,
                'type_of_payment' : this.state.typeofpayment,
                'notes' : document.getElementById('notes').value,
                'previous_balance' : previous_balance,
            };

            new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'search/insertlogdata', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => {
                            this.setState({formsubmiterror : 'Log added successfully', formsubmiterrorClassCode : 'display-success'});
                            this.displayPlayerData();
                        }).catch(error => {
                            console.log(error);
                        });
            });

        } else {
            console.log('error');
            this.setState({formsubmiterror : 'Please fill all mandatory fields', formsubmiterrorClassCode : 'display-error'});
        }

        return false;
    }*/



    render() {

        return (
            <table width="100%">
                
                <tbody>
                {
                    this.state.formsubmiterror != null ? (<tr>
                        <td>
                            <div id={this.state.formsubmiterrorClassCode}>{this.state.formsubmiterror}</div>
                        </td>
                    </tr>) : null
                }
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>
                                <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="20%">
                                                <input onChange={this.onChangeCollection} data-text="Purchasing Chips" checked={this.state.typeofcollectiontext=='Purchasing Chips'} type="radio" name='type_of_collection' id='type_of_collection' value='request' />&nbsp;Purchasing Chips&nbsp;&nbsp; 
                                                <input onChange={this.onChangeCollection} data-text="Cashing Out" checked={this.state.typeofcollectiontext=='Cashing Out'} type="radio" name='type_of_collection' id='type_of_collection' value='refund' />&nbsp;Cashing Out
                                                </td>
                                                
                                            </tr>
                                        </tbody>
                                       </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="20%">
                                                <br />
                                                
                                                {this.state.typeofcollectiontext}<span className="asterix" aria-hidden="true">*</span> : <input type="number" step="any" id="collection_amount" />&nbsp;</td>
                                            </tr>
                                        </tbody>
                                       </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="20%">
                                                <input onChange={this.onChangeTypeOfPayment} type="radio" name='type_of_payment' checked={this.state.typeofpayment=='ACC'} id='type_of_payment' value='ACC' />&nbsp;Credit&nbsp;&nbsp; 
                                                <input onChange={this.onChangeTypeOfPayment} type="radio" name='type_of_payment' checked={this.state.typeofpayment=='CASH'} id='type_of_payment' value='CASH' />&nbsp;Cash</td>
                                            </tr>
                                        </tbody>
                                       </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="20%" height="60">
                                                <br />
                                                NOTES : <input type="text" id="notes" />
                                                </td>
                                                
                                            </tr>
                                        </tbody>
                                       </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="20%" height="60">
                                                <button onClick={(e)=>this.submit()} type="button" className="submitbutton">Add Log</button>
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
                    
                </tbody>
            </table>
        );
    }


}

export default AddCashier;
