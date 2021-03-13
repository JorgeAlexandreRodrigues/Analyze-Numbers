let array = [];
let n = document.getElementById("txt");
let res = document.getElementById("res");

function number() {
    if (n.value.length == 0 || n.value > 100 || n.value < 1) {
        window.alert(`[ERROR !!] Insert a valid number`)
    } else {
        let num = Number(n.value);
        res.innerHTML += `Number: ${num} added <br>`;
        array.push(num);
        n.value = "";
    }

}
function finish() {
    var sum = 0;
    var average = 0;
    for (let pos in array) {
        array.sort(function (a, b) { return a - b });
        sum += array[pos];
        average = sum / array.length;
    }
    if(array.length !=0){
    res.innerHTML += (`${array.length} numbers has been added <br>`)
    res.innerHTML += (`The lowest value is:${array[0]} <br>`)
    res.innerHTML += (`The highest value is:${array[array.length - 1]} <br>`)
    res.innerHTML += (`The sum of all numbers is: ${sum} <br>`)
    res.innerHTML += (`The average of the numbers is: ${average} <br>`) 
       
    }else{
        window.alert("[ERROR !! ] You need insert a valid number first" )
    }
}
