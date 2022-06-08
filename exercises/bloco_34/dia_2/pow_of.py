from collections.abc import Iterator


class Pow_of(Iterator):
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


pow_of_two = Pow_of(2, 10)

for number in range(0, 11, 1):
    print(pow_of_two.__next__())

pow_of_three = Pow_of(3, 5)

for number in pow_of_three:
    print(number)

pow_of_four_iterable = iter(Pow_of(4, 3))
print(next(pow_of_four_iterable))
print(next(pow_of_four_iterable))
print(next(pow_of_four_iterable))
print(next(pow_of_four_iterable))
