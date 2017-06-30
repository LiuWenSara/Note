import React from 'react';
import { Link } from 'react-router';

class BaseLink extends React.Component{
    render() {
        return(
            <Link
                {...this.props}
                activeClassName="active"
                onlyActiveOnIndex={true}
            />
        );
    }
}

export default BaseLink;