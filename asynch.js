/**Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.

You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.


You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects 
if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
*/


// Asynchronous function to log a message after a delay
async function logMessageWithDelay(message, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  console.log(message);
}

// Array of user IDs
const userIds = [1, 2, 3, 4, 5];

// Asynchronous function to fetch and log user data one by one
async function fetchAndLogUserData() {
  for (const id of userIds) {
    try {
      const userData = await getUserData(id);
      console.log(userData);
    } catch (error) {
      console.error(`Error fetching data for user ${id}: ${error.message}`);
    }
  }
}

// You have an asynchronous function performTask()
// that returns a Promise. The Promise resolves if 
//the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a
// custom success message if the task is successful, 
//and a custom error message if there's an error.
async function performTaskWithLogging() {
  try {
    await performTask();
    console.log('Task completed successfully!');
  } catch (error) {
    console.error('An error occurred while performing the task:', error.message);
  }
}


logMessageWithDelay('Delayed message', 2000); 
fetchAndLogUserData(); 
performTaskWithLogging(); 


// Asynchronous function to perform a task and log custom messages
async function performTaskWithLogging() {
  try {
    await performTask();
    console.log('Task completed successfully!');
  } catch (error) {
    console.error('An error occurred while performing the task:', error.message);
  }
}

performTaskWithLogging(); 

