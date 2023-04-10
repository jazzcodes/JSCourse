// resolved 
let x, { x: y = 1 } = { x }; y;

console.log('Q7');
console.log(x);
console.log(y);

console.log('Q8');
(function() {
    let f = this ? class g { } : class h { };
    console.log( [ typeof f, typeof h ]);
    })();

console.log('Q8');
console.log([...[...'...']].length);
console.log(['...'].length);
console.log([...'...'].length);
console.log([...'bingo'].length);

console.log('Q11');
console.log(typeof (new (class F extends (String, Array) { })).substring);

