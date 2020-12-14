import React from "react";
import axios from "axios";

import * as Styled from "./book-list.styles";

class BookListPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            isLoading: true,
            errors: null
        }
    }

    getBooks(){

        axios.get("https://lexter-backend.herokuapp.com/api/v1/books")
            .then(response =>
                response.data.body.map(book => ({
                    title: `${book.title}`,
                    author: `${book.author}`
                }))
            ).then(books => {
                this.setState({books, isLoading: false});
        }).catch(error => this.setState({error, isLoading: false}))
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {

        const { isLoading, books } = this.state;

        return(
            <Styled.HomePage>

                {
                    !isLoading ? (
                        books.map((book, index) => {
                            const { title, author} = book

                            return (
                                <Styled.Card key={index}>
                                    <Styled.Title>
                                        <h6>title</h6>
                                        <h2>{title}</h2>
                                    </Styled.Title>
                                    <Styled.Author>
                                        <h6>author</h6>
                                        <h2>{author}</h2>
                                    </Styled.Author>
                                </Styled.Card>
                            )
                        })
                    ) : (<p>Loading...</p>)
                }

            </Styled.HomePage>
        )
    }

}

export default BookListPage