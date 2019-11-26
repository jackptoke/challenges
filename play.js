let me = {};
me.age = 36;
me.currentLocation = "Buckley";

console.log(me.age, me.currentLocation);

let hobbies = ["Cycling", "Traveling", "Learning new things"];
me.hobbies = hobbies;

delete me.age;

for(let property in me){
    if(typeof(me[property]) === 'string'){
        console.log(me[property]);
    }else if(typeof(me[property]) === 'object'){
        console.log("My hobbies are: ");

        for(let hobby of me[property]){
            console.log(hobby);
        }
    }
}

me.hobbies.push("Blogging");
console.log(me.hobbies);
me.hobbies.shift();
console.log(me.hobbies);
me.mother = {};
me.mother.name = "S. S. Aye";
me.mother.age = 62;
me.mother.location = "Werribee";
me.print_detail = function () {
    console.log("My details are: ")
    console.log(this.currentLocation);
    console.log("My mother's detail: ");
    for(let m in this.mother){
        console.log(this.mother[m]);
    }
};
me.print_detail();
// me.print_detail;

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

for(let key in coder_academy){
    console.log(key + ": ");
    console.log("Street address: " + coder_academy[key]["street"] + "  State: " + coder_academy[key]["state"]);
}
