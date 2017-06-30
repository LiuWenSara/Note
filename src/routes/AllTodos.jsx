import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import NewTodos from '../Components/NewTodos';
import ActiveTodos from '../Components/ActiveTodos';
import CompletedTodos from '../Components/CompletedTodos';
import {NewToActive, ActiveToNew, ActiveToCompleted, CompletedToActive,deleteTodo} from '../Actions/Action';

class AllTodosRoutes extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { dispatch, todolist} = this.props;
        return(
            <div className="base-list">
                <NewTodos todolist={todolist} onDel={index => dispatch(deleteTodo(index))} onNewToActive={index => dispatch(NewToActive(index))}/>
                <ActiveTodos todolist={todolist} onDel={index => dispatch(deleteTodo(index))} onActiveToNew={index => dispatch(ActiveToNew(index))} onActiveToCompleted={index => dispatch(ActiveToCompleted(index))}/>
                <CompletedTodos todolist={todolist} onDel={index => dispatch(deleteTodo(index))}  onCompletedToActive={index => dispatch(CompletedToActive(index))}/>
            </div>
        )
    }

}
AllTodosRoutes.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            new: PropTypes.bool.isRequired,
            active: PropTypes.bool.isRequired,
            complete: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
}

const mapStateToProps = (state) => {
    return {todolist:state.todolist};
}

export default connect(mapStateToProps)(AllTodosRoutes);


