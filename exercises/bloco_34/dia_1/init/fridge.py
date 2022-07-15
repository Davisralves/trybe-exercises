class Fridge:
    def __init__(self, color, price):
        self.color = color
        self.price = price
        self.__on = False

    def turn_on(self):
            self.__on = True

    def turn_of(self):
            self._on = False

    def __str__(self):
        return f"""
        - color: {self.color}
        - price: {self.price}
        - fridge on: {self.__on}
        """


class People:
    def __init__(self, name, money):
        self.name = name
        self.money = money
        self.fridge = None

    def buy_fridge(self, fridge: Fridge):
        if self.money >= fridge.price:
            self.money -= fridge.price
            self.fridge = fridge

    def __str__(self):
        return f"""
        - name: {self.name}
        - money: {self.money}
        - fridge: {self.fridge}
        """


davi = People("Davi", 1500)
print(davi)
fridge = Fridge('Blue', 1000)
print(fridge)
davi.buy_fridge(fridge)
print(davi)
fridge.turn_on()
print(fridge, davi)