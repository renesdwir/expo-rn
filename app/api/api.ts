const API_URL = "https://parseapi.back4app.com/classes/hotel/bVonXoSUHK";

export const getData = async () => {
  try {
    const headers = {
      "X-Parse-Application-Id": "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
      "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy",
    };
    const response = await fetch(API_URL, {
      method: "GET",
      headers,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
