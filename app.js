//Dependencies
require("dotenv");

const bodyParser = require("body-parser"),
  path = require("path"),
  express = require("express");

//external functions
const helpers = require("./helpers"),
  controller = require("./controllers/twitchController"),
  queries = require("./controllers/queryController");

//all envs
let app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//////////////////Global Variables////////////////////
const client = controller.client;
//const greetings = require("./assets/lists/greetings"); //long list of different greetings
//const classes = require("./assets/lists/classes"); //list of classes and bonuses
// let classNames = [];
// for (let i = 0; i < classes.length; i++) {
//   classNames.push(classes[i].name);
// }

//////////////////More Helpers////////////////////
// const findClass = className => {
//   return ;
// };

let uwu = false;
function uwuChat(input) {
  let youCheck = input.split(" ");
  let uwuString = "";
  for (let i = 0; i < youCheck.length; i++) {
    if (youCheck[i].toLowerCase() === "you") {
      youCheck[i] = "uwu";
    }
  }
  let checkedString = youCheck.join(" ");
  for (let i = 0; i < checkedString.length; i++) {
    if (
      checkedString[i].toLowerCase() === "r" ||
      checkedString[i].toLowerCase() === "l"
    ) {
      uwuString += "w";
    } else {
      uwuString += checkedString[i];
    }
  }
  return uwuString + " uwu";
}

//////////////////Chat Actions////////////////////

//Ads
//Twitter notification every 30 minutes
// setInterval(() => {
//   client.say(
//     "Lubesy", //change this with other channels
//     "Follow me on Twitter! https://twitter.com/lubesy_official"
//   ),
//     1800000;
// });

//Team site notification every 41 minutes
// setInterval(() => {
//   client.say(
//     helpers.removeHash(channel),
//     "Check out my friends! https://lubechatbot.herokuapp.com/"
//   ),
//     2460000;
// });

//Art notification every 63 minutes
// setInterval(() => {
//   client.say(
//     helpers.removeHash(channel),
//     "Check out my friends! https://lubechatbot.herokuapp.com/"
//   ),
//     2460000;
// });

//Action
//Anongiftpaidupgrade

//Ban
// client.on("ban", (channel, username, reason) => {
//   client.say(
//     helpers.removeHash(channel),
//     helpers.removeHash(username) +
//       " was banned from " +
//       helpers.removeHash(channel) +
//       "'s chat for " +
//       reason
//   );
//   client.whisper(
//     user.username,
//     "You were banned from " + helpers.removeHash(channel) + " for " + reason
//   );
// });

//Chat

//Cheer
// client.on("cheer", (channel, userstate, message) => {
//   client.say(helpers.removeHash(channel), userstate.username + ": " + message);
//   client.say(helpers.removeHash(channel), "Thank you for the bits!!");
// });

//Clearchat
// client.on("clearchat", channel => {
//   client.say(
//     helpers.removeHash(channel),
//     helpers.removeHash(channel) + "'s chat was cleared!"
//   );
// });

//Emoteonly
//Emotesets
//Followersonly
//Giftpaidupgrade

//Hosted
// client.on("hosted", (channel, username, viewers, autohost) => {
//   if (!autohost) {
//     client.say(
//       helpers.removeHash(channel),
//       helpers.removeHash(username) + " is hosting us! lubesyPog"
//     );
//   } else {
//     console.log(
//       helpers.removeHash(username) + " added us to their authost list!"
//     );
//   }
// });

//Hosting
// client.on("hosting", (channel, target, viewers) => {
//   client.say(
//     helpers.removeHash(channel),
//     "We're now hosting " + helpers.removeHash(target) + "!"
//   );
// });

//Join
// client.on("join", (channel, username, self) => {
//   client.say(
//     helpers.removeHash(channel),
//     greetings[helpers.getRandomInt(greetings.length - 1)] +
//       ", " +
//       username +
//       "!"
//   );
// });

//Logon
//Message
client.on("message", (channel, userstate, message, self) => {
  // Don't listen to my own messages..
  if (self) return;

  // Handle different message types..
  switch (userstate["message-type"]) {
    case "action":
      // This is an action message..
      break;
    case "chat":
      // This is a chat message..
      // queries.postUser(userstate);
      // queries.putUser("chats", userstate.username);
      // queries.putCount("chats");
      switch (message.split(" ").length) {
        case 1:
          switch (message.toLowerCase()) {
            case "!!!test":
              console.log(userstate);
              break;

            // case "?chats":
            //   queries.getCount("chats", client, helpers.removeHash(channel));
            //   break;

            // case "?classes":
            //   let classString = "";
            //   for (let i = 0; i < classNames.length; i++) {
            //     if (i !== classNames.length - 1) {
            //       classString += classNames[i] + ", ";
            //     } else {
            //       classString += classNames[i];
            //     }
            //   }
            //   client.say(helpers.removeHash(channel), classString);
            //   break;

            // case "?deaths":
            //   queries.getCount("deaths", client, helpers.removeHash(channel));
            //   break;

            // case "!disengage":
            //   break;

            case "!dance":
            case "!bongo":
              let danceNum = helpers.getRandomInt(2);
              if (danceNum === 1) {
                client.say(
                  helpers.removeHash(channel),
                  "FeelsBongoMan FeelsBongoMan FeelsBongoMan FeelsBongoMan FeelsBongoMan FeelsBongoMan FeelsBongoMan FeelsBongoMan FeelsBongoMan"
                );
              } else {
                client.say(
                  helpers.removeHash(channel),
                  "pepeD pepeD pepeD pepeD pepeD pepeD pepeD pepeD pepeD"
                );
              }
              break;

            // case "!drink":
            //   client.say(
            //     helpers.removeHash(channel),
            //     helpers.removeHash(channel) + ", drink whatever you have"
            //   );
            //   break;

            case "f":
              client.say(
                helpers.removeHash(channel),
                "/me thanks you for the F"
              );
              break;

            // case "!fight":
            //   let cr = 0;
            //   helpers.findMonster(
            //     cr,
            //     userstate.username,
            //     helpers.removeHash(channel)
            //   );
            //   break;

            case "!hype":
              client.say(
                helpers.removeHash(channel),
                "lubesyPog lubeOop RareChar lubesyPog Wow lubeOop pepeD lubesyPog Wow RareChar lubesyPog Wow lubeOop lubesyPog RareChar"
              );
              break;

            //revise
            case "!gaytest":
              if (userstate["display-name"] === "Lubesy") {
                client.say(helpers.removeHash(channel), "100% no doubt.");
              } else if (userstate.username.toLowerCase() === "blizzardshark") {
                client.say(
                  helpers.removeHash(channel),
                  "This should say '" +
                    userstate["display-name"] +
                    " is 69% likely to be gay today GayPride' but let's see what it says:"
                );
                let blizzRoll = helpers.getRandomInt(100);
                if (blizzRoll === 69) {
                  client.say(
                    helpers.removeHash(channel),
                    userstate["display-name"] +
                      " is " +
                      blizzRoll +
                      "% likely to be gay today - omg Lubesy wins"
                  );
                } else {
                  client.say(
                    helpers.removeHash(channel),
                    userstate["display-name"] +
                      " is " +
                      blizzRoll +
                      "% likely to be gay today - this is so sad"
                  );
                }
              } else {
                client.say(
                  helpers.removeHash(channel),
                  userstate["display-name"] +
                    " is " +
                    helpers.getRandomInt(100) +
                    "% likely to be gay today GayPride"
                );
              }
              break;

            case "!lube":
              //   // queries.putCount("lubes");
              //   queries.putUser("lubes", userstate.username);
              client.say(
                helpers.removeHash(channel),
                userstate["display-name"] + ", thank you for the lube"
              );
              break;

            // case "?lubes":
            //   queries.getCount("lubes", client, helpers.removeHash(channel));
            //   break;

            case "!lurk":
              client.say(
                helpers.removeHash(channel),
                userstate["display-name"] +
                  ", thank you for the lurk! Remember to mute the tab and not the stream"
              );
              break;

            // case "?me":
            //   queries.userStats(
            //     client,
            //     helpers.removeHash(channel),
            //     userstate["display-name"]
            //   );
            //   break;

            case "!mods":
              client.mods(helpers.removeHash(channel)).then(mods => {
                client.say(
                  helpers.removeHash(channel),
                  "Mods: " + mods.join(", ")
                );
              });
              break;

            case "!peepeega":
              client.say(
                helpers.removeHash(channel),
                "P Pepega E Pepega E Pepega P Pepega E Pepega E Pepega G Pepega A"
              );
              break;

            case "!pog":
              client.say(
                helpers.removeHash(channel),
                "lubesyPog lubesyPog lubesyPog lubesyPog lubesyPog lubesyPog lubesyPog lubesyPog lubesyPog lubesyPog"
              );
              break;

            case "!rr":
            case "!roulette":
              let yourNumber = helpers.getRandomInt(6);
              let revolver = helpers.getRandomInt(6);
              if (yourNumber === revolver) {
                client.say(
                  helpers.removeHash(channel),
                  "BANG! " +
                    userstate["display-name"] +
                    " had 83.33% of winning and still lost."
                );
              } else {
                client.say(
                  helpers.removeHash(channel),
                  userstate["display-name"] + " breathes a sigh of relief."
                );
              }
              break;

            // case "!shot":
            //   helpers.getVotes(helpers.removeHash(channel)).then(done => {
            //     client.say(
            //       helpers.removeHash(channel),
            //       done
            //         ? "Take a shot, honey"
            //         : "You don't need to take a shot right now, honey"
            //     );
            //   });
            //   break;

            case "!stairs":
              // Accompanied by a sound notification
              client.say(
                helpers.removeHash(channel),
                "NotLikeThis NotLikeThis NotLikeThis WHAT HAPPENED TO THE STAIRS?? NotLikeThis NotLikeThis NotLikeThis "
              );
              break;

            case "!twitter":
              client.say(
                helpers.removeHash(channel),
                "Here's Luber's Twitter: https://twitter.com/luberchris"
              );
              break;

            // case "?users":
            //   queries.getUserCount(client, helpers.removeHash(channel));
            //   break;

            case "!uwu":
              console.log(uwu);
              if (userstate.mod) {
                if (uwu) {
                  uwu = false;
                  client.say(
                    helpers.removeHash(channel),
                    "/me uwu chat deactivated"
                  );
                } else {
                  uwu = true;
                  client.say(
                    helpers.removeHash(channel),
                    "/me uwu chat activated"
                  );
                }
              } else {
                client.say(
                  helpers.removeHash(channel),
                  "Only mods can activate and deactivate uwu chat"
                );
              }
              break;
            //if user is a mod
            // translate all of chat to uwu

            case "!website":
              client.say(
                helpers.removeHash(channel),
                "Here's Luber's website: http://chrisluber.com"
              );
              break;

            // case "#death":
            //   client.mods(helpers.removeHash(channel)).then(mods => {
            //     if (
            //       helpers.isAdmin(
            //         mods,
            //         helpers.removeHash(channel),
            //         userstate.username
            //       )
            //     ) {
            //       // client.say(
            //       //   helpers.removeHash(channel),
            //       //   userstate.username + " is an Admin!"
            //       // );
            //       queries.putCount("deaths");
            //     } else {
            //       client.say(
            //         helpers.removeHash(channel),
            //         "Sorry " +
            //           userstate["display-name"] +
            //           ", only mods can add to the death counter"
            //       );
            //     }
            //   });
            //   break;

            // case "#lube":
            //   // queries.putCount("lubes");
            //   queries.putUser("lubes", userstate.username);
            //   break;

            default:
              break;
          }

        default:
          switch (message.substr(0, message.indexOf(" "))) {
            //Chat commands

            // case "!test":
            //   for (let i = 0; i < classes.length; i++) {
            //     if (
            //       classes[i].name === message.substr(message.indexOf(" ") + 1)
            //     ) {
            //       console.log(classes[i]);
            //     } else {
            //       console.log("Not found!");
            //     }
            //   }
            //   break;

            // case "!fight":
            //   let cr = parseFloat(message.substr(message.indexOf(" ") + 1));
            //   helpers.findMonster(
            //     cr,
            //     userstate.username,
            //     helpers.removeHash(channel)
            //   );
            //   break;

            case "!grid":
              helpers.gridPrint(message, channel, userstate);
              break;

            case "!mock":
              client.say(
                helpers.removeHash(channel),
                helpers.mock(message.substr(message.indexOf(" ") + 1))
              );
              break;

            case "!roll":
            case "!dice":
              if (message) {
                let roll = message.split(" ");
                let number = roll[1].split("d")[0];
                let die = roll[1].split("d")[1];
                let total = 0;
                for (let i = 0; i < number; i++) {
                  total += helpers.getRandomInt(die);
                }
                client.say(helpers.removeHash(channel), "/me " + total);
              }
              break;

            // case "!setClass":
            //   let classAssignment = {};
            //   for (let i = 0; i < classes.length; i++) {
            //     if (
            //       classes[i].name === message.substr(message.indexOf(" ") + 1)
            //     ) {
            //       classAssignment = classes[i];
            //     }
            //   }
            //   if (
            //     classNames.includes(
            //       message.substr(message.indexOf(" ") + 1).toLowerCase()
            //     )
            //   ) {
            //     queries.putUser(
            //       "class",
            //       userstate.username,
            //       undefined,
            //       message.substr(message.indexOf(" ") + 1),
            //       client,
            //       helpers.removeHash(channel)
            //     );
            //     queries.putClass(userstate.username, classAssignment);
            //   } else {
            //     client.say(
            //       helpers.removeHash(channel),
            //       userstate["display-name"] +
            //         ", " +
            //         message.substr(message.indexOf(" ") + 1) +
            //         " is not a class I recognize! Try again using one of these:"
            //     );
            //     let classString = "";
            //     for (let i = 0; i < classNames.length; i++) {
            //       if (i !== classNames.length - 1) {
            //         classString += classNames[i] + ", ";
            //       } else {
            //         classString += classNames[i];
            //       }
            //     }
            //     client.say(helpers.removeHash(channel), classString);
            //   }
            //   break;
            default:
              if (uwu) {
                client.say(
                  helpers.removeHash(channel),
                  userstate["display-name"] + ": " + uwuChat(message)
                );
              }
              break;
          }
      }
      break;
    case "whisper":
      // This is a whisper..
      break;
    default:
      // Something else ?
      break;
  }
});

//Messagedeleted
//Mod
//Mods
//Notice
//Part
//Ping
//Pong
//R9kbeta

//Raided
// client.on("raided", (channel, username, viewers) => {
//   // client.say(
//   //   helpers.removeHash(channel),
//   //   "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
//   // );
//   client.say(
//     helpers.removeHash(channel),
//     `lubesyPog lubesyPog Welcome ` +
//       helpers.removeHash(username) +
//       `and their ` +
//       viewers +
//       ` raiders!`
//   );
// });

//Raw_message
//Resub
//Roomstate
//Slowmode
//Subgift
//Submysterygift
//Subscribers
//Subscription

//Timeout
// client.on("timeout", (channel, username, length, reason) => {
//   client.say(
//     helpers.removeHash(channel),
//     helpers.removeHash(username) +
//       " was shushed for " +
//       helpers.convertSeconds(length)
//   );
//   client.whisper(
//     helpers.removeHash(username),
//     "You were timed out from " +
//       helpers.removeHash(channel) +
//       "'s chat for " +
//       helpers.convertSeconds(length) +
//       " for " +
//       reason
//   );
// });

//Unhost
//Unmod
//VIPs
//Whisper
