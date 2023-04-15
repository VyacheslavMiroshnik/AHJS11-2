export default class Team {
  constructor(...heroes) {
    this.players = heroes;
  }

  * [Symbol.iterator]() {
    yield* this.players;
  }
}
