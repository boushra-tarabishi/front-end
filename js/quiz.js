let a = parseInt(prompt("enter a"));
let b = parseInt(prompt("enter b"));
let c = parseInt(prompt("enter c"));
document.getElementById("equ").innerHTML = a + "x<sup>2</sup>+" + b + "x+" + c + ""
let d = b ** 2 - 4 * a * c;
let msg = ""
if (d < 0) {
    msg = "no solution";
} else if (d == 0) {
    let x = (-1 * b) / (2 * a);
    msg = "one solution";
    msg += "x=" + x;

} else {
    let x1 = (-1 * b - Math.sqrt(d)) / (2 * a);
    let x2 = (-1 * b + Math.sqrt(d)) / (2 * a);
    msg = "two solutions";
    msg += "x<sub>1</sub>=" + x1 + "<br>";
    msg += "x2=" + x2 + "<br>";
}
// document.getElementById("sol").innerHTML =