var leader = {
    name: "Василий Петрович"
},
    soldier = {
    name: "Петька"
};

leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var parsed = dojox.json.ref.toJson(team);

console.log(parsed);