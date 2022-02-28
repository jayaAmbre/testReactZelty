import React, { Component } from 'react';
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroll-component';
import FilmItemComponent from "./FilmItemComponent";
import {Container} from "react-bootstrap";

class FilmListComponent extends Component {
    componentDidMount() {
        const { getFilmList } = this.props;
        getFilmList();
    }

    render () {
        const { filmList } = this.props;
        const list = (filmList || []).sort(function(a,b){
            return new moment(b.releaseDate).format('YYYYMMDD') - new moment(a.releaseDate).format('YYYYMMDD');
        });
        return (
            <Container>
                <div
                    id="scrollableDiv"
                    style={{
                        height: 1000,
                        overflow: 'auto',
                        display: 'list-item',
                    }}
                >
                <InfiniteScroll
                    dataLength={list.length}
                    //next={getFilmList}
                    endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Fin de la liste</b>
                    </p>
                }>
                         {list.map(film => <FilmItemComponent key={film.title} film={film} />)}
                </InfiniteScroll>
                </div>
            </Container>
        )
    }
}

export default FilmListComponent;
