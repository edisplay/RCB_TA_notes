/*var russianDoll = {
  start : function() {
    console.log("Welcome to matryoshka doll a.k.a russian nesting doll~!");
    this.first_layer();
  },
  first_layer : function() {
    console.log("You are at the first layer of the doll, would you like to open another layer? Y/N");
    prompt.get('open', function(err, result) {
      if (result.open == 'Y') {
        this.second_layer();
      }else{
        process.exit();
      };
    });
  },
  second_layer : function() {
    console.log("You are at the second layer of the doll, would you like to open another layer? Y/N");
    prompt.get(['->','open'], function(err, result) {
      if (result.open == 'Y') {
        this.final_layer.third_layer();
      }else{
        process.exit();
      };
    });
  },
  final_layer: {
    third_layer : function() {
      console.log("You are at the third layer of the doll. would you like to close the doll? Y/N");
      prompt.get(['->','close'], function(err, result) {
        if (result.close == 'Y') {
          this.start();
        }else{
          process.exit();
        };
      });
    }
  }
};*/