const funcao = async (param1) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof(param1) !== "number") return reject("Precisa ser um numer0");
    return resolve();
  });
  return await promise;
}
funcao(1)