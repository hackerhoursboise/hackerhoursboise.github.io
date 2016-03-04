function getTime(){
 var apiTime = $.getJSON('https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=hackerhoursboise&only=time&photo-host=public&page=1&fields=&order=time&desc=false&status=upcoming&sig_id=4397595&sig=d0f2e99cd0a29d2587e937191612dcc0c903c5ba&callback=?')

 	apiTime.done(countDown).fail(handleErr);

}


function countDown(apiTime){

    var dataArray = apiTime.results[0];
    var time;
    $.each(dataArray, function(key, value){
      //items.push( "<li id='" + key + "'>" + value + "</li>" );
      time = value;
    })
	//result();
	var utcSeconds = parseInt(time);
    var d = new Date(time);
    //alert(d.toString());

    $(".content").append('<p> Our next meeting on '+ d.toString() +'</p>');

	var nextMeetUp = time;
	setInterval(function() {
		var seconds = Math.floor((nextMeetUp - new Date().getTime()) / 1000),
	    minutes = Math.floor(seconds / 60),
	    seconds = seconds - (minutes * 60),
	    hours = Math.floor(minutes / 60),
	    minutes = minutes - (hours * 60),
	    days = Math.floor(hours / 24),
	    hours = hours - (days * 24);
	if (nextMeetUp >= new Date().getTime()) {
    document.getElementById('timer').innerHTML = "Next Meetup: <span>" + days + "</span> Days <span>" + hours + "</span> Hours <span>" +  minutes + "</span> Minutes";
		}
		else {
				document.getElementById('timer').innerHTML = "Hacker Hours is  happening now! Come on down and join us.";
			}


	}, 1000)
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + jqxhr.status + textStatus + ", " + err);
  console.debug(jqxhr);
}
