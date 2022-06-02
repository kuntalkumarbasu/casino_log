import React, { Component } from 'react';
import { render } from 'react-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorsData: null,
        };
    }

    submit(thisParam) { 
        
            const formData = {
                user_id: document.getElementById('user_id').value,
                user_pass: document.getElementById('user_pass').value
            };

            new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=admin/adminlogin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => { 

                            if (!Object.prototype.hasOwnProperty.call(data, 'error')) {
                                //redirect to confirmation page
                                window.location = SERVER_BASE_URL_FULL+'?url=admin/adminprofile';

                            } else {
                                this.setState({errorsData: data.error});
                            }


                        }).catch(error => {
                            
                            alert("System Exception");
                            reject(error);
                        });
            });


        
        return false;
    }
    render() {

        var cashierloginUrl = SERVER_BASE_URL_FULL;

        return (
            
                
                <table width="100%">
                <tbody>
                    <tr>
                        <td>
                            Admin Username : <input type="text" id="user_id" placeholder="username"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Admin Password : <input type="password" id="user_pass"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="submitbutton" onClick={(e)=>this.submit()} type="button">Log in as Admin</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Want to login as Cashier? <a href={cashierloginUrl}>Click here</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {this.state.errorsData}
                        </td>
                    </tr>
                </tbody>
                </table>    
                
                
            

        );
    }
}

export default Login;
