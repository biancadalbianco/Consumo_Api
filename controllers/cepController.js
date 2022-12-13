const cepModel = require("../models/cepModel");

exports.consultaCep = async (cep) => {
  return cepModel.consultaCep(cep);
};
