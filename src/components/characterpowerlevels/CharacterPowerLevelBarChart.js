import React, { Component, PropTypes } from 'react';

import { Bar as BarChart, defaults as ChartDefaults } from 'react-chartjs-2';

export default class CharacterPowerLevelBarChart extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const {characterChartData} = this.props;

    ChartDefaults.global.legend.display = false;

    return (
      <BarChart 
          data={characterChartData}
      />
    );
  }
}

CharacterPowerLevelBarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
