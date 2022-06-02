import React, { Component } from 'react';
import { render } from 'react-dom';

import PlayerDetails from 'components/cashier/index/PlayerDetails';
import PlayerForm from 'components/cashier/index/PlayerForm';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playersdata: null,
            loaderPlayersData: null,
            selectedPlayerId: null,
        };


        this.getPlayersData =  this.getPlayersData.bind(this);
        this.selectPlayer =  this.selectPlayer.bind(this);
       
    }

    selectPlayer() {

        this.setState({selectedPlayerId: null, playersdata: null});

        
        //const { form } = this.state;
        //form.passenger.title = e.target.value;
        //this.setState({ form });
    }

    getPlayersData(player_id, text=''){ 

            this.setState({loaderPlayersData: 'Searching results...', playersdata: null});

            this.setState({selectedPlayerId: player_id});

            const formData = {
                player_id: player_id
            };

            new Promise((resolve, reject) => {
                    fetch(SERVER_BASE_URL_FULL+'?url=search/getplayersdetails', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({formData})
                    }).then(response => response.json())
                        .then((data) => {

                            if(data.length == 0){
                                if(text == '')
                                    this.setState({loaderPlayersData: 'No logs found'});
                                else 
                                    this.setState({loaderPlayersData: text});
                            }
                            else{
                               this.setState({playersdata: data});
                               this.setState({loaderPlayersData: null}); 
                            }

                        }).catch(error => {
                            
                            alert("System Exception");
                            reject(error);
                        });
            });

    }


    submit(thisParam) { 
            this.getPlayersData(document.getElementById('select_players').value);
        
            return false;
    }
    render() {

        const { players } = this.props;
        
        return (
            
                
                <table width="100%">
                <tbody>
                    <tr>
                        <td>
                            <select onChange={this.selectPlayer} name="select_players" id="select_players" aria-invalid="false">  
                                        <option selected="" value="">--Select Player--</option>
                                {(players !== null && players.length > 0) &&
                                        players.map(player => {
                                        
                                        return (
                                            <option selected="" key={player.user_id} value={player.user_id}>{player.user_name}</option>
                                        );
                                    })
                                }
                            </select>
                        </td>
                        <td>
                            <button onClick={(e)=>this.submit()} type="button" className="submitbutton">Apply</button>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                           <table width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        {
                                            this.state.selectedPlayerId != null ? (<PlayerForm getPlayersData={this.getPlayersData} playersdata= {this.state.playersdata} selectedPlayerId= {this.state.selectedPlayerId} />) : null
                                        }
                                    </td>
                                    
                                </tr>
                            </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            {
                                (this.state.loaderPlayersData != null) ? (<div id="display-success">{this.state.loaderPlayersData}</div>) : ''
                            }
                            
                            {
                                this.state.playersdata != null ? (<PlayerDetails getPlayersData={this.getPlayersData} playersdata= {this.state.playersdata} />) : null
                            }
                            
                        </td>
                    </tr>
                </tbody>
                </table>    
                
                
            

        );
    }
}

export default Search;
