import React from 'react';
import renderer from 'react-test-renderer';
import FormView from '../components/FormView';

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

describe('Pruebas en <FormView />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const lastName = 'Apellido';
        const age = 'Edad';
        const document = 'DPI';
        const birth = 'Fecha de nacimiento';
        const smoker = 'Fumador';
        const med = 'Consumes medicamento';
        const pregnant = 'Embarazada';

        const props = { data: {name,lastName,age,document,birth,smoker,med,pregnant}};
        const tree = renderer.create(<FormView data={props} name={name} date={"dummie"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly withoutParams', () => {
            
            const tree = renderer.create(<FormView />).toJSON();
            expect(tree).toMatchSnapshot();        
    });
    
});