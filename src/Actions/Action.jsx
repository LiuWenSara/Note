/*
 * action 类型
 */


export const ADD_TODO = "ADD_TODO";
export const NEW_TO_ACTIVE = "NEW_TO_ACTIVE";
export const ACTIVE_TO_NEW = "ACTIVE_TO_NEW";
export const ACTIVE_TO_COMPLETED = "ACTIVE_TO_COMPLETED";
export const COMPLETED_TO_ACTIVE = "COMPLETED_TO_ACTIVE";
export const DELETE_TODO = "DELETE_TODO";
/*
 * action 创建函数
 */

/*
添加事项函数
text为添加的事项
 */


export const addTodo = (text) => {
    return (dispatch, getState) => {
        // 测试异步流
        const state = getState();
        localStorage.setItem('todos',
            JSON.stringify([
                ...state.todolist, {
                    todo: text,
                    new: true,
                    active: false,
                    complete: false
                }
            ])
        );
        setTimeout(() => {
            dispatch({
                type: ADD_TODO,
                text,
            });
        }, 2);
    };
};
/*
改变新事项事项状态为正在做的函数
index为改变状态事项的下标
*/
export function NewToActive(index){
    return {
        type: "NEW_TO_ACTIVE",
        index
    }
}
/*
 改变正在做事项状态为新事项的函数
 index为改变状态事项的下标
 */
export function ActiveToNew(index){
    return {
        type: "ACTIVE_TO_NEW",
        index
    }
}
/*
 改变正在做事项状态为完成的函数
 index为改变状态事项的下标
 */
export function ActiveToCompleted(index){
    return {
        type: "ACTIVE_TO_COMPLETED",
        index
    }
}
/*
 改变完成事项状态为正在做的函数
 index为改变状态事项的下标
 */
export function CompletedToActive(index){
    return {
        type: "COMPLETED_TO_ACTIVE",
        index
    }
}
/*
 删除事项的函数
 index为要删除的事项的下标
 */
export function deleteTodo(index){
    return {
        type: "DELETE_TODO",
        index
    }
}
