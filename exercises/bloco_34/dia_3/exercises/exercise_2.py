from abc import ABC, abstractmethod


class Alarm:
    def __init__(self):
        self.__local_web = []

    def add_item_to_web(self, item):
        self.__local_web.append(item)

    def wake_up(self):
        print("Alarme Toca !!!")
        for item in self.__local_web:
            item.action()


class Item(ABC):
    @abstractmethod
    def action(self):
        pass


class Lamp(Item):
    def __init__(self, *, id):
        self.id = id

    def action(self):
        print("Acendendo Lampada...")


class Cofee_machine(Item):
    def __init__(self, *, id):
        self.id = id

    def action(self):
        print("Fazendo Café...")


class Computer(Item):
    def __init__(self, *, id):
        self.id = id

    def action(self):
        print("Ligando Computador...")


alarm = Alarm()
alarm.add_item_to_web(Lamp(id="29jdas"))
alarm.add_item_to_web(Cofee_machine(id="29fdas"))
alarm.add_item_to_web(Computer(id="39kdas"))
alarm.wake_up()
