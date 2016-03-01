var makeDate = function() {
    //custom date maker
    var d = new Date();
    var formatedDate = "";
    formatedDate = formatedDate + (d.getMonth() + 1) + "_";
    formatedDate = formatedDate + d.getDate() + "_";
    formatedDate = formatedDate + d.getFullYear();
    //console.log(formatedDate);
    return formatedDate;
};

module.exports = makeDate;