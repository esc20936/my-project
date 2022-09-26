import React from 'react';
import renderer from 'react-test-renderer';
import './Mocks/addEventListener.mock';
import CreateForm from '../components/CreateForm';



describe('Pruebas en <CreateProfile />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const email = 'Email';
        const photoUrl = 'Photo';
        const route = { params: {name,email,photoUrl}};
        const tree = renderer.create(<CreateForm route={route} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly withoutParams', () => {

        const tree = renderer.create(<CreateForm />).toJSON();
        expect(tree).toMatchSnapshot();        
    });
});