import React, { Component } from 'react';
import GameItem from './GameItem'
import {connect} from 'react-redux'
import { getGames, setUser } from '../actions/actions.js';



class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
      
    componentDidMount() {
        fetch('https://gamezio.web.app/game')
          .then(res => res.json())
            .then(res => {
                this.props.getGames(res);
                if (localStorage.getItem('gamesio')) {
                    let newUser = this.props.user;
                    newUser.games = res.filter(elem => elem.postedBy === this.props.user._id);
                    this.props.setUser(newUser);
                    localStorage.setItem('gamesio', JSON.stringify(newUser));
                }
            })
    }
    render() {
        return (
            <div>
                {this.props.Games.map((elem, i) => <GameItem game={elem} key={i} newKey={i}/>)}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        Games: state.Games,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGames: (z) => { dispatch(getGames(z)) },
        setUser: (z) => { dispatch(setUser(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
