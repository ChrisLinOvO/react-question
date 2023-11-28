import React from 'react';

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  // 最終只會加1
  // 所有的 setState 都是基於同一個起始值。React 會將它們合併為一個更新，因此只有最後一個 setState 會生效。
  // handleAddCount(){
  //   this.setState({ count: this.state.count + 1 });
  //   this.setState({ count: this.state.count + 1 });
  //   this.setState({ count: this.state.count + 1 });
  // }

  // 最終會加3
  // 每個 setState 都接收一個回調函數，並使用前一個狀態 (prevState) 來計算新的狀態。這樣寫法可以確保每個 setState 的更新都是基於前一次的結果。
  handleAddCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  // 但如果一次要加3也可以這樣寫，會更好
  // handleAddCount() {
  //   this.setState((prevState) => ({ count: prevState.count + 3 }));
  // }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

export default Count;
