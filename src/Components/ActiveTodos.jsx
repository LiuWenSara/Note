import React,{Component,PropTypes} from "react"
import {Row,Col,Button} from "antd";
class ActiveTodos extends Component {
    /**
     * 设置state的初始值用constructor，并且如果接下来要用this.props需要声明设置super(props);
     */
    constructor(props) {
        super(props);
        this.handleActiveToNew = this.handleActiveToNew.bind(this);//用来绑定事件，在标签内部直接写赋值后的结果即可。eg.this.handleActiveToNew即可代替this.handleActiveToNew.bind(this);
        this.handleActiveToCompleted = this.handleActiveToCompleted.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    //定义状态变化的函数；
    handleActiveToNew(e){
        const changeIndex  = e.target.getAttribute("data-key");//由标签内部的data-key属性获取特定的index
        this.props.onActiveToNew(changeIndex);//传入组件容器的onActiveToNew的属性事件
    }
    handleActiveToCompleted(e){
        const changeIndex  = e.target.getAttribute("data-key");
        this.props.onActiveToCompleted(changeIndex);
    }
    //定义删除事件的函数
    handleDel(e){
        const delIndex  = e.target.getAttribute("data-key");
        this.props.onDel(delIndex);
    }
    render(){
        return(
            <div className="active">
                <ul>
                    {
                        this.props.todolist.map((item,i) => {//this.props.todolist是父组件传入的事件列表，.map来遍历列表，item 参数为列表中的一员，i为该item的index
                            if (item.active) {//筛选出正在进行的事件列表
                                return (
                                    <li key={i} style={{opacity: '1'}}>
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <input type="checkbox" checked={item.active} onChange={this.handleActiveToNew} data-key={i}/>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <p data-key={i} onClick={this.handleActiveToCompleted}>{item.todo}</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <Button onClick={this.handleDel} data-key={i}>删除</Button>
                                            </Col>
                                        </Row>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
//propTypes是用来验证组件属性是否符合要求
ActiveTodos.propTypes = {
    onActiveToNew:PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired,
    onActiveToCompleted:PropTypes.func.isRequired
};
export default ActiveTodos;