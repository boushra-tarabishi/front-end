let list = [2, 4, 7, 1, 5, 3, 5, 9, 5, 3, 0];
let res = "<table border=\"1\">";
res += "<tr>";
for (let i = 0; i < list.length; i++) {
    res += "<td> " + list[i] + "</td>";
}
res += "</tr>";
res += "</table>";
document.getElementById("table").innerHTML = res;
let min = list[0];
let index_min = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i] < min)
        min = list[i];
    index_min = i;
}
document.getElementById("min").innerHTML = "min is= " + min + " in " + index_min;
let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function list_min(l) {
    let min = l[0];
    let index_min = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] < min)
            min = l[i];
        index_min = i;
    }
    return min
}
document.getElementById("min2").innerHTML = list_min(list2);

let person = {
    "firstname": "boushra",
    "lastname": "tarabishi",
    "gender": "femle",
    "age": "20",
    "address": {
        "streetname": "kim il song",
        "city": "damascus",
    },
    "phonenumbers ": [{
        "type": "home",
        "number": "6644889",
        "active": true
    }, {
        "type": "work",
        "number": "664475889",
        "active": false

    }]
}
let card_title = document.getElementsByClassName("card-title")[0];
card_title.innerHTML = person.firstname + " " + person.lastname;