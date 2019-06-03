const db = require("../models"),
  helpers = require("../helpers");

const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const rollDice = function(roll) {
  //5d20+10
  //[5, 20+10]
  let number = roll.split("d")[0];
  let die = roll.split("d")[1].split(/[+-]/)[0];
  let modifier = roll.split("d")[1].split(/[+-]/)[1] || 0;
  let total = 0;
  for (let i = 0; i < number; i++) {
    total += getRandomInt(die);
  }
  console.log(total);
  return total + modifier;
};

const statBonus = stat => {
  //cwchong is a goddddddddddddddd
  return Math.floor((stat - 10) / 2);
};

const setStat = () => {
  return statBonus(rollDice("3d6"));
};

module.exports = {
  getCount: (req, client, channel) => {
    db.Count.findOne({
      name: req
    })
      .then(dbModel => {
        client.say(
          channel,
          req.charAt(0).toUpperCase() + req.slice(1) + ": " + dbModel.total
        );
      })
      .catch(err => {
        console.log(err);
      });
  },

  getQuote: () => {},

  getUserCount: (client, channel) => {
    db.User.countDocuments()
      .then(res => {
        client.say(channel, "Users: " + res);
      })
      .catch(err => {
        console.log(err);
      });
  },

  postEncounter: (player, monster) => {
    db.User.findOne({
      name: player.toLowerCase()
    })
      .then(res => {
        let user = res;

        db.Encounter.find({ "player.name": res.name })
          .then(res => {
            console.log("Response from Encounters: " + res);
            if (res.length === 0) {
              console.log(player.name + "'s encounter not found - adding...");
              let encounter = new db.Encounter({
                player: user,
                monster: monster
              });
              encounter.save(err => {
                console.log(err);
              });
            } else {
              console.log(res.name + "'s encounter found!");
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  },

  postQuote: () => {},

  postUser: req => {
    db.User.find({ name: req.username })
      .then(res => {
        if (res.length === 0) {
          console.log(req + " not found - adding...");
          let user = new db.User({ name: req.username, sub: req.subscriber });
          user.save(err => {
            console.log(err);
          });
        } else {
          console.log(req.username + " found!");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  /////FIX THIS/////

  putClass: (username, classData) => {
    console.log(setStat());
    request = [
      {
        updateOne: {
          filter: { name: username },
          update: {
            $set: {
              stats: {
                AC: 10,
                HP: 8,
                STR: setStat(),
                DEX: setStat(),
                CON: setStat(),
                INT: setStat(),
                WIS: setStat(),
                CHA: setStat(),
                hit: 0,
                damage: classData.hit,
                save: classData.save
              }
            }
          }
        }
      }
    ];

    if (request.length > 0) {
      db.User.bulkWrite(request);
    }
  },

  putCount: req => {
    db.Count.updateOne({ name: req }, { $inc: { total: 1 } })
      .then()
      .catch(err => {
        console.log(err);
      });
  },

  putUser: (command, username, xp, userClass, client, channel) => {
    //Determine optional parameters
    xp = xp || null;
    userClass = userClass || null;
    cleint = client || null;
    channel = channel || null;

    //Switch for commands
    switch (command) {
      case "chats":
        db.User.updateOne({ name: username }, { $inc: { chats: 1 } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "lubes":
        db.User.updateOne({ name: username }, { $inc: { lubes: 1 } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "xp":
        db.User.updateOne({ name: username }, { $inc: { xp: xp } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "level":
        db.User.updateOne({ name: username }, { $inc: { level: 1 } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "sub":
        db.User.updateOne({ name: username }, { $set: { sub: true } })
          .then()
          .catch(err => {
            console.log(err);
          });
        break;
      case "class":
        db.User.findOne({ name: username }).then(res => {
          if (res.class === "") {
            db.User.updateOne(
              { name: username },
              { $set: { class: userClass } }
            )
              .then(complete => {
                client.say(channel, "You are now a " + userClass + "!");
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            client.say(channel, "You are already a " + res.class + "!");
          }
        });
        break;
    }
  },

  userStats: (client, channel, username) => {
    client = client || null;
    channel = channel || null;
    db.User.findOne({
      name: username.toLowerCase()
    })
      .then(res => {
        client.say(
          channel,
          username +
            ": Lvl " +
            res.level +
            " " +
            res.class.charAt(0).toUpperCase() +
            res.class.slice(1)
        );
        client.say(channel, "Chats: " + res.chats);
        client.say(channel, "Lubes: " + res.lubes);
        return res;
      })
      .catch(err => {
        console.log("Error finding user: " + err);
      });
  }
};
