let myMap = new Map();
myMap.set('cat', 'str');
myMap.set(12, 'num');
myMap.set(true, 'bool');

for (let name of myMap.keys()) {
  
  console.log('Ключ - ' + name);
}

for (let val of myMap.values()) {

  console.log('Значение - ' + val); 

}
