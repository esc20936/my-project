import React from 'react';
import renderer from 'react-test-renderer';
import './Mocks/addEventListener.mock';
import UserLogin from '../components/UserLogin';

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

describe('Pruebas en <UserLogin />', () => {
    it('Renders correctly without params', () => {
        const tree = renderer.create(<UserLogin />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with params', () => {
        const navigation = { navigate: jest.fn() };
        const tree = renderer.create(<UserLogin navigation={navigation}/>).toJSON();
        expect(tree).toMatchSnapshot();
    }); 
    
});