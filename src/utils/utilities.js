let idCounter = 0;

export function generateId() {
  idCounter++;
  return idCounter.toString();
}
export function getNewExpirationTime(){
// Get the current date and time
const currentDate = new Date();
// Add 15 seconds to the current date and time
const expirationDate = new Date(currentDate.getTime() + 15 * 1000); // 15 seconds in milliseconds
return expirationDate;
}