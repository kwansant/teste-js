var alunos = ["Kawan", "Alexandro", "Jacqueline", "Bryan"];
var tec = [10.0, 5.0, 5.0, 6.0];
var fin = [2.0, 9.0, 5.0, 4.0];
var org = [3.0, 5.0, 4.0, 5.0];
var game = [1.0, 5.0, 6.0, 7.0];

function media(n1, n2, n3, n4){

    return (n1 + n2 + n3 + n4) /2;

}

function passou(media){
    
    if(media > 5){
        return "Passou";

    }
    else
        return "Reprovou";


}

for (var i = 0; i < alunos.length; i++){
    //var alunos = alunos[i];
    //var tec = tec[i];
    //var fin = fin[i];
    //var org = org[i];
    //var game = game[i];
    var m = (tec[i] + fin[i] + org[i] + game[i]) /4;
    console.log(alunos[i] +
        " - " +
        tec[i] +
        " - " +
        fin[i] +
        " - " +
        org[i] +
        " - " +
        game[i] +
        " - " +
        m +
        " - " +
        passou(m))
}