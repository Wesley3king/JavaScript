var txt = "strings pt 2";
document.write(txt + '<br>');
// search
document.write(`search = ${txt.search(/t/ig)} <br>`);

//replace
document.write(`replace = ${txt.replace(/s/ig,'x')} <br>`);

//charAt
document.write(`charAt = ${txt.charAt(2)} <br>`);

//charCodeAt
document.write(`charCodeAt = ${txt.charCodeAt(2)} <br>`);

//fromCharCode
document.write(`fromCharCode = ${String.fromCharCode(67)} === C <br>`);

//concat
document.write(`concat = ${txt.concat(' - going to pt 3')}  <br>`);

//lastIndexOf
document.write(`lastIndexOf = ${txt.lastIndexOf('pt')} <br>`);

//localeCompare
document.write(`localeCompare = ${txt.localeCompare("strings pt 2")} <br>`);

//slice
document.write(`slice = ${txt.slice(0,8)} <br>`);

//split
document.write(`splite === ${txt.split(' ')} <br>`)
//cada virgúla signica um corte, podes acessar cada palavra contada por um array = console.log(res[1]); === pt;

//pt 3

//toString
var num = 15;
document.write(`toString binario = ${num.toString(2)}<br>`);
document.write(`toString octal = ${num.toString(8)}<br>`);
document.write(`toString hexadecimal = ${num.toString(16)}<br>`);

//trim
var texto = "    ok    ";
document.write(`trim = ${txt.trim(texto)}<br>`);

//caracteres especiais
document.write("caracteres especiais <br>");
document.write("king \"of\" shadows");
document.write("i \\am\\ the bone of my sword    \"unkow to death\"         \"unlimited blade works\"");