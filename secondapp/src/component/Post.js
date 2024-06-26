import React from 'react';
import {Link} from 'react-router-dom';
const Post = () => {
    return (
        <div className="panel panel-success">
            <div className="panel-heading">
                <h3>Post</h3>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <p>Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
                <h2> JavaScript</h2>
                <Link to="/post/JavaScript?page=1"> Details</Link>
                <h2> React</h2>
                <Link to="/post/React?page=2"> Details</Link>
                <h2> NodeJS</h2>
                <Link to="/post/NodeJS?page=3"> Details</Link>
            </div>
        </div>

    )
}

export default Post;