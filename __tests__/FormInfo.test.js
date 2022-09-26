import React from 'react';
import renderer from 'react-test-renderer';
import FormInfo from '../components/FormInfo';

describe('Pruebas en <CreateProfile />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const lastName = 'Apellido';
        const age = 'Edad';
        const document = 'DPI';
        const birth = 'Fecha de nacimiento';
        const smoker = 'Fumador';
        const med = 'Consumes medicamento';
        const pregnant = 'Embarazada';
        const titulo = 'Titulo';
        const fechaCreacion = 'Fecha de creacion';
        const route = { params: {name,lastName,age,document,birth,smoker,med,pregnant,titulo,fechaCreacion}};
        const tree = renderer.create(<FormInfo route={route} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly withoutParams', () => {

        const tree = renderer.create(<FormInfo />).toJSON();
        expect(tree).toMatchSnapshot();        
    });
});