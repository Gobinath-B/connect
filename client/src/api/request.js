/** @format */
const BASE_URL = import.meta.env.VITE_API_KEY;
console.log("BASE_URL==>", BASE_URL);
export const apiRequest = async (path, data, method) => {
     const response = await fetch(`${BASE_URL}/${path}`, {
          method: method,
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
     });
     const json = await response.json();
     return json;
};
