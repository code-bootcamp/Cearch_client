export function getRecentDate(type) {
  var date = new Date()
  var result

  if (type === '어제') {
    var date2 = date.getTime() - 1 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  } else if (type === '칠일전') {
    var date2 = date.getTime() - 7 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  } else if (type === '육일전') {
    var date2 = date.getTime() - 6 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  } else if (type === '오일전') {
    var date2 = date.getTime() - 5 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  } else if (type === '사일전') {
    var date2 = date.getTime() - 4 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  } else if (type === '삼일전') {
    var date2 = date.getTime() - 3 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  } else if (type === '이틀전') {
    var date2 = date.getTime() - 2 * 24 * 60 * 60 * 1000
    date.setTime(date2)
  }
  //    else if(type == "최근14일전") {
  //       var date2 = date.getTime() - (14 * 24 * 60 * 60 * 1000);
  //       date.setTime(date2);
  //   } else if(type == "최근30일전") {
  //       var date2 = date.getTime() - (30 * 24 * 60 * 60 * 1000);
  //       date.setTime(date2);
  //   } else if(type == "이번주첫째날") {
  //       var date2 = new Date().setDate(date.getDate()-date.getDay());
  //       date.setTime(date2);
  //   } else if(type == "지난주첫째날") {
  //       var date2 = new Date().setDate(date.getDate()-date.getDay()-7);
  //       date.setTime(date2);
  //   } else if(type == "지난주마지막날") {
  //       var date2 = new Date().setDate(date.getDate()-date.getDay()-1);
  //       date.setTime(date2);
  //   } else if(type == "이번달첫일") {
  //       var date2 = new Date(date.getFullYear(), date.getMonth(), 1);
  //       date.setTime(date2);
  //   } else if(type == "지난달첫일") {
  //       var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth() , 1);
  //       var lastMonth = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1));
  //       var date2 = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
  //       date.setTime(date2);
  //   } else if(type == "지난달마지막일") {
  //       var firstDayOfMonth = new Date(date.getFullYear(), date.getMonth() , 1);
  //       var lastMonth = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1));
  //       date.setTime(lastMonth);
  //   }

  result =
    date.getFullYear() +
    '.' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '.' +
    ('0' + date.getDate()).slice(-2)
  const OneWeekDate = result.substring(2)
  return OneWeekDate
}
