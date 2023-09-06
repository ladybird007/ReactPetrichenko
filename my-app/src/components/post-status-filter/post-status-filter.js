import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

import "./post-status-filter.css";

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <Button key={name} variant="outline-info">{label}</Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
                <Button variant="outline-info">All</Button>
                <Button variant="outline-secondary">Liked</Button>  
            </div>
        )
    }
}