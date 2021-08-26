var alunos = ["Kawan", "Alexandro", "Jacqueline", "Bryan"];
var tec = [10.0, 5.0, 5.0, 6.0];
var fin = [2.0, 9.0, 5.0, 4.0];
var org = [3.0, 5.0, 4.0, 5.0];
var game = [1.0, 5.0, 6.0, 7.0];

function media(n1, n2, n3, n4){

    return (n1 + n2 + n3 + n4) /4;

}

function passou(media){
    
    if(media >= 5){
        return "Passou";

    }
    else
        return "Reprovou";


}

for (var i in alunos){
    var n = alunos[i];
    var tc = tec[i];
    var fn = fin[i];
    var or = org[i];
    var gm = game[i];
    var m = media(tc, fn, or, gm);
    console.log(n +
        " - " +
        tc +
        " - " +
        fn +
        " - " +
        or +
        " - " +
        gm +
        " - " +
        m +
        " - " +
        passou(m))
}
