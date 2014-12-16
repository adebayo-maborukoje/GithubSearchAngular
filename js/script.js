var githubSearch = {
  searchBtn : document.getElementById('submit'),
  searchField:  $('#search'),
  url:  "https://api.github.com/search/users?",
  init: function () {
          $('#submit').val('Please wait...').attr("disable", true);
          githubSearch.searchField.prop("disabled", true);
          var data = {
                      q: githubSearch.searchField.val(),
                      sort:"joined",
                      order:"desc"
          };

          var response = function(user) {
                var displayResult = '<ul>';
                    displayResult += '<p style="color:blue;">RESULTS: '+user.total_count +'</p>';
                    $.each(user.items, function( i , list) {
                      displayResult += '<li class="listItems">';
                      displayResult += '<a href="'+ list.avatar_url +'">';
                      displayResult += '<img src="'+ list.avatar_url +'" class="images"></a>';
                      displayResult += '<p class="name">USERNAME :'+ list.login + '</p>';
                      displayResult += '<p class="name">HUB STATUS :'+ list.type + '</p>';
                      displayResult += '<p class="name"> SCORES: '+ list.score +'</p>';
                      displayResult += '<a href="'+list.html_url+'">Open Profile</a>';
                      displayResult += '</li>';
                    });
                displayResult += '</ul>';
                $('#resultDiv').html(displayResult);
                $('#submit').attr("disabled", false).val("Search");
                githubSearch.searchField.prop("disabled", false); 
          };
       $.getJSON(githubSearch.url, data, response);
  } //end of init function 
}; //end of object

  githubSearch.searchBtn.addEventListener ('click', function(evt) {
    evt.preventDefault();
    githubSearch.init();
 });























/* WORKING EXAMPLE 

var githubSearch = {

$('form').submit(function (e) {
  e.preventDefault();
  var input= $('#search');
  var url=  "https://api.github.com/search/users?";
  var data = {
          q: input.val(),
          sort:"joined",
          order:"desc",
          format:"json"
          }
  var response = function(user) {
       var displayResult = '<ul>';   
    $.each(user.items, function( i , list){
        displayResult += '<li class="listItems">';
        displayResult += '<p class="name">'+ list.login + '</p>';
        displayResult += '<a href=" '+ list.avatar_url +'>';
        displayResult += '<img src="'+ list.avatar_url +'" class="images">';
        // displayResult += '<p class="name"> HAS'+ list.followers_url +' FOLLOWERS</p>';
        displayResult += '<p class="name"> SCORES: '+ list.score +'</p>';
        displayResult += '</li>'
      });
        displayResult += '</ul>';
        $('#resultDiv').html(displayResult); 
  }
 
  $.getJSON(url, data, response)
});

}

githubSearch.init()



*/
