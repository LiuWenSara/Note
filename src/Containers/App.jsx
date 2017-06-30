import React,{Component,PropTypes} from "react";
import {connect} from "react-redux";
import Header from "../Components/Header";
import Navbar from "../Components/NavBar";
import {addTodo} from "../Actions/Action";
import "./App.less";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        const {todolist, addTodos} = this.props;
        const AllNum = todolist.length;
        let numArr = [0, 0, 0]
        todolist.forEach((item) => {
            if (item.new) {
                numArr[0] += 1
            }else if(item.active) {
                numArr[1] += 1
            }else {
                numArr[2] += 1
            }
        });
        return (
            <div>
                <Header onAdd={text => addTodos(text)} todolist={todolist}/>
                <Navbar allNum={AllNum} newNum={numArr[0]} activeNum={numArr[1]} completeNum={numArr[2]}/>
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.shape({
        todo: PropTypes.string.isRequired,
        new: PropTypes.bool.isRequired,
        active: PropTypes.bool.isRequired,
        complete: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
};
const mapStateToProps = (state) => {
    return {todolist: state.todolist};
};
const mapDispatchToProps = (dispatch) => {
    return{
        addTodos:(text) => {
            dispatch(addTodo(text));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);