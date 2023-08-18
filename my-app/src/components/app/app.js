import React from "react";

import Header from "../header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding-left: 20px;
    padding-right: 20px; 
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: yellow;
`;

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'dddd'},
        {label: 'Going to learn HTML', important: false, id: 'qqqq'},
        {label: 'Going to learn JS', important: false, id: 'pppp'}
    ]

    return (
        <StyledAppBlock>
            <Header/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </StyledAppBlock>
    )
}

export default App;