import getters from "@/store/getters";

const state = {
  players: [
    { nom: "adel", data: { age: 12, height: 165, weight: 70 } },
    { nom: "adel", data: { age: 12, height: 165, weight: 70 } },
    { nom: "adel", data: { age: 12, height: 165, weight: 70 } },
  ],
  showModal:true,
  player:{ nom: "adel", data: { age: 12, height: 165, weight: 70 } }
};
test('"players" retourne "state.players" ', () => {
  expect(getters.players(state)).toBe(state.players);
});
test('"showModal" retourne "state.showModal" ', () => {
    expect(getters.showModal(state)).toBe(state.showModal);
  });
  test('"player" retourne "state.player" ', () => {
    expect(getters.player(state)).toBe(state.player);
  });

