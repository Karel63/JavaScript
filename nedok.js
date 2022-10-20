let k = ("K");
let p = ("P");
let i = prompt("Zadejte cislo:")
if(!isNaN(i)){
    for(let t = 1; t <= i / 2; t++){
        console.log(k + p)
        console.log(p + k)
    }
    if(i % 2 == 1){
        console.log(k + p)
    }
}else{
    console.log("ne");
}
