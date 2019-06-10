$.getJSON('https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json', function(data) {
    //data is the JSON string
    
data.forEach(function (x) {
  document.getElementById('content').innerHTML +=
    '<div class="content">' + x.Location + '</div>';
})
});

// $.ajax({
//     url: 'https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });



