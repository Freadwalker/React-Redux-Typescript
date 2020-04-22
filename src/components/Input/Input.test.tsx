import React from 'react';

import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) =>{
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store = {store}/>).dive()
  console.log(wrapper.debug());
  return wrapper;
}

describe("render",()=>{
  test("renders without breaking",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  })
  test("renders addButton",()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,"component-addButton");
    expect(component.length).toBe(1);
  })
})