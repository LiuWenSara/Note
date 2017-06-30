import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import NewTodos from '../Components/NewTodos';
import {NewToActive,deleteTodo} from '../Actions/Action';

class NewRoutes extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        const { dispatch, todolist} = this.props;
        return(
            <div className="base-list">
                <NewTodos todolist={todolist} onDel={index => dispatch(deleteTodo(index))} onNewToActive={index => dispatch(NewToActive(index))}/>
            </div>
        )
    }

}
NewRoutes.propTypes = {
    todolist: PropTypes.arrayOf(
        PropTypes.shape({
            todo: PropTypes.string.isRequired,
            new: PropTypes.bool.isRequired,
            active: PropTypes.bool.isRequired,
            complete: PropTypes.bool.isRequired,
        }).isRequired).isRequired,
}

const mapStateToProps = (state) => {
    return { todolist:state.todolist };
};

export default connect(mapStateToProps)(NewRoutes);

