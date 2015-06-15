var format_date = function(){
  var days, months, re, event_date, d, formatted_date, formatted_day, formatted_month;

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  re = /\d{1,2}\/\d{1,2}\/\d{2,4}/;

  try{
    event_date = document.getElementsByClassName('event-date')[0].innerText;

    if (event_date.search(',') == -1){
      if (re.test(event_date)){
        console.log('there is a date')
        d = new Date(event_date);

        formatted_date = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

        console.log(formatted_date)

        document.getElementsByClassName('event-date')[0].innerText = formatted_date;
      }
    }
  }
  catch(e){
    console.log(e)
  }
}

format_date();


//Tuesday, June 30, 2015
