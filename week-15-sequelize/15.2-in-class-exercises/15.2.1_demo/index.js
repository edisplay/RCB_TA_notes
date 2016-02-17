var Sequelize = require('sequelize');

var connection = new Sequelize('test_sql_mod_db', 'root', '1111', {
    // mysql is the default dialect, but you know...
    // for demo purporses we are defining it nevertheless :)
    // so: we want mysql!
    dialect: 'mysql',
    port: 8000,
    host: 'localhost'
});

// var School = connection.define('schools', {
// 	name: Sequelize.STRING
// });

// School.findAll({
//   where: {
//     id: 2
//   }
// }).then(function(result) {
//   if(result) {
//     console.log(result);
//   } else {
//     console.log('err');
//   }
// });

var Note = connection.define('note', {
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        //valiation
        validate: {
            len: {
                //set vailation range and error mesage
                args: [1, 10],
                msg: 'Please enter a title that is not too long and at least one character'
            }
        }
    },
    body: {
        type: Sequelize.TEXT
            //vailatioin function
    }
})

connection.sync({
    //force: true
}).then(function() {

    // Note.create({
    // 	title: 'sup yo',
    // 	body: "this is the body of the text"
    // });

    Note.findOne({
    	where: {
    		id: 1
    	}
    }).then(function(res) {
    	console.log(res.dataValues);
    });

}).catch(function(error) {
    console.log(error)
});
