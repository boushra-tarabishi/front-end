let arr = [15, 20, "boushra", 25, 80];
let divs = document.getElementsByTagName("div");
//document.getElementById("myid").innerHTML = arr;
console.log(arr);
let s = "";
for (let i = 0; i < arr.length; i++) {
    s += arr[i] + "<br>";
    divs[i].innerHTML = arr[i] + "<br>"
}
document.getElementById("myid").innerHTML = s;
console.log(s);
divs[0].innerHTML = "hello";

console.log(divs);