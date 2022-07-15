file = open("notas.txt", mode="r")


def get_digit(string):
    empty_string = ""
    for word in string:
        if word.isdigit():
            empty_string += word
    return int(empty_string)


for line in file:
    if int(line.split(" ")[1]) < 6:
        print(line.split(" ")[0])
file.close()
