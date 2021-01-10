import {createStore} from 'redux';

// blog state
const blogData = {
    data:[{title:"sample title",body:"sample body"}],
    message:"",
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
function addReducer(state,action){
    let data = {
        title:action.title,
        body:action.body
    }
    let newdata = state.data.slice();
    newdata.unshift(data);
    return{
        data:newdata,
        message:"ADD",
        viewEditChange:false,
        editNumber:""
    }
}

function deleteReducer(state,action){
    let newdata = state.data.slice();
    newdata.splice(action.index,1);
    return{
        data:newdata,
        message:"DELETE",
        viewEditChange:false,
        editNumber:""
    }
}

// action creator
export function addBlog(text,content){
    return{
        type:"ADD",
        title:text,
        body:content
    }
}

export function deleteBlog(number){
    return{
        type:"DELETE",
        index:number
    }
}

export default createStore(blogReducer);