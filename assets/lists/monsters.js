module.exports = monsters = [
  {
    CR: 0,
    monsters: [
      {
        name: "homonoculus",
        AC: 13,
        HP: 5,
        STR: -3,
        DEX: 2,
        CON: 0,
        INT: 0,
        WIS: 0,
        CHA: -2,
        hit: 4,
        damage: 1
      },
      {
        name: "weasel",
        AC: 13,
        HP: 1,
        STR: -4,
        DEX: 3,
        CON: -1,
        INT: -4,
        WIS: 1,
        CHA: -4,
        hit: 5,
        damage: 1
      }
    ]
  },
  {
    CR: 0.125,
    monsters: [
      {
        name: "giant crab",
        AC: 15,
        HP: 13,
        STR: 1,
        DEX: 2,
        CON: 0,
        INT: -5,
        WIS: -1,
        CHA: -4,
        hit: 3,
        damage: "1d6+1"
      },
      {
        name: "camel",
        AC: 9,
        HP: 15,
        STR: 3,
        DEX: -1,
        CON: 2,
        INT: -4,
        WIS: -1,
        CHA: -3,
        hit: 5,
        damage: "1d4"
      }
    ]
  },
  {
    CR: 0.25,
    monsters: [
      {
        name: "swarm of rats",
        AC: 10,
        HP: 24,
        STR: -1,
        DEX: 0,
        CON: -1,
        INT: -4,
        WIS: 0,
        CHA: -4,
        hit: 2,
        damage: "2d6"
      },
      {
        name: "flying sword",
        AC: 17,
        HP: 17,
        STR: 1,
        DEX: 2,
        CON: 0,
        INT: -5,
        WIS: -3,
        CHA: -5,
        hit: 3,
        damage: "1d8+1"
      }
    ]
  }
];
