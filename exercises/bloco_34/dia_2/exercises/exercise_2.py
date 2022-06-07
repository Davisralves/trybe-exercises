from collections.abc import Iterable, Iterator


class Carta(Iterable):
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return '<%%s de %s>' % (self.valor, self.naipe)

    def __iter__(self):
        return Carta(self.valor, self.naipe)

class Baralho(Iterator):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.carta_atual = 0

    def get_card(self):
        return self._cartas[self.carta_atual]

    def __len__(self):
        return len(self._cartas)

    def __next__(self):
        card =  self.get_card()

        if card is not True:
            raise StopIteration()
        
        self.carta_atual += 1
        return card

baralho = Baralho()

for carta in baralho:
    print(carta)