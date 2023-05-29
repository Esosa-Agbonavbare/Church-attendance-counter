let count, counterObj;
count = 0;
counterObj = document.getElementById("counter");

document.getElementById("add").addEventListener("click", addCount)
function addCount() {
    count += 1;
    counterObj.innerHTML = count;
}

document.getElementById("sub").addEventListener("click", subCount)
function subCount() {
    if (counterObj.innerHTML > 0) {
        count += -1;
    }
    counterObj.innerHTML = count;
}

document.getElementById("cmt").addEventListener("click", saveCount)
function saveCount() {
    let display = count + " ";
    document.getElementById("entry").innerHTML += display ;
    counterObj.innerHTML = 0;
    count = 0;
}

document.getElementById("sum").addEventListener("click", outputCount)
function outputCount() {
    let entries = document.getElementById("entry").innerHTML;
    let ent = "";
    ent += entries.slice(18);
    const arr = ent.split(" ");
    const num = arr.map(numConv);
    function numConv(value) {
        return Number(value);
    }
    const sum = num.reduce(myFunction);
    document.getElementById("output").innerHTML = "The Total Church Attendance is: " + sum;
    function myFunction(total, value) {
        return total + value;
    }
}