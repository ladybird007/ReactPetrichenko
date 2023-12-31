import React from "react";

// import "./header.css";
import styled from "styled-components";

const AppHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const Header = ({likedPosts, allPosts}) => {
    return (
        <AppHeader as='header'>
            <h1>Anastasiia</h1>
            <h2>{allPosts} posts, liked {likedPosts}</h2>
        </AppHeader>
    )
}

export default Header;