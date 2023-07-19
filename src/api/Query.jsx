export const get = async (url) => {
  return await console.log("Show All", url);
};

export const post = async (url, params) => {
  //console.log("Saved", url, params);
  /*return await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });*/
  return await {
    ok: 200,
    data: params,
  };
};

export const find = async (url) => {
  return await console.log("Show One", url);
};

export const put = async (url) => {
  return await console.log("Update", url);
};

export const destroy = async (url) => {
  return await console.log("Delete", url);
};
