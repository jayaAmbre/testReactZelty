import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { Container, Card } from 'react-bootstrap';

class FilmItemComponent extends Component {
    constructor(props) {
        super(props);
        const star = ((props.location || {}).state || {}).isFavorite;

        this.state = {
            isOpen: false,
            isFavorite: star ? star : false,
        };
    }

    handleClick() {
        const { isOpen } = this.state;
        this.setState({isOpen: !isOpen});
    }

    setDateToDisplay(film) {
        const currentYear = moment().year();
        const yearDate = moment(film.releaseDate).format('YYYY');
        let dateToDisplay = moment(film.releaseDate).format("DD/MM/YYYY");
        if (currentYear === parseInt(yearDate)) {
            const diff = moment.duration(moment(film.releaseDate).diff(moment()));
            const days = Math.sqrt(Math.pow(Math.trunc(diff.asDays()), 2));
            dateToDisplay = moment(film.releaseDate).isAfter(moment())
                ? 'Dans ' + days + ' jours' : 'Il y a ' + days + ' jours';
            if (days === 0) {
                dateToDisplay = 'Aujourd\'hui';
            }
        }
        return dateToDisplay;
    }

    render () {
        const { film } = this.props;
        const { isOpen, isFavorite } = this.state;
        const dateToDisplay = this.setDateToDisplay(film);

        if(isOpen){
            return <Redirect
                to={{
                pathname: `/movie/${film.id}`,
                state: {
                    film: film,
                    isOpen: isOpen,
                    isFavorite: isFavorite
                },
            }}/>
        }
        return (
            <Container className="mt-2">
            <Card style={{ width: '20rem' }}>
                <Card.Body onClick={()=> this.handleClick()}>
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Text>
                        <Card.Img src={film.image} alt={film.title} className="img-thumbnail" width="30%"/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{dateToDisplay}</Card.Footer>
            </Card>

            </Container>
        )
    }

}

export default FilmItemComponent;
