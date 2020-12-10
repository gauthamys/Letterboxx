import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import AuthProfile from './AuthProfile';
import Land from './Land';
import MoviesPage from './MoviesPage';
import NavBar from './NavBar';
import MovieInfo from './MovieInfo';
import AppSignup from './components/AppSignup';
import AppLogin from './components/AppLogin';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user'))[0] : null
        }
    }
    render(){
        return (
                <>
                    <Switch>
                        <Route path='/profile' component={()=><AuthProfile user={this.state.user} />}/>
                        <Route path='/movies' component={MoviesPage} />
                        <Route path='/movie/:id' render={ (props) => <MovieInfo {...props} user={this.state.user} /> } /> 
                        <Route path='/signup' component={AppSignup} />
                        <Route path='/login' component={()=> !this.state.user ? <AppLogin /> : <Redirect to='/profile' />} />
                        <Route path='/' component={Land} />
                    </Switch>
                    <NavBar user={this.state.user}/>
                </>
        )
    }
}

export default App;