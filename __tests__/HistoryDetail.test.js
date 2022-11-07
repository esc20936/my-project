import React from 'react';
import renderer from 'react-test-renderer';
import HistoryDetail from '../components/HistoryDetail';

describe('Pruebas en <HistoryDetail />', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<HistoryDetail />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});