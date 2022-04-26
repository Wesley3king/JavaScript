let v1 = '12',v2 = '+',v3 ='2';
let exec = new Function('pv,op,sv','return Number(pv) op Number(sv)');

console.log(exec(v1,v2,v3));