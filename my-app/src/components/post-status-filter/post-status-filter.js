import React from "react";
import Button from 'react-bootstrap/Button';

import "./post-status-filter.css";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button variant="outline-info">All</Button>
            <Button variant="outline-secondary">Liked</Button>  
        </div>
    )
}

export default PostStatusFilter;