var wycieczka = document.getElementById('Wycieczka');
wycieczka.onchange = () =>{
    let obrazjpg = "Zdjęcia/"+wycieczka.value+".jpg";
    let obraz = document.getElementById('obraz');
    obraz.children[0].setAttribute('src', obrazjpg);
    console.log(wycieczka.value);
}
let obrazjpg = "Zdjęcia/"+wycieczka.value+".jpg";
let obraz = document.getElementById('obraz');
obraz.children[0].setAttribute('src', obrazjpg);