$('#getTime').click(function(){
 $.getJSON('https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=hackerhoursboise&page=1', function(data){
    var items = [];
    $.each(data, function(key, value){
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    })
  

  items.done(result).fail(handleErr);
  
  })
});

function result(items) {
  $("#result").html(items);
  
}
