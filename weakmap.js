var map = new WeakMap();
var pavloHero = {first: "Pavlo", last: "Hero"};
var gabrielFranco = {first: "Gabriel", last: "Franco"};
map.set(pavloHero, "This is Hero");
map.set(gabrielFranco, "This is Franco");
console.log(map.get(pavloHero));