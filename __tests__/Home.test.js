import React from 'react';
import renderer from 'react-test-renderer';
import './Mocks/addEventListener.mock';
import Home from '../components/Home';

describe('Pruebas en <Home />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const email = 'Email';
        const photoUrl = 'Photo';
        const route = { params: {name,email,photoUrl}};
        const tree = renderer.create(<Home route={route} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly withoutParams', () => {

        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();        
    });
});