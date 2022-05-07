
import axios from 'axios'


export const actions = {
  async getPlayers({ commit }) {
    try {
      const response = await axios.get('https://data.latelier.co/training/tennis_stats/headtohead.json');
      
      commit('setPlayers', response.data.players);
    } catch (error) {
      console.log(error)
    }
  },

};
