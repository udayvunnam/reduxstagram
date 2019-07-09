import React from 'react';
import { Link } from 'react-router';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">InstaGram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}
