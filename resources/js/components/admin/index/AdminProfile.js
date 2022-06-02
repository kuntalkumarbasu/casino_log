import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import axios from 'axios';
import MaskedInput from 'react-maskedinput';
import { SingleDatePicker } from "react-dates";
//import 'react-dates/initialize';
//import 'react-dates/lib/css/_datepicker.css';

class AdminProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formsubmiterror: null,
            formsubmiterrorClassCode: null,
            adminname: this.props.adminname,
            sectionname: 'updateprofile',
            cashiers: null,
            users: null,
            downloadlogusers : null,
            selectedPlayerId: null,
            imagename:null,
            imagefile: null,
            admindetails: this.props.admindetails,
            focused: null,
            downloaddate: null,
            downloaduser:null,
            downloaddisplaydata: null,
        };

        this.displayaddcashierform =  this.displayaddcashierform.bind(this);
        this.displayadduserform =  this.displayadduserform.bind(this);
        this.displayupdateprofileform =  this.displayupdateprofileform.bind(this);
        this.deletelog =  this.deletelog.bind(this);
        this.deleteuser =  this.deleteuser.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.changeAdminInput = this.changeAdminInput.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.selectPlayer =  this.selectPlayer.bind(this);
    }

    selectPlayer(e) {

        console.log(e.target.value);
        this.setState({selectedPlayerId: e.target.value});

    }

    onChangeImg(event) {
        this.setState({
            imagename: URL.createObjectURL(event.target.files[0]),
            imagefile: event.target.files[0]
        })
    }


    changeAdminInput(e) {
        
        let admindetails = this.state.admindetails;
        
        admindetails[e.target.id] = e.target.value;

        this.setState({admindetails: admindetails});
        
    }


    deleteuser(logId) {

        this.setState({deletePlayerData: 'Deleting data...'});

        const formData = {
            logId: logId
        };

        new Promise((resolve, reject) => {
                fetch(SERVER_BASE_URL_FULL+'?url=admin/deleteuser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({formData})
                }).then(response => response.json())
                    .then((data) => {

                        this.setState({deletePlayerData: null, users : data.users});
                        

                    }).catch(error => {
                        
                        alert("System Exception");
                        reject(error);
                    });
        });

        return false;    
    }


    deletelog(logId) {

        this.setState({deletePlayerData: 'Deleting data...'});

        const formData = {
            logId: logId
        };

        new Promise((resolve, reject) => {
                fetch(SERVER_BASE_URL_FULL+'?url=admin/deletecashier', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({formData})
                }).then(response => response.json())
                    .then((data) => {

                        this.setState({deletePlayerData: null, cashiers : data.cashiers});
                        

                    }).catch(error => {
                        
                        alert("System Exception");
                        reject(error);
                    });
        });

        return false;    
    }

    submitdownload(){

        //console.log(typeof document.getElementById('select_players'));

        this.setState({sectionname : 'downloadlog'});

        const formData = {
                downloaddate: this.state.downloaddate,
                downloaduser: this.state.selectedPlayerId
            };
        new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=admin/displaylogbydate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => { console.log(data.users);
                            this.setState({downloaddisplaydata : data.results, downloadlogusers : data.users});
                           
                        }).catch(error => {
                            console.log(error);
                        });
            });
    }

    displayaddcashierform() {
        this.setState({sectionname : 'addcashier'});
        const formData = {};
        new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=admin/getAllcashier', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => { console.log(data.cashiers)

                            if(Object.prototype.hasOwnProperty.call(data, 'error'))
                            {
                                this.setState({formsubmiterror : data.error, formsubmiterrorClassCode : 'display-error'}); 
                            }
                            else{
                                this.setState({cashiers : data.cashiers});
                            }
                            
                        }).catch(error => {
                            console.log(error);
                        });
            });
    }

    displayadduserform() {
        this.setState({sectionname : 'adduser'});
        const formData = {};
        new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=admin/getAlluser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => { console.log(data.users)

                            if(Object.prototype.hasOwnProperty.call(data, 'error'))
                            {
                                this.setState({formsubmiterror : data.error, formsubmiterrorClassCode : 'display-error'}); 
                            }
                            else{
                                this.setState({users : data.users});
                            }
                            
                        }).catch(error => {
                            console.log(error);
                        });
            });
    }


    displayupdateprofileform() {
        this.setState({sectionname : 'updateprofile'});
    }

    submit() {
        let errorsCount = 0;
        let oldpassnull = true;
        let newpassnull = true;
        let atleastonefieldenter = false;
        this.setState({formsubmiterror : null, formsubmiterrorClassCode : null});

        if(document.getElementById('username').value == null || document.getElementById('username').value == '') {
            errorsCount++;
        }
        else atleastonefieldenter = true;

        if(document.getElementById('old_pass').value != null || document.getElementById('old_pass').value != '') {
            oldpassnull = false;
            atleastonefieldenter = true;
        }
        if(document.getElementById('new_pass').value != null || document.getElementById('new_pass').value != '') {
            newpassnull = false;
            atleastonefieldenter = true;
        }

        if(atleastonefieldenter) errorsCount = 0;

        if((oldpassnull && !newpassnull) || (!oldpassnull && newpassnull)){
            errorsCount++;
        }

        if(document.getElementById('conf_new_pass').value != document.getElementById('new_pass').value) errorsCount++;

        if (errorsCount === 0) {

            const fd = new FormData();
            if(this.state.imagefile != null) fd.append('image', this.state.imagefile, this.state.imagefile.name);
            fd.append('username', document.getElementById('username').value);
            fd.append('old_pass', document.getElementById('old_pass').value);
            fd.append('new_pass', document.getElementById('new_pass').value);
            fd.append('business_name', document.getElementById('businessname').value); 

            axios.post(SERVER_BASE_URL_FULL+'?url=admin/updateprofile', fd
            ).then((response)=>
            {
                console.log(response);
                if ('error' in response.data) {
                    this.setState({formsubmiterror : response.data.error, formsubmiterrorClassCode : 'display-error'}); 
                }
                else{

                    let admindetails = this.state.admindetails;
                    admindetails['logo'] = response.data.logo;

                    this.setState({admindetails: admindetails});

                    this.setState({adminname : response.data.admin_username, formsubmiterror : 'Profile updated successfully', formsubmiterrorClassCode : 'display-success'});
                }
            }
            );


        } else {

            if(document.getElementById('conf_new_pass').value != document.getElementById('new_pass').value){
                this.setState({formsubmiterror : 'Confirm new password is not matching with new password', formsubmiterrorClassCode : 'display-error'});
            }
            else{
                this.setState({formsubmiterror : 'Please fill required field', formsubmiterrorClassCode : 'display-error'}); 
            }
            
        }

        return false;
    }

    submitcashier() {
        let errorsCount = 0;
        
        this.setState({formsubmiterror : null, formsubmiterrorClassCode : null});

        if(document.getElementById('cashier_name').value == null || document.getElementById('cashier_name').value == '') {
            errorsCount++;
        }
        if(document.getElementById('cashier_username').value == null || document.getElementById('cashier_username').value == '') {
            errorsCount++;
        }
        if(document.getElementById('cashier_pass').value == null || document.getElementById('cashier_pass').value == '') {
            errorsCount++;
        }


        if (errorsCount === 0) {
            
            const formData = {
                'cashier_name' : document.getElementById('cashier_name').value,
                'cashier_username' : document.getElementById('cashier_username').value,
                'cashier_pass' : document.getElementById('cashier_pass').value,
            };

            new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=admin/insertcashier', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => { console.log(data.cashiers)

                            if(Object.prototype.hasOwnProperty.call(data, 'error'))
                            {
                                this.setState({formsubmiterror : data.error, formsubmiterrorClassCode : 'display-error'}); 
                            }
                            else{
                                document.getElementById("create-cashier-form").reset();
                                this.setState({cashiers : data.cashiers, formsubmiterror : 'Cashier added successfully', formsubmiterrorClassCode : 'display-success'});
                            }
                            
                        }).catch(error => {
                            console.log(error);
                        });
            });

        } else {

            this.setState({formsubmiterror : 'Please fill required field', formsubmiterrorClassCode : 'display-error'}); 
            
            
        }

        return false;
    }

    submituser() {
        let errorsCount = 0;
        
        this.setState({formsubmiterror : null, formsubmiterrorClassCode : null});

        if(document.getElementById('user_name').value == null || document.getElementById('user_name').value == '') {
            errorsCount++;
        }
        if(document.getElementById('phone').value == null || document.getElementById('phone').value == '') {
            errorsCount++;
        }


        if (errorsCount === 0) {
            
            const formData = {
                'user_name' : document.getElementById('user_name').value,
                'phone' : document.getElementById('phone').value,
            };

            new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=admin/insertuser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => { console.log(data.users)

                            if(Object.prototype.hasOwnProperty.call(data, 'error'))
                            {
                                this.setState({formsubmiterror : data.error, formsubmiterrorClassCode : 'display-error'}); 
                            }
                            else{
                                document.getElementById("phone").value = null;
                                
                                document.getElementById("create-user-form").reset();
                                this.setState({users : data.users, formsubmiterror : 'User added successfully', formsubmiterrorClassCode : 'display-success'});
                            }
                            
                        }).catch(error => {
                            console.log(error);
                        });
            });

        } else {

            this.setState({formsubmiterror : 'Please fill required field', formsubmiterrorClassCode : 'display-error'}); 
            
            
        }

        return false;
    }

    onDateChange(date) {
        this.setState({ downloaddate : date, downloaddisplaydata : null });
        //this.props.onDateChange(date);
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
        //this.props.onFocusChange(focused);
    }

    render() {

        var downloadLogLink = SERVER_BASE_URL_FULL+'?url=admin/download/'+this.state.downloaddate+'/'+this.state.selectedPlayerId;

        console.log(this.state.selectedPlayerId);
        return (
            <table width="100%">
                <tbody>
                {
                    this.state.formsubmiterror != null ? (<tr>
                        <td colSpan="2">
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
                        <td style={{ verticalAlign: "top"}}>
                                <table width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <button onClick={(e)=>this.displayupdateprofileform()} type="button" className={`${this.state.sectionname == 'updateprofile' ? 'submitbuttonactive' : 'submitbutton'}`}>Edit Profile</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button onClick={(e)=>this.displayaddcashierform()} type="button" className={`${this.state.sectionname == 'addcashier' ? 'submitbuttonactive' : 'submitbutton'}`}>Add Cashier</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button onClick={(e)=>this.displayadduserform()} type="button" className={`${this.state.sectionname == 'adduser' ? 'submitbuttonactive' : 'submitbutton'}`}>Add User</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button onClick={(e)=>this.submitdownload()} type="button" className={`${this.state.sectionname == 'downloadlog' ? 'submitbuttonactive' : 'submitbutton'}`}>Download Log</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href={SERVER_BASE_URL_FULL+'?url=admin/logout'} type="button" className="submitbutton">Logout</a>
                                        </td>
                                    </tr>
                                </tbody>
                               </table>
                        </td>
                        <td>

                                {
                                    (this.state.sectionname == 'updateprofile') ? (
                                        <form>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td width="20%" height="60">
                                                        <br />
                                                        Existing Username : <b>{this.state.adminname}</b>
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
                                                        <br />
                                                        New Username : <input type="text" id="username" />
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
                                                        <br />
                                                        Old Password : <input type="password" id="old_pass" />
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
                                                        <br />
                                                        New Password : <input type="password" id="new_pass" />
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
                                                        <br />
                                                        Confirm New Password : <input type="password" id="conf_new_pass" />
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
                                                        <br />
                                                        Business Name : <input type="text" id="businessname" value={this.state.admindetails.businessname} onChange={this.changeAdminInput} />
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
                                                        <br />
                                                        Add your logo : <input type="file" name="image" onChange={this.onChangeImg} />
                                                        <br />
                                                        {
                                                           this.state.admindetails.logo != null ? (<img height="60" src={`${IMG_UPLOAD}${this.state.admindetails.logo}`} />) : '' 
                                                        }
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
                                                        <button onClick={(e)=>this.submit()} type="button" className="submitbutton">Update</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                               </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        </form>
                                    ) : null
                                }


                                {
                                    (this.state.sectionname == 'addcashier') ? (
                                        <form id="create-cashier-form">
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td width="20%" height="60">
                                                        <br />
                                                        Cashier Name : <input type="text" id="cashier_name" />
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
                                                        <br />
                                                        Cashier UserName : <input type="text" id="cashier_username" />
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
                                                        <br />
                                                        Cashier Password : <input type="text" id="cashier_pass" />
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
                                                        <button onClick={(e)=>this.submitcashier()} type="button" className="submitbutton">Add Cashier</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                               </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        </form>
                                    ) : null
                                }

                                {
                                    (this.state.sectionname == 'adduser') ? (
                                        <form id="create-user-form">
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td width="20%" height="60">
                                                        <br />
                                                        User Name<span className="asterix" aria-hidden="true">*</span> : <input type="text" id="user_name" />
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
                                                        <br />
                                                        Phone Number<span className="asterix" aria-hidden="true">*</span> : <MaskedInput id="phone" type="text" mask="111-111-1111" />
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
                                                        <button onClick={(e)=>this.submituser()} type="button" className="submitbutton">Add User</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                               </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        </form>
                                    ) : null
                                }

                                {
                                    (this.state.sectionname == 'downloadlog') ? (
                                        <form id="create-user-form">
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                                <td style={{ verticalAlign: "top"}}>
                                                    
                                                    <select onChange={this.selectPlayer} name="select_players" id="select_players">  
                                                                <option selected="" value="">--Select Player--</option>
                                                                {(this.state.downloadlogusers !== null && this.state.downloadlogusers.length > 0) &&
                                                                        this.state.downloadlogusers.map(player => {
                                                                        
                                                                        return (
                                                                            <option key={player.user_id} value={player.user_id}>{player.user_name}</option>
                                                                        );
                                                                    })
                                                                }
                                                    </select>
                                                    <button onClick={(e)=>this.submitdownload()} type="button" className="submitbutton">Apply</button>
                                                </td>
                                                {/*<td style={{ verticalAlign: "top"}}>
                                                <label>Select Date: </label>
                                                        <SingleDatePicker
                                                            date={this.state.downloaddate} // momentPropTypes.momentObj or null
                                                            onDateChange={this.onDateChange}
                                                            onFocusChange={this.onFocusChange}
                                                            focused={this.state.focused} // PropTypes.bool
                                                            numberOfMonths={1}
                                                            displayFormat="DD-MMM-YYYY"
                                                            showClearDate={true}
                                                            isOutsideRange={() => false}
                                                        />
                                                </td>*/}
                                            </tr>
                                            
                                        </tbody>
                                        </table>
                                        </form>
                                    ) : null
                                }
                        </td>
                    </tr>

                    {
                        (this.state.cashiers != null && this.state.sectionname == 'addcashier') ? (
                            <tr>
                                <td colSpan="2">
                                        <table width="100%" id="players">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th width="20%">Cashier Name</th>
                                                        <th width="20%">Username</th>
                                                        <th width="20%">Status</th>
                                                        <th width="20%"></th>
                                                    </tr>
                                                    
                                                    {(this.state.cashiers !== null) &&
                                                        this.state.cashiers.map((eachplayersdata, keyplayersdata) => (  
                                                            <tr key={`eachuser-${keyplayersdata}`}>
                                                                <td width="20%">{eachplayersdata.cashier_name}</td>
                                                                <td width="20%">{eachplayersdata.cashier_username}</td>
                                                                <td width="20%">{eachplayersdata.status}</td>
                                                                <td width="20%">
                                                                <img onClick={() => this.deletelog(eachplayersdata.cashier_id)} src={`${IMG}delete.png`} height="20" />
                                                                </td>
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
                        ) : null
                    }


                    {
                        (this.state.users != null && this.state.sectionname == 'adduser') ? (
                            <tr>
                                <td colSpan="2">
                                        <table width="100%" id="players">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th width="20%">User</th>
                                                        <th width="20%">Phone</th>
                                                        <th width="20%"></th>
                                                    </tr>
                                                    
                                                    {(this.state.users !== null) &&
                                                        this.state.users.map((eachplayersdata, keyplayersdata) => (  
                                                            <tr key={`eachuser-${keyplayersdata}`}>
                                                                <td width="20%">{eachplayersdata.user_name}</td>
                                                                <td width="20%">{eachplayersdata.user_phone_number}</td>
                                                                <td width="20%">
                                                                <img onClick={() => this.deleteuser(eachplayersdata.user_id)} src={`${IMG}delete.png`} height="20" />
                                                                </td>
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
                        ) : null
                    }

                    {
                        (this.state.sectionname == 'downloadlog' && this.state.downloaddisplaydata != null) ? (
                            <tr>
                                <td colSpan="2">
                                        <table width="100%" id="players">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th width="20%">Cashier</th>
                                                        <th width="20%">User</th>
                                                        <th width="20%">Date</th>
                                                        <th width="20%">Time</th>
                                                        <th width="20%">Amount</th>
                                                        <th width="20%">Collection Type</th>
                                                        <th width="20%">Payment</th>
                                                        <th width="20%">Notes</th>
                                                    </tr>
                                                    
                                                    {(this.state.downloaddisplaydata !== null && this.state.downloaddisplaydata.length > 0) &&
                                                        this.state.downloaddisplaydata.map((eachplayersdata, keyplayersdata) => (  
                                                            <tr key={`eachuser-${keyplayersdata}`}>
                                                                <td width="20%">{eachplayersdata.cashier_name}</td>
                                                                <td width="20%">{eachplayersdata.user_name}</td>
                                                                <td width="20%">{moment(eachplayersdata.collection_time).format('MM/DD/YYYY')}</td>
                                                                <td width="20%">{moment(eachplayersdata.collection_time).format('HH:mm:ss')} </td>
                                                                <td width="20%">{eachplayersdata.amount_collected}</td>
                                                                <td width="20%">{eachplayersdata.type_of_collection}</td>
                                                                <td width="20%">{eachplayersdata.type_of_payment}</td>
                                                                <td width="20%">{eachplayersdata.notes}</td>
                                                            </tr>
                                                        ))
                                                    }

                                                    {
                                                      (this.state.downloaddisplaydata !== null && this.state.downloaddisplaydata.length == 0) ? (
                                                        
                                                        <tr>
                                                            <td colSpan="7">No log found</td>
                                                        </tr>

                                                      ) : null  
                                                    }
                                                    
                                                    
                                                </tbody>
                                               </table>
                                                </td>
                                            </tr>

                                            {
                                              (this.state.downloaddisplaydata !== null && this.state.downloaddisplaydata.length > 0) ? (
                                                
                                                <tr>
                                                    <td><a href={downloadLogLink} className="submitbutton">Download Log</a></td>
                                                </tr>

                                              ) : null  
                                            }
                                        </tbody>
                                       </table>
                                </td>
                            </tr>
                        ) : null
                    }
                    
                    
                </tbody>
            </table>
        );
    }


}

export default AdminProfile;
