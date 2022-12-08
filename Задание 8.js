let map = new Map([
  ["Солнце", "Лето"],
  ["Снег", "Зима"],
  ["Дождь", "Осень"]
]);
map.forEach((value, key) => {
  console.log(`${key} (ключ) - ${value} (значение)`);
});
