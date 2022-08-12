data = JSON.stringify(data);

const parent = "game";
const div = document.getElementById(parent);
div.attributes.data.value = data;
