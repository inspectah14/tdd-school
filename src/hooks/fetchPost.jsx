const fetchPost = (url, body) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response;
    })
    .then((response) => response.json())
    .then((response) => console.log("Success:", JSON.stringify(response)))
    .catch((error) => console.error("Error:", error));
};

export default fetchPost;
