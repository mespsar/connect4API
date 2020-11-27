I have used postman for testing and have included the screenshots of the testing.
Url:  https://tranquil-castle-05262.herokuapp.com/start
When a get request in done on the above given URL it will return ("Ready!")


And subsequently doing POST requests with column value also being passed in the post request as a body parameter will result in a coin  being dropped in that column in my mongoDbAtlas database
and after that my code will put it in the right place and do all the necessary computation and return the appropriate result such as valid ,invalid and Winners.
Doing a get request to above given url will reset and restart the game fresh.

Since 0 index has been used colmn values are 0 1 2 3 4 5 6
and using any other value for column will result in invalid 