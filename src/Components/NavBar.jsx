import React,{
    Component,Proptypes
} from "react";
import BaseLink from './BaseLink';
import {Menu} from "antd";

class NavBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="nav-bar">
                <Menu
                    style={{ width: 240 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                >
                    <Menu.Item key="1">
                        <BaseLink to="/">
                            全部
                            <span>{this.props.allNum}</span>
                        </BaseLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <BaseLink to="/new">
                            未进行
                            <span>{this.props.newNum}</span>
                        </BaseLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        < BaseLink to="/active">
                            进行中
                            <span>{this.props.activeNum}</span>
                        </BaseLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <BaseLink to="/completed">
                            已完成
                            <span>{this.props.completeNum}</span>
                        </BaseLink>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default NavBar;