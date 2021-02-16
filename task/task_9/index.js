const tall = [2, 3, 4, 5, 6, 7, 8, 9, 10, ];

liste(tall);

function liste(arr) {
  let sumOdd = 0;
  let sumPar = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  
  console.log("Нечётные : " + sumOdd);
  console.log("Чётные : " + sumPar);
}