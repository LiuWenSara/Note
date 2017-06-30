import React,{Component,PropTypes} from "react"
import {Row,Col,Button} from "antd";

class NewTodos extends Component {
    constructor(props) {
        super(props);
        this.handleNewToActive = this.handleNewToActive.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }
    handleNewToActive(e){
       const changeIndex  = e.target.getAttribute("data-key");
       this.props.onNewToActive(changeIndex);
    }
    handleDel(e){
        const delIndex  = e.target.getAttribute("data-key");
        this.props.onDel(delIndex);
    }
    render(){
        return(
            <div className="new">
                <ul>
                    {
                        this.props.todolist.map((item,i) => {
                            if (item.new) {
                                return (
                                    <li key={i} style={{opacity: '1'}}>
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <input type="checkbox" checked={!item.new} onChange={this.handleNewToActive} data-key={i}/>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <p>{item.todo}</p>
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
NewTodos.propTypes = {
    onNewToActive:PropTypes.func.isRequired,
    onDel:PropTypes.func.isRequired
};
export default NewTodos;