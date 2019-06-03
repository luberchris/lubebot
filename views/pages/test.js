let db = require("../../models");

db.Count.find({}).then(results => {
  let node = document.createElement("li");
  results.forEach(r => {
    let textnode = document.createTextNode(r.name + ": " + r.count);
    node.appendChild(textnode);
    document.getElementById("count").appendChild(node);
  });
});
