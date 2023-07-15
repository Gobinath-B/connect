/** @format */

export const apiRequest = async (path, data, method) => {
     const response = await fetch(`${BASE_URL}/${path}`, {
          method: method,
          headers: {
               "Content-Type": "application/json",
          },
          body: method === "GET" ? JSON.stringify(data) : null,
     });
     const json = await response.json();
     return json;
};
