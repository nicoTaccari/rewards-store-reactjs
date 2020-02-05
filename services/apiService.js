import fetch from "isomorphic-unfetch";

const baseUrl = "https://aerolab-challenge.now.sh/";
// const baseUrl =
//   "https://private-anon-0c930830a3-aerolabchallenge.apiary-proxy.com/";

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZjZDQ0ZTgzYTNjMjAwNmRmOTUzM2IiLCJpYXQiOjE1NzY4NTA1MTF9.UvSUoJJCOWU8PvShXlpuHRTnex9mNu7qZ5vMn16mWeY"
};

const ApiService = {
  get: async url => {
    return await fetch(`${baseUrl}` + url, {
      headers: apiHeaders,
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .catch(err => err);
  },
  post: async (url, body) => {
    return await fetch(`${baseUrl}` + url, {
      headers: apiHeaders,
      method: "POST",
      body: JSON.stringify(body)
    })
      .then(res => {
        return res.json();
      })
      .catch(err => err);
  }
};

export default ApiService;
