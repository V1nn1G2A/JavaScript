export const getFullDate = () => {
   
   let fullDate = new Date(),
      date = fullDate.getDate(),
      month = fullDate.getMonth(),
      hours = fullDate.getHours(),
      minutes = fullDate.getMinutes(),

   optionsMonth = { month: 'long'},
   monthName = fullDate.toLocaleString('ru-RU', optionsMonth);

   function declOfNum(num, name) {
      let cases = [2, 0, 1, 1, 1, 2];
      return name[ (num % 100 > 4 && num % 100 < 20) ? 2
         : cases[(num % 10 < 5) ? num % 10 : 5] ];
   }

   function declOfMonth(monthName, month) {
      return monthName[0].toUpperCase() +
         monthName.slice(1, monthName.length - 1) +
         (month === 2 || month === 7 ? 'а' : 'я');
   }

   return date 
   + " " 
   + declOfMonth(monthName, month) 
   + " в " 
   + hours 
   + " " 
   + declOfNum(hours, ['час', 'часа' , 'часов']) 
   + " " 
   + minutes 
   + " " 
   + declOfNum(minutes, ['минута', 'минуты', 'минут']);
}