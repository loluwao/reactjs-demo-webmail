import React from "react";

class SearchBox extends React.Component {
    render() {
        return (
            <input type="text" id="search-box" placeholder="Search mail" autoComplete="off"/>
        );
    }
}

export default SearchBox;