import React, { Component, PropTypes } from 'react';

import { Radar as RadarChart, defaults as ChartDefaults } from 'react-chartjs-2';

export default class CharacterPowerLevelRadarChart extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterChartData} = this.props;

    ChartDefaults.global.legend.display = false;

    return (
      <RadarChart 
          data={characterChartData}
      />
    );
  }
}

CharacterPowerLevelRadarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
