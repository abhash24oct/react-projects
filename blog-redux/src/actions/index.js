import JsonPlaceholder from "../Api/JsonPlaceholder";
import _ from 'lodash';


export const fetchPostAndUsers =() =>async (dispatch,getState) =>{

    console.log("About to fetch posts!!")
    await dispatch(fetchPost());
    
    //const userIds=_.uniq(_.map(getState().posts,'userId'));
    //userIds.forEach(id => dispatch(fetchUser(id)));

    //Refactoring using loadash the commented steps
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
        

}

export const fetchPost= () => async  dispatch => {
        const response =await JsonPlaceholder.get('/posts'); 

        dispatch( {
            type:'FETCH_POST',
            payload:response.data
        });
    };


export const _memoizedfetchUser = (id) =>  dispatch =>{
    _fetchUser(id,dispatch);
}

const _fetchUser= _.memoize(async (id,dispatch)=>{
    const response = await JsonPlaceholder.get(`/users/${id}`)
    dispatch({
        type:'FETCH_USER',
        payload:response.data
    })
});


export const fetchUser = function (id) {

   return  async function(dispatch){
        const response = await JsonPlaceholder.get(`/users/${id}`)
        dispatch({
            type:'FETCH_USER',
            payload:response.data
        });
    }  
}

