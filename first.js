let cislo = prompt("zadej cislo:");
if (!isNaN(cislo)){
    for(let i = 1; i <= 10; i++){
        console.log(cislo * i);
    }
}else{
    console.log("Kámo, co to děláš? Musíš psát čísla číslicemi!");
}
