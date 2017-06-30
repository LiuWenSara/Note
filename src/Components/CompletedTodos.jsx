import React,{Component,PropTypes} from "react"
import {Row,Col,Button} from "antd";
class CompletedTodos extends Component {
    constructor(props) {
        super(props);
        this.handleCompletedToActive = this.handleCompletedToActive.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleCompletedToActive(e){
        const changeIndex = e.target.getAttribute("data-key");
        this.props.onCompletedToActive(changeIndex);
    }
    handleDel(e){
        const delIndex  = e.target.getAttribute("data-key");
        this.props.onDel(delIndex);
    }
    render(){
        return(
            <div className="complete">
                <ul>
                    {
                        this.props.todolist.map((item,i) => {
                            if (item.complete) {
                                return (
                                    <li key={i} style={{opacity: '0.3',}}>
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <input type="checkbox" checked={item.complete} data-key={i} disabled/>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <p data-key={i} onClick={this.handleCompletedToActive}>{item.todo}</p>
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
CompletedTodos.propTypes = {
    onCompletedToActive:PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired,
};
export default CompletedTodos;