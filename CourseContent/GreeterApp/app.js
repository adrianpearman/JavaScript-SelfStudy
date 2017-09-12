//  gets a new object
var g = G$('Adrian', 'Pearman')
// console.log(g)

// using our chainable methods
// g.greet().setLanguage('es').greet(true).log()

// using the objects on a click event of the login button
$('#login').click(function(){
  var loginGtr = G$('Adrian', 'Pearman');
  $('#logindiv').hide();
  loginGtr.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
