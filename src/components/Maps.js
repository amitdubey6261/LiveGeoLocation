import React, { Component } from 'react'

export class Maps extends Component {
    constructor(props){
        super(props);
        this.state = {
            accuracy:0 ,
            latitude : 0 ,
            longitude : 0 ,
            altitude : 0 , 
            speed: 0 ,
        }
    }

    getLocation = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({
                    latitude:position.coords.latitude , 
                    longitude:position.coords.longitude ,
                    altitude:position.coords.altitude ,
                    speed:position.coords.speed,
                    accuracy:position.coords.accuracy,
                })
            })
        }else{
            console.log("The geolocation is not supported");
        }
    }

    render() {
        return (
            <>
                <input type="number"  value={this.state.latitude}/><br />
                <input type="number"  value={this.state.longitude}/><br />
                <input type="number"  value={this.state.altitude}/><br />
                <input type="number"  value={this.state.speed}/><br />
                <input type="number"  value={this.state.accuracy}/><br />
                <button onClick={() => { this.getLocation() }} on> Track Live Location </button>
            </>
        )
    }
}

export default Maps