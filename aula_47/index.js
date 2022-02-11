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