import React from 'react';
import renderer from 'react-test-renderer';
import Camara from '../components/Camara';

describe('Pruebas en <Camera />', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Camara />).toJSON();
        expect(tree).toMatchSnapshot();
    });

 
    
    
});