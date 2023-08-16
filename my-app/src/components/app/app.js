import React from "react";

import Header from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true},
        {label: 'Going to learn HTML', important: false},
        {label: 'Going to learn JS', important: false}
    ]

    return (
        <div className="app">
            <Header/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;