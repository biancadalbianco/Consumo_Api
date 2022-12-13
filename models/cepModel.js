const { default: axios } = require("axios");

async function consultaCep(cep) {
  var data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return data;
}

module.exports = { consultaCep };
