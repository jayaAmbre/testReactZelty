import React, { Component } from 'react';
import { Button, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class FilmDetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.location.state.isOpen,
            isFavorite: props.location.state.isFavorite,
        };
    }

    handleClick() {
        this.setState({ isOpen: false });

    }

    handleFavorite() {
        const { isFavorite } = this.state;
        this.setState({ isFavorite: !isFavorite });
    }

    render () {
        const { film } = this.props.location.state;
        const { isFavorite, isOpen } = this.state;
        const starColour = isFavorite ? 'favorite-star-character w-25 text-warning' :
            'favorite-star-character w-25 text-muted';

        if(!isOpen){
            return <Redirect
                to={{
                    pathname: '/',
                    state: {
                        filmId: film.id,
                        isFavorite: isFavorite
                    },
                }}/>
        }
        return (
            <Container>
                <div show={isOpen} onHide={()=>this.handleClick()}>
                    <div>
                        <h1>{film.title}</h1>
                        <span className={starColour}
                              onClick={()=>this.handleFavorite(film.id)}>&#x2605;</span>
                    </div>
                    <div>{film.overview}</div>
                    <div>
                        <Button variant="secondary" onClick={()=>this.handleClick()}>
                            Retour
                        </Button>
                    </div>
                </div>
            </Container>
        )
    }
}

export default FilmDetailComponent;
