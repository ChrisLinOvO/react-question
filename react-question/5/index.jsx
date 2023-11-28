import React from 'react';
import ReactDOM from 'react-dom';

class Count extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.handleAddCount = this.handleAddCount.bind(this);
    }
  
    handleAddCount() {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
      this.setState((prevState) => ({ count: prevState.count + 1 }));
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.count}</h2>
          <button onClick={this.handleAddCount}>Add</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Count />, document.getElementById('root'));
  