import random
with open("words.txt", mode="r") as file:
  words = file.read().splitlines()
  print(words)
  trys = 3
  sorted_word = random.choice(words)
  scrambled_word = "".join(random.sample(sorted_word, len(sorted_word)))
  while(trys > 0):
    tryedWord = input(f"What is this word ? {scrambled_word} \n")
    if(tryedWord == sorted_word):
      print("You Win")
      trys = 0
    trys -= 1
    if(trys == 0):
      print("You Lose")