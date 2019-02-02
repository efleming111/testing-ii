import React from 'react';

class Display extends React.Component{
    render(){
        return(
            <div>
                <div data-testid="balls">Balls: {this.props.balls}</div>
                <div data-testid="strikes">Strikes: {this.props.strikes}</div>
            </div>
        )
    }
}

export default Display;