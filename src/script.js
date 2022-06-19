var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

function solve() {

    //Inserindo todos os dados em variáveis de 'a' a 'f'
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var c = document.getElementById("C").value;
    var d = document.getElementById("D").value;
    var e = document.getElementById("E").value;
    var f = document.getElementById("F").value;

    var y = (c * d - a * f) / (d * b - e * a);
    var x = (c - b * y) / a;

    //limitar decimais
    y = y.toFixed(2);
    x = x.toFixed(2);

    var output = "(" + x + ", " + y + ")"

    if ((d * b - e * a) == 0) {
        if (d * c - f * a == 0) {
            output = "Múltiplas soluções";
        } else {
            output = "Não há soluções";
        }
    }

    document.getElementById("solution").innerHTML = output;

    //gráfico
    calculator.setExpression({
        id: 'graph1',
        latex: a + 'x +' + b + 'y=' + c
    });
    calculator.setExpression({
        id: 'graph2',
        latex: d + 'x +' + e + 'y=' + f
    });
}