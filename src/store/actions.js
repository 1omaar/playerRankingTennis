import axios from 'axios'


 const actions = {
  async getPlayers({ commit }) {
    try {
      const response = await axios.get('https://data.latelier.co/training/tennis_stats/headtohead.json');
      
      commit('setPlayers', response.data.players);
    } catch (error) {
      error.response.data
    }
  },

};
export default actions ;
