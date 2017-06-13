### Backend for CookItAll

# Prerequisites

install nodejs and mongodb if you don't have it..


# Setup (before first run)

go to your backend project root folder via command line

```
cd path/to/backend
```

#install node dependencies

```
npm install
```

#set up your database

* create a new directory named "db" in backend directory

```
mkdir db
```

* start the database server 

```
mongod --dbpath /path/to/db-folder
```


#set up environment configuration

copy config.dev_local.js file to config.js file, make sure that config.js
is in config directory.

```
cp config/config.dev_local.js config/config.js
```

# running

start the web server

```
node server.js
```

# manual testing

We will test login module now...

let's look into our mongodb database, run the following command to get
mongodb's interactive shell. 

```
hamza@hamza:~/SEBA-Team11/backend$ mongo
MongoDB shell version: 2.4.9
connecting to: test
> 

```

now let's list all the available databases

```
mza@hamza:~/SEBA-Team11/backend$ mongo
MongoDB shell version: 2.4.9
connecting to: test
> show dbs
cookitall	0.203125GB
local	0.078125GB
```

now let's go back to our mongo shell and look if the record is inserted...

first change the database context to cookitall database.

```
> use cookitall
switched to db cookitall

```

lets list all the tables inside cookitall, in context of mongodb tables are 
called collections 

```
> db.printCollectionStats()
system.indexes
{
	"ns" : "cookitall.system.indexes",
	"count" : 2,
	"size" : 176,
	"avgObjSize" : 88,
	"storageSize" : 8192,
	"numExtents" : 1,
	"nindexes" : 0,
	"lastExtentSize" : 8192,
	"paddingFactor" : 1,
	"systemFlags" : 0,
	"userFlags" : 0,
	"totalIndexSize" : 0,
	"indexSizes" : {
		
	},
	"ok" : 1
}
---
users
{
	"ns" : "cookitall.users",
	"count" : 0,
	"size" : 0,
	"storageSize" : 8192,
	"numExtents" : 1,
	"nindexes" : 2,
	"lastExtentSize" : 8192,
	"paddingFactor" : 1,
	"systemFlags" : 1,
	"userFlags" : 0,
	"totalIndexSize" : 16352,
	"indexSizes" : {
		"_id_" : 8176,
		"username_1" : 8176
	},
	"ok" : 1
}
---

```

you can see the users table, it has 0 records therefore the count is 0

Let's signup a new user..we can do this from command line for testing puposes

```
hamza@hamza:~/SEBA-Team11/backend$ curl -H "Content-Type: application/json" -X POST -d '{"username":"hamza1234","password":"hamza1234"}' http://localhost:3000/api/user/signup
```

now run db.printCollectionStats() in mongo interactive shell, count value 
for users should be 1 now..

let's fetch the record from database 

```
> db.users.find()
{ "password" : "$2a$10$WyejfAVSaWgFnNtFEOjqwO8HDg0bLEM5vHxIQt8ZglBqHoZb7fp86", "username" : "hamza1234", "_id" : ObjectId("593fed6b89f97b46a59130cb"), "__v" : 0 }

```

password is hashed before storing in database, read about the concept of password salt....

