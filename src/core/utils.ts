export const getValue = (id: any) => {
  // @ts-ignore
  return document.getElementById(id).value;
};

export const setValue = (params = {}) => {
  //@ts-ignore
  var { id, value } = { ...params };
  //@ts-ignore
  document.getElementById(id).value = value;
};
