function getFormatDate(d) {
  const month = d.getMonth();
  const day = d.getDate();
  const year = d.getFullYear();

  let m;
  switch (month) {
    case 0:
      m = 'Jan';
      break;
    case 1:
      m = 'Feb';
      break;
    case 2:
      m = 'Mar';
      break;
    case 3:
      m = 'Apr';
      break;
    case 4:
      m = 'May';
      break;
    case 5:
      m = 'Jun';
      break;
    case 6:
      m = 'Jul';
      break;
    case 7:
      m = 'Aug';
      break;
    case 8:
      m = 'Sep';
      break;
    case 9:
      m = 'Oct';
      break;
    case 10:
      m = 'Nov';
      break;
    case 11:
      m = 'Dec';
      break;
    default:
      m = 'Err';
      break;
  }

  const dayString = String(day);
  let lastNumber;

  if (dayString.length === 2) {
    if (dayString < 20 && dayString > 10) {
      lastNumber = dayString;
    } else {
      lastNumber = dayString[dayString.length - 1];
    }
  } else {
    lastNumber = dayString[dayString.length - 1];
  }

  let ordinal;
  switch (lastNumber) {
    case '1':
      ordinal = 'st';
      break;
    case '2':
      ordinal = 'nd';
      break;
    case '3':
      ordinal = 'rd';
      break;
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    case '10':
    case '11':
    case '12':
    case '13':
    case '14':
    case '15':
    case '16':
    case '17':
    case '18':
    case '19':
    case '20':
      ordinal = 'th';
      break;
    default:
      console.log('Error Occured.');
      break;
  }

  const hour = d.getHours();
  const minutes = d.getMinutes();
  let min;
  minutes < 10 ? min = '0' + String(d.getMinutes()) : min = minutes;

  let amPm;
  hour > 12 ? amPm = 'am' : amPm = 'pm';
  const str = String(`${m} ${day}${ordinal}, ${year} at ${hour}:${min}${amPm}`);
  return str;
}

module.exports = getFormatDate;
