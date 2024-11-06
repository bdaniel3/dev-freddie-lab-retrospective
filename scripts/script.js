$("button").click(function(){
  $.getJSON("https://bdaniel3.github.io/timeTangle/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});
