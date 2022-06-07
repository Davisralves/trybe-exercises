ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")


class Log:
    def __init__(self, message):
        self.message = message

    def dispara_log(self):
        return self.message


class LogWithColor:
    def __init__(self, Log, color):
        self.color = color
        self.Log = Log

    def __str__(self):
        return self.color + self.Log + "\033[0m"


class LogError(Log):
    def __init__(self, log_with_color, message):
        self.Vermelho = "\033[91m"
        self.log_with_color = log_with_color
        self.message = message

    def dispara_log(self):
        print(self.log_with_color(self.message, self.Vermelho))


LogError(LogWithColor, "Olá mundo").dispara_log()
