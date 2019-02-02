import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from './Display';

describe('The Dashboard component', ()=>{
    it('renders the component', ()=>{
        render(<Dashboard/>);
    })

    it('displays buttons', ()=>{
        const component = render(<Dashboard/>);

        const ballButton = component.getByTestId('ball');
        expect(ballButton).toHaveTextContent('Ball');

        const strikeButton = component.getByTestId('strike');
        expect(strikeButton).toHaveTextContent('Strike');

        const foulButton = component.getByTestId('foul');
        expect(foulButton).toHaveTextContent('Foul');

        const hitButton = component.getByTestId('hit');
        expect(hitButton).toHaveTextContent('Hit');
    })

    it('renders display', ()=>{
        render(<Display/>);
    })

    it('updates balls', ()=>{
        const dashboardComponent = render(<Dashboard/>);
        const displayComponent = render(<Display/>);

        const button = dashboardComponent.getByTestId('ball');
        fireEvent.click(button);

        const balls = displayComponent.getByTestId('balls');
        expect(balls).toHaveTextContent('Balls: 1');

        // Tests ball increment
        fireEvent.click(button);
        expect(balls).toHaveTextContent('Balls: 2');
        fireEvent.click(button);
        expect(balls).toHaveTextContent('Balls: 3');
        fireEvent.click(button);
        expect(balls).toHaveTextContent('Balls: 0');
    })

    it('updates strikes', ()=>{
        const dashboardComponent = render(<Dashboard/>);
        const displayComponent = render(<Display/>);

        const button = dashboardComponent.getByTestId('strike');
        fireEvent.click(button);

        const strikes = displayComponent.getByTestId('strikes');
        expect(strikes).toHaveTextContent('Strikes: 1');

        // TEst strike increment
        fireEvent.click(button);
        expect(strikes).toHaveTextContent('Strikes: 2');
        fireEvent.click(button);
        expect(strikes).toHaveTextContent('Strikes: 0');
    })
    

    it('updates strikes with foul', ()=>{
        const dashboardComponent = render(<Dashboard/>);
        const displayComponent = render(<Display/>);

        const button = dashboardComponent.getByTestId('foul');
        fireEvent.click(button);

        const strikes = displayComponent.getByTestId('strikes');
        expect(strikes).toHaveTextContent('Strikes: 1');

        fireEvent.click(button);
        expect(strikes).toHaveTextContent('Strikes: 2');
        fireEvent.click(button);
        expect(strikes).toHaveTextContent('Strikes: 2');
    })

    it('updates hit', ()=>{
        const dashboardComponent = render(<Dashboard/>);
        const displayComponent = render(<Display/>);

        const button = dashboardComponent.getByTestId('hit');
        fireEvent.click(button);

        const strikes = displayComponent.getByTestId('strikes');
        expect(strikes).toHaveTextContent('Strikes: 0');

        const balls = displayComponent.getByTestId('balls');
        expect(balls).toHaveTextContent('Balls: 0');
    })
})