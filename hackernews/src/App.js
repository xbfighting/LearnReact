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

const isSearched = searchTerm => item => item
  .title
  .toLowerCase()
  .includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ''
    };

    // React 的官方文档中坚持在构造函数中绑定类方法
    this.onDismiss = this
      .onDismiss
      .bind(this);
    this.onSearchChange = this
      .onSearchChange
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

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});

    // 这里输出的是上一次的值？？
    console.log(this.state.searchTerm);
  }

  render() {
    const {searchTerm, list} = this.state;
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss}/>
      </div>
    );
  }
}

const Search = ({value, onChange, children}) => {
  return (
    <form>
      {children}
      <input type="text" value={value} onChange={onChange}/>
    </form>
  );
}

const Table = ({list, pattern, onDismiss}) => {
  return (
    <div>
      {list
        .filter(isSearched(pattern))
        .map(item => <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            < Button onClick= { () => onDismiss(item.objectID) }>
              Dismiss
            </Button>
          </span>
        </div>)}
    </div>
  );
}

const Button = ({onClick,className = '',children}) => (
  <button className={className} onClick={onClick} type="button">
    {children}
  </button>
);

export default App;
