export const getDataFromLocal = (key, defaultValue) => {
    const keyCheck = localStorage.getItem(key);
    if (keyCheck) {
      return JSON.parse(keyCheck);
    } else {
      return defaultValue;
    }
     };
  