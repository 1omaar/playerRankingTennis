import { shallowMount,createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Vuex from 'Vuex'

const localVue=createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store({})

let player= { players: [
    { nom: "adel", data: { rank: 12, height: 165, weight: 70 } },
    { nom: "ones", data: { rank: 1, height: 165, weight: 70 } },
    { nom: "jack", data: { rank: 5, height: 165, weight: 70 } },
  ]}
  let sortedPlayer={ players: [
      { nom: "ones", data: { rank: 1, height: 165, weight: 70 } },
      { nom: "jack", data: { rank: 5, height: 165, weight: 70 } },
      { nom: "adel", data: { rank: 12, height: 165, weight: 70 } },
  ]}
describe("Home",()=>{
    it("restitue trie des joueurs", () => {
       const $store= {
           state:{
            player: { players: [
                { nom: "adel", data: { rank: 12, height: 165, weight: 70 } },
                { nom: "ones", data: { rank: 1, height: 165, weight: 70 } },
                { nom: "jack", data: { rank: 5, height: 165, weight: 70 } },
              ]}
           },
           getters:{
               players:(player)=>({})
           }
       }
        const wrapper =  shallowMount(Home,{
            mocks:{
                $store
            }
        });
          wrapper.vm.sortPlayers(player)
      expect(player).toBe(sortedPlayer)
      })
})