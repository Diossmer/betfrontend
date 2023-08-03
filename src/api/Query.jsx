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

/**
 * 
 * 
 * export const put = async (url, id) => {
  return await console.log("Update", `${url}/${id}`);
};

// Actualización para reemplazar comillas simples por comillas dobles
export const put = async (url, id) => {
  const updatedUrl = `${url}/${id}`;
  const updatedObject = JSON.stringify({
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params).replace(/'/g, '"'), // Reemplaza todas las comillas simples por comillas dobles
  });

  return await console.log("Update", updatedUrl, updatedObject);
};
 */
