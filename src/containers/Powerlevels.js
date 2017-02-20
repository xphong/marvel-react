import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PowerlevelsActions from '../actions/PowerlevelsActions';
import Spinner from '../components/ui/Spinner';
import PowerlevelsTable from '../components/powerlevels/PowerlevelsTable';

class Powerlevels extends Component {
  componentDidMount() {
    this.props.actions.fetchPowerlevels();
  }

  render() {
    const {powerlevels, actions} = this.props;
    
    return (
      <div>
        {powerlevels.isLoading ? <Spinner /> : <PowerlevelsTable powerlevels={powerlevels} ></PowerlevelsTable>}
      </div>
    );
  }
}

Powerlevels.propTypes = {
  powerlevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    powerlevels: state.powerlevels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PowerlevelsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Powerlevels);
