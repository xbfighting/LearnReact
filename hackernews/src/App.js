import React, {Component} from 'react';
import './App.css';

const list = [
  {
    title: 'React.',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke.',
    num_comments: 3,
    points: 4,
    objectID: 0
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list
    };

    // React 的官方文档中坚持在构造函数中绑定类方法
    this.onDismiss = this
      .onDismiss
      .bind(this);
  }

  onClickMe = (obj) => {
    console.log("onClickMe" + obj);
  }

  onDismiss(id) {
    const updateList = this
      .state
      .list
      .filter(item => item.objectID !== id);
    this.setState({list: updateList});
  }

  render() {
    const helloWorld = "Welcome to the Road to learn React";
    return (
      <div className="App">
        {this
          .state
          .list
          .map(item => {
            return (
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                  <button onClick= {()=> this.onDismiss(item.objectID)} type="button">
                    Dismiss
                  </button>
                  < button onClick= {() => this.onClickMe(item.objectID)} type="button">
                    ClickMe
                  </button>
                </span>
              </div>
            );
          })
}
      </div>
    );
  }
}

export default App;
