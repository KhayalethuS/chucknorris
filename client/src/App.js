import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './chuck.png';
import Categories from './components/Categories';
import RandomJokes from './components/RandomJokes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <br/>
        <div className="container">
          <img
          src={logo}
          alt="Chuck"
          style={{ width:150, display: 'block', margin: 'auto' }}
          />
          <h1 className="header text-center">Lets crack some jokes</h1>
          {/* <Categories/> */}
          <Route exact path="/" component={Categories}/>
          <Route exact path="/RandomJokes/:category" component={RandomJokes}/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
