import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class Photo extends React.Component {
    render() {
        const { post, i, comments } = this.props;

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>

                    <ReactCSSTransitionGroup transitionName="like" transitionLeaveTimeout={500} transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">
                            {post.likes}
                        </span>
                    </ReactCSSTransitionGroup>
                </div>

                <fig-caption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes">&hearts; {post.likes}</button>
                    </div>
                </fig-caption>
            </figure>
        );
    }
}
