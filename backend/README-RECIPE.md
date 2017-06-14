-------------
Create Recipe
-------------
API Endpoint: http://ip-addr:3000/api/recipes/

hamza@hamza:~/SEBA-Team11/backend$ curl -H "Content-Type: application/json" -X POST -d '{"title":"Chicken Recipe","directions":["step 1", "step 2", "step 3"],"ingerdients":[{"name":"chicken pieces", "quantity":"1 KG"},{"name":"salt", "quantity":"1 tbsp"}]}' http://localhost:3000/api/recipes/

---------------
Get All Recipes
---------------
API Endpoint: http://ip-addr:3000/api/recipes/

hamza@hamza:~/SEBA-Team11/backend$ curl -X GET http://localhost:3000/api/recipes/

[{"published_date":"2017-06-14T23:30:19.022Z","title":"Chicken Recipe","_id":"5941c70b7d332e55e3fb57ff","__v":0,"ingerdients":[{"name":"chicken pieces","quantity":"1 KG","_id":"5941c70b7d332e55e3fb5801"},{"name":"salt","quantity":"1 tbsp","_id":"5941c70b7d332e55e3fb5800"}],"directions":["step 1","step 2","step 3"]}]

-----------------------------------------------------------------------------
Get Recipe by ID --- NOTE ID IS AUTO GENERATED --- Look for your recipe's ID
-----------------------------------------------------------------------------

API Endpoint: http://ip-addr:3000/api/recipes/<recipe-id>

hamza@hamza:~/SEBA-Team11/backend$ curl -X GET http://localhost:3000/api/recipes/5941c70b7d332e55e3fb57ff

{"published_date":"2017-06-14T23:30:19.022Z","title":"Chicken Recipe","_id":"5941c70b7d332e55e3fb57ff","__v":0,"ingerdients":[{"name":"chicken pieces","quantity":"1 KG","_id":"5941c70b7d332e55e3fb5801"},{"name":"salt","quantity":"1 tbsp","_id":"5941c70b7d332e55e3fb5800"}],"directions":["step 1","step 2","step 3"]}

-----------------
EDIT Recipe title
-----------------
API Endpoint: http://ip-addr:3000/api/recipes/<recipe-id>

hamza@hamza:~/SEBA-Team11/backend$ curl -H "Content-Type: application/json" -X PUT -d '{"title":"Chicken Recipe IS CHANGED","directions":["step 1", "step 2", "step 3"],"ingerdients":[{"name":"chicken pieces", "quantity":"1 KG"},{"name":"salt", "quantity":"1 tbsp"}]}' http://localhost:3000/api/recipes/5941c70b7d332e55e3fb57ff

{"__v":0,"_id":"5941c70b7d332e55e3fb57ff","published_date":"2017-06-14T23:30:19.022Z","title":"Chicken Recipe IS CHANGED","ingerdients":[{"quantity":"1 KG","name":"chicken pieces","_id":"5941c8cf7d332e55e3fb5803"},{"quantity":"1 tbsp","name":"salt","_id":"5941c8cf7d332e55e3fb5802"}],"directions":["step 1","step 2","step 3"]}

------------------
Add Another Recipe
------------------
API Endpoint: http://ip-addr:3000/api/recipes/

 
curl -H "Content-Type: application/json" -X POST -d '{"title":"AWESOME Recipe","directions":["step 1", "step 2", "step 3"],"ingerdients":[{"name":"beef", "quantity":"1 KG"},{"name":"sugar", "quantity":"2 tbsp"}]}' http://localhost:3000/api/recipes/

---------------
Get All Recipes
---------------
API Endpoint: http://ip-addr:3000/api/recipes/

hamza@hamza:~/seba/sebamaster-movie-backend$ curl -X GET http://localhost:3000/api/recipes/

[{"__v":0,"_id":"5941c70b7d332e55e3fb57ff","published_date":"2017-06-14T23:30:19.022Z","title":"Chicken Recipe IS CHANGED","ingerdients":[{"quantity":"1 KG","name":"chicken pieces","_id":"5941c8cf7d332e55e3fb5803"},{"quantity":"1 tbsp","name":"salt","_id":"5941c8cf7d332e55e3fb5802"}],"directions":["step 1","step 2","step 3"]},
{"published_date":"2017-06-14T23:39:24.847Z","title":"AWESOME Recipe","_id":"5941c92c7d332e55e3fb5804","__v":0,"ingerdients":[{"name":"beef","quantity":"1 KG","_id":"5941c92c7d332e55e3fb5806"},{"name":"sugar","quantity":"2 tbsp","_id":"5941c92c7d332e55e3fb5805"}],"directions":["step 1","step 2","step 3"]}]


-------------------
Delete Recipe by ID
-------------------
API Endpoint: http://ip-addr:3000/api/recipes/<recipe-id>

hamza@hamza:~/seba/sebamaster-movie-backend$  curl -X DELETE  http://localhost:3000/api/recipes/5941c70b7d332e55e3fb57ff

Now let's get all recipes to verify deletion
hamza@hamza:~/seba/sebamaster-movie-backend$ curl -X GET http://localhost:3000/api/recipes/
[{"published_date":"2017-06-14T23:39:24.847Z","title":"AWESOME Recipe","_id":"5941c92c7d332e55e3fb5804","__v":0,"ingerdients":[{"name":"beef","quantity":"1 KG","_id":"5941c92c7d332e55e3fb5806"},{"name":"sugar","quantity":"2 tbsp","_id":"5941c92c7d332e55e3fb5805"}],"directions":["step 1","step 2","step 3"]}]

----------
Suggestion
----------
Try using mongo shell for testing purposes. Ref: https://docs.mongodb.com/getting-started/shell/client/

