let k = ("K");
let p = ("P");
let i = prompt("Zadejte cislo:");
let s = "";
if(!isNaN(i)){
    for(let y = 1; y <= i; y++){
        for(let x = 1; x <= i; x++){
            s += ( x+ y) % 2 == 0 ? k : p;
        }
        s += "\n"
    }
    console.log(s)
}else{
    console.log("ne");
}
