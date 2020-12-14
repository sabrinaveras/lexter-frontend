import React from "react";
import axios from "axios";

import * as Styled from "./book-insert.styles";

class BookInsertPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            author: "",
            creating: false,
            errors: false
        }
    }

    insertBook(title, author){

        axios.post("https://lexter-backend.herokuapp.com/api/v1/books", {title, author})
            .then(response => { return response.data })
            .then( () => this.setState({creating: true}))
            .catch(error => this.setState({error, creating: false}))
    }

    handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value })
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.insertBook(this.state.title, this.state.author);

        alert("Book created");

        event.target.reset();
    }

    render() {

        return(
            <Styled.FromInsert onSubmit={this.handleSubmit}>
                <Styled.CardBook>
                    <Styled.Box backgroundBlack>
                        <h6>title</h6>
                        <input type={"text"} name={"title"} onChange={this.handleChange} required={true}/>
                    </Styled.Box>

                    <Styled.Box>
                        <h6>author</h6>
                        <input type={"text"} name={"author"} onChange={this.handleChange} required={true}/>
                    </Styled.Box>

                    <Styled.Button type="reset" reset>Clear</Styled.Button>
                    <Styled.Button type="submit">Send</Styled.Button>

                </Styled.CardBook>
            </Styled.FromInsert>
        )
    }

}

export default BookInsertPage