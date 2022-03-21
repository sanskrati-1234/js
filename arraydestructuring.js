let a, b, arr;
[a, b] = [12, 13];
console.log(a, b);
[a, b = 1] = [12];
console.log(a, b);

[a, b, ...arr] = [1, 2, 3, true, "sanskrati"];
console.log(a, b, arr);
