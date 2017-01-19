import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='fadeIn-page-animation'>
        <h1>About</h1>
        <h4>Marvel App</h4>
        <ul>
          <li>Searches the Marvel database for the characters, power levels</li>
          <li><a href='http://marvel.com' target='_blank'>Data provided by Marvel. © {new Date().getFullYear()} Marvel</a></li>
        </ul>
      </div>
    );
  }
}
