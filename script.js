
let country = [
    'Azerbaycan',
    'Turkiye',
    'Ukrayna'
];

let city = [
    ['Baki', 'Susa', 'Seki'],
    ['Marmaris', 'Ankara', 'Trabzon'],
    ['Lviv', 'Odessa', 'Kiyev']
];

let image = [
    'aze.jpg',
    'turk.jpg',
    'ukr.jpg'
];

let olkeler = document.getElementById('olkeler');
let seherler = document.getElementById('seherler');
let goster = document.getElementById("goster");
let img = document.querySelector('img');

onload = function(){
    let select = `<option value = "" selected disabled>Olke secin</option>`;

    for(let i = 0; i<country.length; i++){
        select += `<option value = "${i}">${country[i]}</option>`
    }
    olkeler.innerHTML = select
}

function klik(){
    let select2 = `<option value = "" selected disabled>Seher secin</option>`;
    let value = olkeler.value;
    for(let i = 0; i < city[value].length; i++){
        select2 += `<option value = "${i}">${city[value][i]}</option>`
    }
    seherler.innerHTML = select2

    let img = image[value];
    flag.src = img
}

seherler.onchange = function(){
    let olkeV = olkeler.value;
    let seherV = seherler.value;
    goster.innerHTML = `Siz ${country[olkeV]}-nin ${city[olkeV][seherV]} seherini secdiniz`
}