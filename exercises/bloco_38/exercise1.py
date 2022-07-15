# Você receberá uma lista de palavras e uma string. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.


def possible_words_by_string(array, string):
    possible_words = []
    for word in array:
        if len(word) > len(string):
            continue
        current_string = string
        for letter in word:
            new_string = current_string.replace(letter, "", 1)
            if current_string == new_string:
                break
            else:
                current_string = new_string
        if len(string) - len(word) == len(current_string):
            possible_words.append(word)
    return possible_words


words = ["cat", "bt", "hat", "tree"]
chars = "atach"
print(possible_words_by_string(words, chars))
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(possible_words_by_string(words, chars))
