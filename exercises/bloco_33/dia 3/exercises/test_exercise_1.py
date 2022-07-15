from exercise_1 import fizz_buzz


def test_fizz_buzz_return_a_list_with_two_itens():
    "Ao receber o valor 2 retorna a uma lista como valor 1 e 2"
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_return_a_list_with_10_itens():
    "Ao receber o valor 10 retorna uma lista com 10 itens como esperado"
    assert len(fizz_buzz(10)) == 10
    'O item 3 do array é igual a string "Fizz"'
    assert fizz_buzz(10)[2] == "Fizz"
    'O item 5 do array é igual a string "Buzz"'
    assert fizz_buzz(10)[4] == "Buzz"


def test_fizz_buzz_return_a_list_with_15_itens():
    "Ao receber o valor 15 retorna uma lista com 15 itens como esperado"
    assert len(fizz_buzz(15)) == 15
    'O item 3 do array é igual a string "Fizz"'
    assert fizz_buzz(15)[2] == "Fizz"
    'O item 5 do array é igual a string "Buzz"'
    assert fizz_buzz(15)[4] == "Buzz"
    'O item 15 do array é igual a string "FizzBuzz"'
    assert fizz_buzz(15)[14] == "FizzBuzz"
