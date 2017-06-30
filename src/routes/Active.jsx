import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import ActiveTodos from '../Components/ActiveTodos';
import {ActiveToNew, ActiveToCompleted,deleteTodo} from '../Actions/Action';

class ActiveRoutes extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { dispatch, todolist} = this.props;
        return(
            <div className="base-list">
                <ActiveTodos todolist={todolist} onDel={index => dispatch(deleteTodo(index))} onActiveToNew={index => dispatch(ActiveToNew(index))} onActiveToCompleted={index => dispatch(ActiveToCompleted(index))}/>
            </div>
        )
    }

}
ActiveRoutes.propTypes = {
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

export default connect(mapStateToProps)(ActiveRoutes);

