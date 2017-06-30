import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import CompletedTodos from '../Components/CompletedTodos';
import {CompletedToActive,deleteTodo} from '../Actions/Action';

class CompletedRoutes extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { dispatch, todolist} = this.props;
        return(
            <div className="base-list">
                <CompletedTodos todolist={todolist} onDel={index => dispatch(deleteTodo(index))} onCompletedToActive={index => dispatch(CompletedToActive(index))}/>
            </div>
        )
    }

}
CompletedRoutes.propTypes = {
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

export default connect(mapStateToProps)(CompletedRoutes);

