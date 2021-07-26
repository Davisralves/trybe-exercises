const somatorio= (n) => n > 0 ? n + somatorio(n-1) : n;
console.log(somatorio(10));