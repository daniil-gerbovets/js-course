
let title = document.getElementById('title_output');
let body = document.getElementById('body_output');
let run_button = document.getElementById('button_run')
var count = 1;
let output_response;

 run_button.addEventListener("click", function() {
//      async function doRequest(){
//          response = await fetch ('https://jsonplaceholder.typicode.com/posts/${count}');
//          response = await response.json();
//          console.log(response);
//  }

 fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
 .then ( function(response) {
     return response.json();
  }).then(
      function(json){
          output_response=json;
      }
  )
  console.log(output_response.body);

});    
