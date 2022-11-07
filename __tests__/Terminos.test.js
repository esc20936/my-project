import React from 'react';
import renderer from 'react-test-renderer';
import Terminos from '../components/Terminos';

describe('Pruebas en <Terminos />', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Terminos />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});