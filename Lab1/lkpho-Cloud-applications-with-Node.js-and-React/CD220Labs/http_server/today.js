// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
    return new Date(aestTime); // Convert the formatted string back to a Date object
};