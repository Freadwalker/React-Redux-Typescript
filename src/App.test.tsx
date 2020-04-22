import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, storeFactory } from './test/testUtils';
import App from './App';

const setup = (initialState = {}) =>{
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store = {store}/>)
  return wrapper;
}

describe("render",()=>{
  test("renders without breaking",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  })
  test("renders TodoList",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,"component-todo");
    expect(component.length).toBe(1);
  })
})