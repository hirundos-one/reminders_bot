// Обработка команд 

function handleCommand(command,chat_id) {
  
  if (command === "/today") {
    showTodayBirthday(chat_id);
  } 
  if (command === "/month") {
    showMonthBirthdays(chat_id);
  }
  if (command === "/nextmonth") {
    showNextMonthBirthdays(chat_id);
  }
  if (command === "/year") {
    showYear(chat_id);
  } 
  if (command === "/del") {
    deleteLastRow(chat_id);
  }
  }
