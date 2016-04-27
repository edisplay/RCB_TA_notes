server could exist in its own repo and then there's front-end, which could be it's own repo. server is just making itself accessible to the front-end

jquery is pulling data from the server for us. but server doesn't care if it's jquery or whatever else. jquery is still on the front-end but it's querying the server.

the only difference now is you're making the code (the API) that communicates with the server. 

not only can we pull data from a server database, can also push data, which is where the concept of POST comes from.

routing: directing where you want to go based on URL. it's the users map 

user will fill out the reservation and it will add data to your server.

STEPS FOR RESTAURANT
1. front-end needs to be done 
	3 pages - table, reservation, admin
2. start the server
	- routing (both for html displays and the json API)
	- handling logic associated with POST 
	- store the data somewhere (in an array/json format)
3. write JS that has AJAX calls out


back-end programming is pretty straightforward. lots of copying and pasting. then why do they get paid more? 
express documentation is only about 20 routes. pretty cool.
http://expressjs.com/en/api.html

