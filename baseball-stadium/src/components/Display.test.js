import React from 'react';
import {render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('The Display component', ()=>{
    it('renders the component', ()=>{
        render(<Display/>);
    })
})