//if-else, nested if
let nilai = 80;

if (nilai >= 90) {
    console.log("Anda dinyatakan Lulus | Predikat (A)")
} else if (nilai >= 80) {
    console.log("Anda dinyatakan Lulus | Predikat (B)")
} else if (nilai >= 70) {
    console.log("Anda dinyatakan Lulus | Predikat (C+)")
} else if (nilai >= 60) {
    console.log("Anda tidak Lulus | Predikat (D)")
} else {
    console.log("Silahkan mengulang semester | Predikat (E)")
}

//switch case
var menu = "Seblak";
switch (menu) {
    case "Seblak":
        console.log("Anda memesan Seblak");
        break;
    case "Ceker pedas":
        console.log("Anda memesan ceker pedas");
        break;
    case "Ayam geprek":
        console.log("Anda memesan Ayam geprek");
        break;
    default:
        console.log("Menu tidak terdaftar");
}

//for statement
for (var i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + i);
}

//while, do-while
var angka = 2;

do {
    console.log("Angka ke -" +angka);
    angka += 2; 
} while (angka <= 10);

//function
function tambah(a, b) {
    return a + b;
}

var hasil = tambah(2, 4);
console.log("Hasil adalah: " + hasil);