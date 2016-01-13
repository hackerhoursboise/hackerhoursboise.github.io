function getTime(){
 $.getJSON('https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=hackerhoursboise&only=time&photo-host=public&page=1&fields=&order=time&desc=false&status=upcoming&sig_id=4397595&sig=d0f2e99cd0a29d2587e937191612dcc0c903c5ba&callback=?', function(data){
    var dataArray = data.results[0];
    var time;
    $.each(dataArray, function(key, value){
      //items.push( "<li id='" + key + "'>" + value + "</li>" );
      time = value;
    })
	//result();
	var utcSeconds = parseInt(time);
    var d = new Date(time); 
    //alert(d.toString());
    $(".daycontent").append('<p> next meeting on '+ d.toString() +'</p>');
  })
}