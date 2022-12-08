const result = +prompt('Введите четное число', '')
if (typeof result!== 'number') {
  alert('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
  alert('Ошибка, введено НЕ ЧИСЛО')
} else if (result % 2 === 0) {
  alert('Число четное')
} else {
  alert('число нечетное')
}
