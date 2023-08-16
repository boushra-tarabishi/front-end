class stu {
    constructor(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.year = 0;
    }
    setyear(year) {
        this.year = year;
    }
    getyear() {
        return this.year;
    }
    setfname(fname) {
        this.fname = fname;
    }
    getfullname() {
        return "mrs " + this.fname + " " + this.lname;
    }
}
let s1 = new stu(2, "boushra", "tarabishi");
let s2 = new stu(1, "noha", "aljohari");
s2.setfname("aya");
s2.getyear();
document.getElementById("stu").innerHTML = s2.getfullname();