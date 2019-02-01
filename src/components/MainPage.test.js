import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps} />);
})

describe('MainPage Tests', () => {

    it('renders MainPage without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    it('filters robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'john',
            isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
            email: 'john@gmail.com'
        }])
    })
    
    it('filters correct robots when searchField is incompatible', () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'a',
            isPending: false
        }
        const filteredRobots = []
        const wrapper2 = shallow(<MainPage { ...mockProps3}/>)
        expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots)
    })
    
    it('renders a loading header when isPending', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: true
        }
        const wrapperPending = shallow(<MainPage { ...mockProps} />);
        expect(wrapperPending.text()).toEqual('Loading');
    })
})