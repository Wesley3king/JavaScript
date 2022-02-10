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
document.write(`concat = ${txt.concat(' - going to pt 3')}`);