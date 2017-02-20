import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { ENDPOINT } from '../constants/AppConstants';

function requestPowerlevels() {
  return {
    type: types.REQUEST_POWERLEVELS
  };
}

function receivePowerlevels(data) {
  return {
    type: types.RECEIVE_POWERLEVELS,
    payload: {
      data
    }
  };
}

function receiveError(data) {
  return {
    type: types.RECEIVE_POWERLEVELS_ERROR,
    payload: {
      data
    }
  };
}

function createPowerLevelData(data) {
  let powerLevel = {
    name: '',
    intelligence: '',
    strength: '',
    speed: '',
    durability: '',
    energyProjection: '',
    fightingAbility: ''
  };
  
  powerLevel.name = data.Name;
  powerLevel.intelligence = data.Intelligence;
  powerLevel.strength = data.Strength;
  powerLevel.speed = data.Speed;
  powerLevel.durability = data.Durability;
  powerLevel.energyProjection = data.Energy_Projection;
  powerLevel.fightingAbility = data.Fighting_Ability;
  
  return powerLevel;
}

export function fetchPowerlevels() {
  const url = `${ENDPOINT}/powerlevels`;
  const opts = {
    url: url,
    timeout: 10000,
    method: 'get',
    responseType: 'json'
  };
  
  return dispatch => {
    dispatch(requestPowerlevels());
    return axios(opts)
    .then(function(response) {
      let data = [];
      
      if (response.data) {
        data = response.data.map(createPowerLevelData);
        
        dispatch(receivePowerlevels(data));
      }
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
