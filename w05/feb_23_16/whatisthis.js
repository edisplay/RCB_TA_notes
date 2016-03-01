
    var outside = function() {
      console.log(this); //1. what will be console logged out? What is *this* in this case?
    };

    $('#button').on('click', function(){
      console.log(this); //2. what will be console logged out? What is *this* in this case?
      //'this' is the button. what will display in the console is the html of the button with id of "button"
    });

    var bob = {
      firstName: "Bob",
      lastName: "Smith",
      whoIsBob: function() {
      console.log(this);
      },
      fullName: function() {
        console.log(this.firstName + " " + this.lastName); //put something inside of here so that this works
      }
    };

    //3. what will the console log output if this function gets called:
    bob.whoIsBob();

    //4. fill in the code inside the fullName function above so that the below code console.logs out Bob's full name using the firstName and lastName properties

    bob.fullName();

    //5. Fill in the code below to make the theChosenOne function log "Keanu Reeves".

    //put code here
    //and put code here

    //don't touch any of the code below!!
    var theChosenOne = function() {
      console.log(this.firstName + " " + this.lastName);
    };

    theChosenOne();







