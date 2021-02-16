const years = prompt('Сколько Вам лет');

alert('Вам '+ years + ' лет!')


if (years %2 == 0) {
   console.log('Чётное')
} else if(isNaN(years)) {
  console.log('Упс, Вы ошиблись!')
}   else  {
   console.log('Нечётное')
}


