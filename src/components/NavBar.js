import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showMenu, showSearch, showSettings, showSign } from '../actions/actions.js';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    componentDidMount() {
        if (localStorage.getItem('gamesio')) {
            this.props.sign(1);
        }
    }
  handleMenu = () => {
    this.props.settings(0)
    if (this.props.showMenu) {
      this.props.menu(0);
    }
    else {
      this.props.menu(1);
    }
  }
  handleSearch = () => {
    if (this.props.showSearch) {
      this.props.search(0);
    }
    else {
      this.props.search(1);
    }
  }

  handleSettings=()=>{
    if (this.props.showSettings) {
        this.props.settings(0);
    }
    else {
        this.props.settings(1);
    }
  }

  render() {
    return (
      <div className="menu" >

        <input type="image" className="navitem" alt="" src="./media/rightarrow.png" onClick={this.handleMenu} style={{ display: this.props.showMenu ? "none" : "" }}></input>

        <nav id="img-logo" className="menu" style={{ display: this.props.showMenu ? "" : "none" }} >

          <input type="image" className="navitem" alt="" src="./media/leftarrow.png" onClick={this.handleMenu}></input>

          <Link to="/">
            <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
          </Link >

          <Link to="/signin">
            <input type="image" className="navitem" alt="SignIn" style={{ display: this.props.showSign ? "none" : "" }} src="./media/signin.png"></input>
          </Link>

          <Link to="/signup">
            <input type="image" className="navitem" alt="SignUp" style={{ display: this.props.showSign ? "none" : "" }} src="./media/signup.png"></input>
          </Link>

          <Link to="/addgame">
            <input type="image" className="navitem" alt="Add" style={{ display: this.props.showSign ? "" : "none" }} src="./media/addgame.png"></input>
          </Link>

          <Link to="/signout">
            <input type="image" className="navitem" alt="SignOut" style={{ display: this.props.showSign ? "" : "none" }} src="./media/signout.png"></input>
          </Link>

          <input type="image" className="navitem" alt="Settings" src="./media/cog.png" onClick={this.handleSettings}></input>
          
          <Link to="/towers">
          <input type="image" className="navitem" alt="Towers" src="./media/towers.png"></input>
          </Link>

          <input type="image" className="navitem" alt="Search" src="./media/search.png" onClick={this.handleSearch}></input>
          
          <input type="serach" className="settingsitem" style={{ display: this.props.showSearch ? "" : "none" }} ></input>

        </nav>

        <div className ='settings column' style={{ display: this.props.showSettings ? "" : "none" }}>
            
            <Link to="/colors">
            <button className ='settingsitem'>Colors</button>
            </Link>

            <Link to="/language">
            <button className ='settingsitem'>Language</button>
            </Link>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.showMenu,
    showSearch: state.showSearch,
    showSign: state.showSign,
    showSettings:state.showSettings
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    menu: (z) => { dispatch(showMenu(z)) },
    search: (z) => { dispatch(showSearch(z)) },
    settings: (z) => { dispatch(showSettings(z)) },
    sign: (z) => { dispatch(showSign(z)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);