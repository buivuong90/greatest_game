//import {HOME_TEST_ACTION} from './constants';

const initialState = {
    test: 'me may thi test'
};

function homeReducer(state = initialState, action){
    switch(action.type){
        /*case HOME_TEST_ACTION:
            return Object.assign({}, state, {
                test: 'vut me may di'
            })*/
        default:
          return state;
    }
}

export default homeReducer;