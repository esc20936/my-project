import React from 'react';
import renderer from 'react-test-renderer';
import EditProfile from '../components/EditProfile';

describe('Pruebas en <EditProfile />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const email = 'Email';
        const photoUrl = 'Photo';
        const route = { params: {name,email,photoUrl}};
        const tree = renderer.create(<EditProfile route={route} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly withoutParams', () => {

        const tree = renderer.create(<EditProfile />).toJSON();
        expect(tree).toMatchSnapshot();        
    });
});