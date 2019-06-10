# Friend-finder
## A mock social media friend -finder app

### Overview
  Friend-finder is a mock social media app that will connect you to a new friends based on survery questions answered, then 
  compared with that of others friends in the local database
  
#### Technologies and process
  1. _Bootstrap_ - used for UI
  2. _jquery_ - used to grab the input values from the survery
  3. _Express_ - used to store our friendsList objects as well as route back and forth from the local server database
  
  The app opens and the user is prompted to take a survery to find friends who match closely with their own answers. Once the 
  user has finished the survey, their answers are collected by jquery and stored as an object in our database using express.
  The app will take the current users scores and compare their scores with others already in the database. After looping 
  through the friendList our app will calculate the best match and return to the current user a new Friend.
  
  
