import React ,{Component,PropTypes} from "react";
import {findDOMNode} from "react-dom";
import {Input,Button} from  "antd";

/*
 Header 组件
 */

class Header extends Component{
    constructor(props){
        super(props);//super()是继承了整个类的一个引用
        //这里state表达的是用户输入是否恰当的提示词的状态
        this.state = {
            show:false,//默认状态提示词不显示
            alarmText:""//提示词内容初始化为空
        }
    }
    /*
     定义鼠标事件添加事项
     */
    handleClick(e) {
        e.preventDefault();
        const inputNode = findDOMNode(this.refs.newTodo);//获取到真实DOM节点
        const text = inputNode.value.trim();

        if(text.length > 20){
            this.setState({show: true});
            this.setState({alarmText:"请输入少于二十个字"});
        }else if(text == ""){
            this.setState({show: true});
            this.setState({alarmText:"请不要输入空字符"});
        }else {
            this.props.onAdd(text);
            this.setState({show: false});
        }
        inputNode.value = "";
    }
    render(){
        return (
            <div className="header clearfix">
                <div className="left">
                    随手记
                </div>
                <div className="right">
                    <Input placeholder="需要做什么吗" ref="newTodo"/>
                    <Button type="submit" onClick = {e => this.handleClick(e)}>添加</Button>
                    <div className="alarm" style = {{display:this.state.show? "inline-block" : "none"}}>
                        {this.state.alarmText}
                    </div>
                </div>
            </div>
        )
    }
}
Header.propTypes = {
    onAdd: PropTypes.func.isRequired,
};
export default Header;