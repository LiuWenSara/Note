/*
* Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
* Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
*/

import {combineReducers} from 'redux'
import {ADD_TODO, NEW_TO_ACTIVE, ACTIVE_TO_NEW,ACTIVE_TO_COMPLETED, COMPLETED_TO_ACTIVE,DELETE_TODO} from "../Actions/Action.jsx"

let todos;
/*
匿名函数定义localStorage初始化的事项
 */
(() => {
    if(localStorage.todos){
        todos = JSON.parse(localStorage.todos);//将localStorage的字符串转化为对象
    }else{
       todos = [];
    }
})();


const todolist = (state = todos,action) => {
    switch(action.type){
        /*
         *添加任务事件
         *将todo对象转化为为字符串添加储存在localStorage中
         * 同时返回新的state
         */
        case ADD_TODO:
            return [
                ...state,{
                    todo:action.text,
                    new:true,
                    active:false,
                    complete:false
                }
            ];
        /*
        新的任务转化为处理中的任务
         */
        case  NEW_TO_ACTIVE:
            localStorage.setItem("todos",JSON.stringify([
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:false,
                    active:true,
                    complete:false
                },...state.slice(parseInt(action.index) + 1)
            ]));
            return [
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:false,
                    active:true,
                    complete:false
                },...state.slice(parseInt(action.index) + 1)
            ];
        /*
         处理中转化为新的任务
         */
        case  ACTIVE_TO_NEW:
            localStorage.setItem("todos",JSON.stringify([
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:true,
                    active:false,
                    complete:false
                },...state.slice(parseInt(action.index)+1)
            ]));
            return [
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:true,
                    active:false,
                    complete:false
                },...state.slice(parseInt(action.index)+1)
            ];
        /*
         处理中转化为完成的任务
         */
        case ACTIVE_TO_COMPLETED:
            localStorage.setItem("todos",JSON.stringify([
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:false,
                    active:false,
                    complete:true
                },...state.slice(parseInt(action.index)+1)
            ]));
            return [
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:false,
                    active:false,
                    complete:true
                },...state.slice(parseInt(action.index)+1)
            ];
        /*
         完成的转化为处理中任务
         */
        case COMPLETED_TO_ACTIVE:
            localStorage.setItem("todos",JSON.stringify([
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:false,
                    active:true,
                    complete:false
                },...state.slice(parseInt(action.index)+1)
            ]));
            return [
                ...state.slice(0,action.index),{
                    todo:state[action.index].todo,
                    new:false,
                    active:true,
                    complete:false
                },...state.slice(parseInt(action.index)+1)
            ];
         /*
         删除选中的任务
          */
        case DELETE_TODO:
            localStorage.setItem("todos",JSON.stringify([
                ...state.slice(0,action.index),
                ...state.slice(parseInt(action.index)+1)
            ]));
            return [
                ...state.slice(0,action.index),
                ...state.slice(parseInt(action.index)+1)
            ];
        default:
            return state;
    }

}

const  reducer = combineReducers({
    todolist
});

export default reducer;