import React,{Component,PropTypes} from "react"
import {Row,Col,Button} from "antd";
class ActiveTodos extends Component {
    constructor(props) {
        super(props);
        this.handleActiveToNew = this.handleActiveToNew.bind(this);
        this.handleActiveToCompleted = this.handleActiveToCompleted.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleActiveToNew(e){
        const changeIndex  = e.target.getAttribute("data-key");
        this.props.onActiveToNew(changeIndex);
    }
    handleActiveToCompleted(e){
        const changeIndex  = e.target.getAttribute("data-key");
        this.props.onActiveToCompleted(changeIndex);
    }
    handleDel(e){
        const delIndex  = e.target.getAttribute("data-key");
        this.props.onDel(delIndex);
    }
    render(){
        return(
            <div className="active">
                <ul>
                    {
                        this.props.todolist.map((item,i) => {
                            if (item.active) {
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
ActiveTodos.propTypes = {
    onActiveToNew:PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired,
    onActiveToCompleted:PropTypes.func.isRequired
};
export default ActiveTodos;