import React from 'react';
import renderer from 'react-test-renderer';
import ShareForm from '../components/ShareForm';

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: jest.fn(),
        dispatch: jest.fn(),
      }),
    };
});

describe('Pruebas en <ShareForm />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const lastName = 'Apellido';
        const age = 'Edad';
        const document = 'DPI';
        const birth = 'Fecha de nacimiento';
        const smoker = 'Fumador';
        const med = 'Consumes medicamento';
        const pregnant = 'Embarazada';

        const props = { params: {name,lastName,age,document,birth,smoker,med,pregnant}};
        const tree = renderer.create(<ShareForm route={props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly withoutParams', () => {
            
            const tree = renderer.create(<ShareForm />).toJSON();
            expect(tree).toMatchSnapshot();        
    });
    
});