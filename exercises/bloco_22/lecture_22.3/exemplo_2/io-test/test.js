const { expect } = require("chai");
const sinon = require("sinon");
const { getNumberSignal } = require("./func1");
const fs = require('fs');
const  writeInFile  = require("./func2");

describe("Testa função que retorna ao sinal do número", () => {
	it("Número é positivo", () => {
		expect(getNumberSignal(4)).to.equal("Positivo");
	});
	it("Número é negativo", () => {
		expect(getNumberSignal(-1)).to.equal("Negativo");
	});
	it("Número é 0", () => {
		expect(getNumberSignal(0)).to.equal("Neutro");
	});
	it("Valor passado é de um tipo diferente de Number", () => {
		expect(getNumberSignal("Olá, sou uma string")).to.equal(
			"Valor precisa ser um número"
		);
	});
});

describe.only("Testa função que recebe valor e escreve em um arquivo e returna 'Ok'", () => {
  it("escreve em arquivo", () => {
    expect(writeInFile.writeInFile("arquivo1.txt", "olá")).to.equal("Ok");
  });
  it("escreve em arquivo que não existe", () => {
    expect(writeInFile("arquivo_que_nao_existe.txt", "olá")).to.equal("Arquivo não existe");
  });
});
