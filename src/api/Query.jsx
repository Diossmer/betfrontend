//Show All
export const get = async (url) => {
  return await fetch(url);
};
//Saved
export const post = async (url, params) => {
  return await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};
//Show One
export const show = async (url, id) => {
  return await fetch(`${url}/${id}`);
};
//Update
export const put = async (url, id) => {
  return await console.log("Update", `${url}/${id}`);
};
//Delete
export const destroy = async (url, id) => {
  return await console.log("Delete", `${url}/${id}`);
};
