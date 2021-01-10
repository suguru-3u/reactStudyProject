import {createStore} from 'redux';

// blog state
const blogData = {
    data:[{title:"sample title",body:"sample body"}],
    viewEditChange:false,
    editNumber:""
}

// blog reducer
export function blogReducer(state = blogData,action){
    switch(action.type){
        case "ADD":
            return addReducer(state,action);

        case "DELETE":
            return deleteReducer(state,action);

        case "EDIT":
            return editReducer(state,action);
            
        case "viewChange":
            return viewChangeReducer(state,action);    

        default:
            return state;
    }
}

// reducer action

