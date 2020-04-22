import { createStore } from 'redux';
import rootReducer from "../redux/reducers";

export const storeFactory = (initialState: any) => {
    return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper: any, val: any) => {
    return wrapper.find(`[data-test="${val}"]`);
};
