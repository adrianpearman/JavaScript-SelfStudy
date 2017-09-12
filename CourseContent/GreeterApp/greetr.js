;(function (global, $){
  // adding the ';' is good practoce to prevent shortages with other libraries
  // the new object
  var Greetr = function(firstname, lastname, language){
    return new Greetr.init(firstname, lastname, language);
  }

  // hidden with in the scope of the IIFE and never directly accessible
  var supportedLanguages = ['en', 'es', 'fr', 'it'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    it: 'Ciao'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings,',
    es: 'Saludos,',
    fr: 'Salutations,',
    it: 'Saluti,'
  };

  // logged in messages
  var loggedMessages = {
    en: 'Logged In',
    es: 'Conectado',
    fr: 'Connecté',
    it: 'Connesso'
  }


  Greetr.prototype = {
    fullname: function(){
      return this.firstname + ' ' + this.lastname;
    },
    // validates languages against the supported languages
    validate: function(){
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid Language';
      }
    },

    greeting: function(){
      return greetings[this.language]+ ' '+ this.firstname + '!'
    },
    formalGreeting: function(){
      return formalGreetings[this.language]+ ' '+ this.fullname() + '!'
    },

    greet: function(formal){
      var msg;

      // if the value is undefined or null it will forced into a false value
      if (formal) {
        msg = this.formalGreeting();
      }else {
        msg = this.greeting();
      };

      if (console) {
        console.log(msg);
      }
      // refers to the calling object when executed
      return this;
    },

    log: function(){
      if (console){
        console.log(loggedMessages[this.language]+ ': ' + this.fullname());
      }
      // allows the function to be chainable
      return this;
    },
    setLanguage: function(lang){
      // sets the language
      this.language = lang;
      // validates the anguage
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal){
      // checks if jQuery is loaded
      if (!$) {
        throw 'jQuery not loaded!'
      }

      if (!selector) {
        throw 'Missing jQuery selector'
      }

      // determines the message to be sent
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }else {
        msg = this.greeting();
      }

      // injects the message into the desired spot in the DOM
      $(selector).html(msg)

      // makes it chainable
      return this;
    }
  };

  // the actual object is created here. allows to create a new oject without having to define a new object everytime
  Greetr.init = function(firstname, lastname, language){
    var self = this;
    self.firstname = firstname || '',
    self.lastname = lastname || '',
    self.language = language || 'en'

    self.validate()
  }

  // method borrowed from jQuery. allows us to forgo having ti use 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // attaches the Greetr to the global object with shorthand of $G
  global.Greetr = global.G$ = Greetr;

}(window, jQuery))
// immediately invoking the function will secure the code and allow it to be used by anyone who uses the code further on.
