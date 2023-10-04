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
            const {filter, onFilterSelect} = this.props;
            const active = filter === name,
                  activeClass = active ? 'primary' : 'outline-primary';

            return (
                <Button key={name} variant={activeClass} onClick={() => onFilterSelect(name)}>{label}</Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}