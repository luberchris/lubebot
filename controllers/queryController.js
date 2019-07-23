// const db = require("../models"),
//   helpers = require("../helpers");

// // const getRandomInt = function(max) {
// //   return Math.floor(Math.random() * Math.floor(max));
// // };

// // const rollDice = function(roll) {
// //   //5d20+10
// //   //[5, 20+10]
// //   let number = roll.split("d")[0];
// //   let die = roll.split("d")[1].split(/[+-]/)[0];
// //   let modifier = roll.split("d")[1].split(/[+-]/)[1] || 0;
// //   let total = 0;
// //   for (let i = 0; i < number; i++) {
// //     total += getRandomInt(die);
// //   }
// //   console.log(total);
// //   return total + modifier;
// // };

// // const statBonus = stat => {
// //   //cwchong is a goddddddddddddddd
// //   return Math.floor((stat - 10) / 2);
// // };

// module.exports = {

//   getQuote: () => {},

//   getUserCount: (client, channel) => {
//     db.User.countDocuments()
//       .then(res => {
//         client.say(channel, "Users: " + res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },

//   postQuote: () => {},

//   postUser: req => {
//     db.User.find({ name: req.username })
//       .then(res => {
//         if (res.length === 0) {
//           console.log(req + " not found - adding...");
//           let user = new db.User({ name: req.username, sub: req.subscriber });
//           user.save(err => {
//             console.log(err);
//           });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },

//   putUser: (command, username, xp, userClass, client, channel) => {
//     //Determine optional parameters
//     xp = xp || null;
//     userClass = userClass || null;
//     cleint = client || null;
//     channel = channel || null;

//     //Switch for commands
//     switch (command) {
//       case "chats":
//         db.User.updateOne({ name: username }, { $inc: { chats: 1 } })
//           .then()
//           .catch(err => {
//             console.log(err);
//           });
//         break;
//       case "lubes":
//         db.User.updateOne({ name: username }, { $inc: { lubes: 1 } })
//           .then()
//           .catch(err => {
//             console.log(err);
//           });
//         break;
//     }
//   }
// };
