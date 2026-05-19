// ==============================
// Save Data to Local Storage
// ==============================
export const setLocalStorage = (key, value) => {
  try {
    // Convert object/array into JSON string
    const serializedValue = JSON.stringify(value);

    // Save into localStorage
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.log("Error saving to localStorage:", error);
  }
};

// ==============================
// Get Data from Local Storage
// ==============================
export const getLocalStorage = (key) => {
  try {
    // Get stored value
    const item = localStorage.getItem(key);

    // If no value exists
    if (!item) {
      return null;
    }

    // Convert JSON string back to JS object
    return JSON.parse(item);
  } catch (error) {
    console.log("Error getting localStorage data:", error);

    return null;
  }
};

// ==============================
// Remove Single Item
// ==============================
export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing localStorage item:", error);
  }
};

// ==============================
// Clear Entire Local Storage
// ==============================
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("Error clearing localStorage:", error);
  }
};
