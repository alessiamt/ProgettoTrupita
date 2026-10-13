function acquista() {
    let eta;
    eta = prompt("Inserisci l'eta");

    if (eta != null && eta != "" && !isNaN(eta)){

    if(eta < 5){
        alert("Il biglietto e gratis");
        console.log("Gratis minore di 5");

    } else if(eta >=18 && eta <=25){
        alert("Il biglietto e 3.5€");
        console.log("3,5 tra 18 e 25");

    } else if(eta >= 50 && eta <= 55){
        alert("Il biglietto e 5€");
        console.log("5 tra 50 e 55");

    } else{
        alert("Il biglietto e 8€")
        console.log("8 tutti gli altri");

    }
    }


}