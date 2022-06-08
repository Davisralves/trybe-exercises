from collections.abc import Iterable, Iterator


class Pow_of_Iterator(Iterator):
    def __init__(self, number, setinel):
        self.number = number
        self.expoent = 0
        self.setinel = setinel

    def __next__(self):
        if self.expoent > self.setinel:
            raise StopIteration()
        actualNumber = self.number**self.expoent
        self.expoent += 1
        return actualNumber


class Pow(Iterable):
    def __init__(self, number, setinel):
        self.number = number
        self.expoent = 0
        self.setinel = setinel

    def __iter__(self):
        return Pow_of_Iterator(self.number, self.setinel)


pow_of_two = Pow(2, 10)
for number in pow_of_two:
    print(number)
