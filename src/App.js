import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import BookList from './BookList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Book List" />
        <Content>
          <BookList />
        </Content>
      </div>
    );
  }
}

export default App;
