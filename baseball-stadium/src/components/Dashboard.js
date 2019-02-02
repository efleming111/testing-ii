import React from 'react';

import Display from './Display'

class Dashboard extends React.Component{
    state = {
        balls: 0,
        strikes: 0,
    }

    addBall = (event)=>{
        event.preventDefault();
        const newBalls = this.state.balls + 1;
        if(newBalls >= 4){
            this.setState({
                balls: 0,
                strikes: 0
            })
        }
        else{
            this.setState({
                balls: newBalls
            })
        }
    }

    addStrike = (event)=>{
        event.preventDefault();
        const newStrikes = this.state.strikes + 1;
        if(newStrikes >= 3){
            this.setState({
                balls: 0,
                strikes: 0
            })
        }
        else{
            this.setState({
                strikes: newStrikes
            })
        }
    }

    foulBall = (event)=>{
        event.preventDefault();
        if(this.state.strikes < 2){
            const newStrikes = this.state.strikes + 1;
            this.setState({
                strikes: newStrikes
            })
        }
    }

    hit = (event)=>{
        this.setState({
            balls: 0,
            strikes: 0
        })
    }

    render(){
        return(
            <div>
                <div>
                    <button data-testid="ball" onClick={this.addBall}>Ball</button>
                    <button data-testid="strike" onClick={this.addStrike}>Strike</button>
                    <button data-testid="foul" onClick={this.foulBall}>Foul</button>
                    <button data-testid="hit" onClick={this.hit}>Hit</button>
                    <Display balls={this.state.balls} strikes={this.state.strikes}/>
                </div>
            </div>
        )
    }
}

export default Dashboard;