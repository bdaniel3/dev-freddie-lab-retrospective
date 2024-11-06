$("button").click(function(){
  $.getJSON("https://raw.githubusercontent.com/bdaniel3/dev-freddie-lab-retrospective/refs/heads/main/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});
