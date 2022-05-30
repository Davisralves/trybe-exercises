import re


def validate_email(email):
    regex = "^[a-z0-9]+[@]\w+[.]\w{2,3}$"
    if re.search(regex, email) is None:
        raise Exception("Email invalido")
    else:
        print("Email Valido")


validate_email("davi@gmail.com")
