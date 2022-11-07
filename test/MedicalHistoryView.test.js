import React from 'react';
import renderer from 'react-test-renderer';
import MedicalHistoryView from '../components/MedicalHistoryView';

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

describe('Pruebas en <MedicalHistoryView />', () => {
    it('Renders correctly', () => {
        const name = 'Nombre';
        const date = 'Fecha';

        const props = {name,date};

        const tree = renderer.create(<MedicalHistoryView props={props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('Renders correctly withoutParams', () => {
            
            const tree = renderer.create(<MedicalHistoryView />).toJSON();
            expect(tree).toMatchSnapshot();        
    });
});