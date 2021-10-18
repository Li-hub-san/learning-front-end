// 8. Write a JavaScript program to calculate the days left until next Christmas.

/**
 * Receives a day and a month and calculates the number of days left up until that date, always assuming it's forward.
 * @param {number} day Day of the event
 * @param {number} month Month of the event
 * @returns {number} Returns days left until the event.
 */
function daysLeftToEvent(day, month) {
  let eventMonth = month - 1;
  const oneDayMilliseconds = 1000 * 60 * 60 * 24;
  const thisDay = new Date();
  thisDay.setHours(0, 0, 0, 0);

  let event = new Date(thisDay.getFullYear(), eventMonth, day);

  if (event.getDate() !== day) {
    throw "Invalid day";
  }

  if (event.valueOf() < thisDay.valueOf()) {
    event.setFullYear(event.getFullYear() + 1);
  }

  return Math.ceil((event.getTime() - thisDay.getTime()) / oneDayMilliseconds);
}

function daysLeftToEventMessage(days) {
  if (days === 0) {
    return '<span><i class="bi-calendar-check"></i> Your event is today!</span>';
  }

  let dayText = " Days";
  if (days === 1) {
    dayText = " Day";
  }
  return `<span><i class="bi-clock"></i> ${days} ${dayText} left</span>`;
}

function printNumberOfDaysLeftToEvent() {
  const dayEl = getElement("day");
  const monthEl = getElement("month");
  const daysLeftEl = getElement("output");

  daysLeftEl.classList.remove("error");

  try {
    const days = daysLeftToEvent(+dayEl.value, +monthEl.value);
    daysLeftEl.innerHTML = daysLeftToEventMessage(days);
  } catch (exception) {
    handleException(exception);
  }

  enableEl("reset");
}
