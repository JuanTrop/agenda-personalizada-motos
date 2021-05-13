import React from 'react';

class ScheduleItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            color: 'white'
        };
    }

    changeColor = e => {
        var color = 'white';
        var green = '#40664c';
        var bikeCounter = this.props.data.currentData;
        var stateColor = this.state.color;

        if(stateColor === 'white'){
            if (bikeCounter === 0){
                color = 'red';
            } else if(bikeCounter > 0){
                color = green
                this.props.changeColor(e, -1);
            }
        } else if(stateColor === green){
            if (bikeCounter === 0){
                color = 'white';
            } else if(bikeCounter > 0 && bikeCounter < 8){
                color = 'white';
            }
            this.props.changeColor(e, 1);
        } else {
            if (bikeCounter === 0){
                color = 'white';
            } else if(bikeCounter > 0){
                color = green
                this.props.changeColor(e, -1);
            }
        }

        this.setState({
            color: color
        });


    }

    render(){
        return(
            <div 
            className="schedule__item" 
            style = {{backgroundColor: this.state.color,
                      borderColor: this.state.color
            }}
            >
                <h2 className="schedule__item-title">
                    {this.props.data.hour}
                </h2>
                <button type="button" onClick={this.changeColor}>Book</button>
            </div>
        );
    }

}

class Schedule extends React.Component{

    constructor(){
        super();
        this.scheduleList = ['8:00', 
                             '8:30', 
                             '9:00', 
                             '9:30', 
                             '10:00', 
                             '10:30', 
                             '11:00', 
                             '11:30', 
                             '12:00 p.m',
                             '12:30 p.m',
                             '1:00 p.m',
                             '1:30 p.m',
                             '2:00 p.m',
                             '2:30 p.m',
                             '3:00 p.m',
                             '3:30 p.m',
                             '4:00 p.m',
                             '4:30 p.m',
                             '5:00 p.m',
                             '5:30 p.m',
                             '6:00 p.m',
                             '6:30 p.m',
                             '7:00 p.m',
                             '7:30 p.m',
                             '8:00 p.m',
                            ];

        this.state = {
            bikeCounter: 8,
            color: 'white',
        };

    }

    changeColor = (e, add) => {
        var value = this.state.bikeCounter + add;

        this.setState({
            bikeCounter: value,
        });
    }

    render(){
        return(
            <div className="schedule">
                <h2 className="schedule__bookings">Bykes available: &nbsp;{this.state.bikeCounter}</h2>
                <div className="schedule__itemcontainer">
                    { this.scheduleList.map(hour => {
                        return(
                                <ScheduleItem key = {hour} data= {{hour:hour, currentData: this.state.bikeCounter}} changeColor ={this.changeColor}></ScheduleItem>
                        )
                    })
                    }
                </div>
            </div>
        );
    }

}

export default Schedule;