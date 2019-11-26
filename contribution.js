const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const day_of_week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const calendar = {
    SUN: [],
    MON: [],
    TUE: [],
    WED: [],
    THU: [],
    FRI: [],
    SAT: []
}

function getHEXColor(length){
    const colorHex = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let color = "#";
    for(let i=0; i<length; i++){
        color += colorHex[Math.floor(Math.random() * colorHex.length)];
    }
    return color;
}

function 


console.log(getHEXColor(6));