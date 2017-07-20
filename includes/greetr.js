// Greet Libarary created by intmating jQuery
(function (global, $) {
    // Main Object for the libraray
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    // list of supportive Languages
    var supportedLanguages = ['en', 'es'];

    // Log Messages according to the language
    var logMessages = {
        'en' : 'Logged In',
        'es' : 'Logged In in Spanish',
    }
    
    // Greetings Messages according to the language
    greetings = {
        'en' : 'Hello',
        'es' : 'Hola'
    }

    // Formal Greetings Messages according to the language
    formalGreetings = {
        'en' : 'Greetings',
        'es' : 'Greetings in Spanish'
    }

    /**
     * Adding the methods to the prototype. 
     * We will inherit them into them into Greetr.init's prototype.
     */
    Greetr.prototype = {
        // get the fullName
        fullName : function() {
            return this.firstName + ' ' + this.lastName;
        },

        // Validate the languages
        validate : function() {
            if(supportedLanguages.indexOf(this.language) === -1){
                throw "Language input Invalid";
            }
        },

        // get the greetings message
        greeting : function() {
            return greetings[this.language] + ' ' + this.firstName;
        },

        // get the formal greetings message
        formalGreeting : function() {    
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        // get the greet text based on the condition
        greet : function(formal) {
            var msg = '';

            if(formal){
                msg = this.formalGreeting();                
            } else {
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }
            return this;
        },

        // For logging and Debugging
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ' : '+ this.fullName());
            }
            return this; 
        },

        // Update the language as per the input provided as parameter
        setLang:  function(language){
            this.language = language;
            this.validate();
            return this;
        },

        // Use the JQuery Lib to display the Greeting message on HTML
        HTMLGreetings: function(selector, formal){
            var msg = '';
            if(formal){
                msg = this.formalGreeting();                
            } else {
                msg = this.greeting();                
            }
            // Setting the HTML as the greeting message
            $(selector).html(msg);
            return this;
        }        
    };

    // Actual Init object. refrenced the concept from jQuery
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }
    // Add the protoype of Gretter into Greetr Init
    Greetr.init.prototype = Greetr.prototype;
    
    // Setting the global objects.
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));