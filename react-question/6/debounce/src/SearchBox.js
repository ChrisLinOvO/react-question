import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.delayedHandleOnChangeTimeout = null;
  }

  componentWillUnmount() {
    // 在組件卸載時清除定時器，以避免記憶體洩漏
    clearTimeout(this.delayedHandleOnChangeTimeout);
  }

  makeAjaxCall = async (value) => {
    try {
      // 使用 fetch 進行 AJAX 調用
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      
      if (!response.ok) {
        throw new Error(`HTTP 錯誤！狀態碼：${response.status}`);
      }

      const data = await response.json();
      const filteredData = data.filter((post) => post.title.includes(value));
      console.log('過濾後的文章：', filteredData);
      // 根據需要處理過濾後的數據
    } catch (error) {
      console.error('獲取數據時出錯：', error);
    }
  };

  // 防抖函數
  debounce = (func, delay) => {
    return function() {
      const context = this;
      const args = arguments;

      clearTimeout(context.delayedHandleOnChangeTimeout);

      context.delayedHandleOnChangeTimeout = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  };

  delayedHandleOnChange = this.debounce(async (value) => {
    console.log('用戶輸入完成，1.5秒後的值：', value);
    await this.makeAjaxCall(value);
  }, 1500);

  handleOnChange = (event) => {
    const value = event.target.value;

    this.setState({ searchValue: value });

    this.delayedHandleOnChange(value);
  };

  render() {
    const { searchValue } = this.state;

    return <input type="search" name="p" value={searchValue} onChange={this.handleOnChange} />;
  }
}

export default SearchBox;
