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
                {this.props.children}/*表示组件的所有子节点，对应路由的嵌套组件*/
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
/*
 *一个函数，建立一个外部state对象到UI组件的关系映射，返回一个对象，里面每个健值对应一个映射；
 * 第一个参数一直是state，也可接受第二个参数代表容器组件的props对象。
 * 会订阅state，发生改边即更新结果；
 */
const mapStateToProps = (state) => {
    return {todolist: state.todolist};
};
/*
 *一个函数，建立UI组件到action的映射
 */
const mapDispatchToProps = (dispatch) => {
    return{
        addTodos:(text) => {
            dispatch(addTodo(text));
        },
    }
};
//使用connect生成容器组件；
export default connect(mapStateToProps, mapDispatchToProps)(App);