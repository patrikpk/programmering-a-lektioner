/*
 * Det hÃ¤r Ã¤r ett JavaScript-kladdblock.
 *
 * Skriv in lite JavaScript, hÃ¶gerklicka eller vÃ¤lj frÃ¥n KÃ¶r-menyn:
 * 1. KÃ¶r fÃ¶r att evaluera den markerade texten,
 * 2. Inspektera fÃ¶r att Ã¶ppna en objektinspektÃ¶r pÃ¥ resultatet, eller
 * 3. Visa fÃ¶r att infoga resultatet i en kommentar efter markeringen.
 */

// var name = prompt("vad heter du?");;
// alert("ditt namn Ã¤r " + name.length + " tecken lÃ¥ngt")

// uppgift b - rÃ¤kna ut nÃ¥gons Ã¥lder
//var year = prompt("vilket Ã¥r Ã¤r du fÃ¶dd (4 siffror)?");
//var age = (new Date()).getFullYear() - year;
//alert("du fyller (eller fyllde) " + age + " Ã¥r i Ã¥r");
// CTRL R

// alert(3+5); // 8
// CTRL R
//alert("3"+5; //35   dvs "3" och "5"
// CTRL R

//var name = prompt("vad heter du?");
//alert("fÃ¶rsta bokstaven i ditt namn Ã¤r " + name [0]);
//alert("sista bokstaven Ã¤r " + name[name.length -1]);

//uppgift d - introduktion av konsollen
// konsollen är mindre störande än alert
//var the_king = "Carl XVI Gustaf";
//console.log("kungen är " + the_king);
// CTRL + SHIFT + K samt CTRL + R

//console.log("lilla kungen är " + the_king.toLowerCase());
//console.log("stora kungen är " + the_king.toUpperCase());

// Uppgift e - if - else
var name = "patrik";
if ( name.length > 5 ) {
    console.log("ditt namn har mer än 5 tecken");
} else if ( name.length === 5 ) {
    console.log("ditt namn innehåller precis 5 tecken ");
} else {
    console.log("Ditt namn innehåller 5 eller färre tecken");
}

//uppgift f - en enkel loop
var eman = "", i = 1, len = name.length;
while ( i <= len ) {
    eman += name[len - i];
    i += 1;
}
console.log("namnet baklänges blir '" + eman + "'");