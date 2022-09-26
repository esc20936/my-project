import React from 'react';
import renderer from 'react-test-renderer';
import MedicalHistory from '../components/MedicalHistory';

describe('Pruebas en <HistoryDetail />', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<MedicalHistory />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});