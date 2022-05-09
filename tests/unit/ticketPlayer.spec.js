import { shallowMount } from '@vue/test-utils'
import TicketPlayer from '@/components/TicketPlayer.vue'

let propsForTest={
    "id": 52,
    "firstname": "Novak",
    "lastname": "Djokovic",
    "shortname": "N.DJO",
    "sex": "M",
    "country": {
      "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
      "code": "SRB"
    },
    "picture": "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
    "data": {
      "rank": 2,
      "points": 2542,
      "weight": 80000,
      "height": 188,
      "age": 31,
      "last": [1, 1, 1, 1, 1]
    }
  }
describe('TicketPlayer', () => {
  it('renders a div',  () => {
    const wrapper = shallowMount(TicketPlayer, {
      propsData: {
        player: propsForTest
      }
    })
    expect(wrapper.props().player).toEqual(propsForTest)
  })
})