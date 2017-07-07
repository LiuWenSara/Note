import React from 'react';
import { Link } from 'react-router';

class BaseLink extends React.Component{
    render() {
        return(
            <Link {...this.props}  activeClassName="active" onlyActiveOnIndex={true}/>//避免在根路由，activeStyle和activeClassName会失效
        );
    }
}

export default BaseLink;