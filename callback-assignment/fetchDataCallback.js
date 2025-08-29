function fetchDataWithCallback(callback) {
  setTimeout(function () {
    try {
      let error = Math.random() > 0.5; // 50% chance of error

      if (error) {
        throw new Error("Fetch failed");
      }

      // If no error, call the callback
      callback("Data fetched");
    } catch (err) {
      console.error("Error: " + err.message);
    }
  }, 2000);
}

// ✅ Example usage:
fetchDataWithCallback(function (result) {
  console.log(result);
});
