import React from 'react';
import Main from './components/Main';
import Store from './components/Store';
import Contact from './components/Contact';
import Nav from './components/Nav1';
import Gallery from './components/Gallery';
import WebDev from './components/WebDev';
import Posts from './components/Posts'
import Footer from './components/Footer'
import Musician from './components/Musician'
import Discography from './components/Discography'
import Media from './components/Media'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
    <Nav/>
    <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="/store" component={Store}/>
    <Route path='/photos' component={Gallery}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/webdev" component={WebDev}/>
    <Route path="/posts" component={Posts}/>
    <Route path="/musician" component={Musician}/>
    <Route path="/discography" component={Discography}/>
    <Route path="/media" component={Media}/>

    </Switch>
    <Footer/>

    </div>
    </Router>
  );
}

export default App;
