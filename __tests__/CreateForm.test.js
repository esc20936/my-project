import React from 'react';
import renderer from 'react-test-renderer';
import './Mocks/addEventListener.mock';
import {CreateForm, saveFormInfo} from '../components/CreateForm';

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

    it('saveFormInfo validData fireBase Error', () => {
        const navigation = { navigate: jest.fn() };
        let  email,title,name,lastName,document,smoker,medicamento,pregnant = 'data';
        let age = 20;
        let birth = '2020-01-01';
        expect(saveFormInfo(navigation,email,title,name,lastName,age,document,birth,smoker,medicamento,pregnant,true)).toBe(false);
        
    });

    it('saveFormInfo validData', () => {
        const navigation = { navigate: jest.fn() };
        let  email,title,name,lastName,document,smoker,medicamento,pregnant = 'data';
        let age = 20;
        let birth = '2020-01-01';
        expect(saveFormInfo(navigation,email,title,name,lastName,age,document,birth,smoker,medicamento,pregnant,false)).toBe(true);
    });

    it('saveFormInfo invalidData', () => {
        const navigation = { navigate: jest.fn() };
        let  email,title,name,lastName,age,birth,document,smoker,medicamento,pregnant = '';
        
        expect(saveFormInfo(navigation,email,title,name,lastName,age,document,birth,smoker,medicamento,pregnant,true)).toBe(false);
        
    });
});