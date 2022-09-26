import React from 'react';
import renderer from 'react-test-renderer';
import './Mocks/addEventListener.mock';
import {CreateProfile, validate} from '../components/CreateProfile';

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
    it('Renders correctly without params', () => {
        const tree = renderer.create(<CreateProfile />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with params', () => {
        const navigation = { navigate: jest.fn() };
        const tree = renderer.create(<CreateProfile navigation={navigation}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('validate Email', () => {
        const email = 'pablo@example.com';
        const result = validate(email);
        expect(result).toBe(true);
    });

    it('validate wrong Email', () => {
        const email = 'pabloexample.com';
        const result = validate(email);
        expect(result).toBe(false);
    });

});