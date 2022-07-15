def fizz_buzz(number):
    fizz_buzz_list = list()
    for index in range(1, number + 1, 1):
        if index % 3 == 0 and index % 5 == 0:
            fizz_buzz_list.append("FizzBuzz")
        elif index % 3 == 0:
            fizz_buzz_list.append("Fizz")
        elif index % 5 == 0:
            fizz_buzz_list.append("Buzz")
        else:
            fizz_buzz_list.append(index)
    return fizz_buzz_list


print(fizz_buzz(15))
