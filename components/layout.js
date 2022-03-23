import React, { Component } from 'react';
import HeaderComponent from './header';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <HeaderComponent />
        {children}
      </div>
    );
  }
}

export default Layout;