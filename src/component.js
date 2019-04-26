export default (text = "hello world") => {
  const elem = document.createElement("div");
  elem.innerHTML = text;
  elem.className = "pure-button";
  return elem;
};
