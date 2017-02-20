import React, { Component, PropTypes } from 'react';

export default class PowerlevelsTable extends Component {
  constructor(props){
    super(props);
  }

  renderPowerLevelRow(powerlevel, index) {
    return (
      <tr key={powerlevel.name}>
        <td>{powerlevel.name}</td>
        <td>{powerlevel.intelligence}</td>
        <td>{powerlevel.strength}</td>
        <td>{powerlevel.speed}</td>
        <td>{powerlevel.durability}</td>
        <td>{powerlevel.energyProjection}</td>
        <td>{powerlevel.fightingAbility}</td>
      </tr>
    );
  }

  render() {
    const {data} = this.props.powerlevels;

    return (
      <table className='ui table'>
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Intelligence</th>
            <th>Strength</th>
            <th>Speed</th>
            <th>Durability</th>
            <th>Energy Projection</th>
            <th>Fighting Ability</th>
          </tr>
        </thead>
        <tbody>
          {data.map(this.renderPowerLevelRow)}
        </tbody>
      </table>
    );
  }
}

PowerlevelsTable.propTypes = {
  powerlevels: PropTypes.object.isRequired
};