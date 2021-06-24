import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
    Authorization:
      "bearer oXnOUxX9jOUwdNVs8h_fyCNM5RfFEhJly1Cm9AhEgBxW9n58ydKwP6AQBBnn9ZKIIQ5SQD2xviUoERZ_VBI7Xm_BmakhOx9VgnDcMRcEO67OKPxMA0fMn1TfAJLJYHYx",
  },
});
