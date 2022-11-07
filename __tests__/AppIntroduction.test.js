import React from 'react';
import renderer from 'react-test-renderer';
import AppIntroduction from '../components/AppIntroduction.js';

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

describe('Pruebas en <AppIntroduction />', () => {
    it('Renders correctly without params', () => {
        const tree = renderer.create(<AppIntroduction />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with params', () => {
        const navigation = { navigate: jest.fn() };
        const tree = renderer.create(<AppIntroduction navigation={navigation}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });   
});