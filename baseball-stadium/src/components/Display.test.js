import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('The Display component', ()=>{
    it('renders the component', ()=>{
        render(<Display/>);
    })

    it('displays balls', ()=>{
        const component = render(<Display/>);
        const balls = component.getByTestId('balls');
        expect(balls).toHaveTextContent('Balls:');
    })

    it('displays strikes', ()=>{
        const component = render(<Display/>);
        const balls = component.getByTestId('strikes');
        expect(balls).toHaveTextContent('Strikes:');
    })
})