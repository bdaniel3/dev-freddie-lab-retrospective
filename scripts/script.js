$("button").click(function(){
  $.getJSON("https://barrycumbie.github.io/barrycumbie/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});


// $(document).ready(function() {
//   $('#fetch-button').click(function() {
//     $.ajax({
//       url: 'data.json', // Local JSON file
//       type: 'GET',
//       dataType: 'json',
//       success: function(response) {
//         // Clear any previous data
//         $('#data-container').empty();

//         // Append each item from the JSON to the data container
//         response.forEach(item => {
//           $('#data-container').append(
//             <div class="item">
//               <h3>${item.title}</h3>
//               <p>${item.description}</p>
//             </div>
//           );
//         });
//       },
//       error: function(error) {
//         console.error("Error fetching data:", error);
//         $('#data-container').append('<p>Failed to load data.</p>');
//       }
//     });
//   });
// });