const throttle = (callback, delay) => {
  let debounceTimeout = null;

  return function (event) {
    // Update the stored event
    const storedEvent = event;

    // If there is a debounce timeout, clear it to start over
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout for the specified delay
    debounceTimeout = setTimeout(() => {
      // Execute the callback with the stored event after the delay
      callback(storedEvent);
    }, delay);
  };
};

export { throttle };

