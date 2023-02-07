console.log("test");


/* 

Hinzufügen von Lieblingsmusik

"The Beatles"
Von Pink Floyd: "Download"
Von Pink Floyd: true
1971 und 1983
Von Metallica: "MC"
Von Metallica das Wort: Ride
Von Led Zeppelin das Wort: IV:
Von Pink Floyd das Wort: Floyd


*/




let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];



console.log(myMusic);
console.table(myMusic);

// Object lieblingsmusik erstellen
let lieblingsmusik = {
    kunstler: "ABBA",
    release_jahr: 1700,
    formate: ["LP", "CD", "Steintafel"],
    gold: true
}

console.log(lieblingsmusik);
console.table(lieblingsmusik);

// in Array pushen
myMusic.push(lieblingsmusik);

console.log(myMusic);
console.table(myMusic);

// The Beatles
console.log(myMusic[0].kunstler);

// Pink Floyd Download
console.log(myMusic[1].formate[3]);
console.log(myMusic[1]["formate"][3]);

// Pink Floyd true 
console.log(myMusic[1].gold);

// 1971 und 1983
for (let i in myMusic) {
    //console.log(myMusic[i].release_jahr) // 1969 ... 1700
    if (myMusic[i].release_jahr == 1971) {
        console.log(myMusic[i].release_jahr)
    }
    else if (myMusic[i].release_jahr == 1983) {
        console.log(myMusic[i].release_jahr)
    }
};


// MC
for(let i in myMusic){
    if ( myMusic[i].kunstler == "Metallica" ) {
console.log(myMusic[3].formate[2])
console.log(myMusic[3]["formate"][2])  
    }
}

// Ride
for (let i in myMusic){
    if ( myMusic[i].kunstler == "Metallica"){
        console.log(myMusic[i].title.length) // 35
        console.log(myMusic[i].title.split(" ")) // macht aus String ein Array
        console.log(myMusic[i].title.split(" ").find(word => word == "Ride")) //    
        console.log(myMusic[i].title.search("Ride")) // 10



    }}