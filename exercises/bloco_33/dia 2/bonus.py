import json
import random

with open("pokemons.json") as file:
  pokemons = json.load(file)["results"];
  pokemons_names = [pokemon["name"] for pokemon in pokemons]

end_game = False
errors = 0
sorted_pokemon = random.choice(pokemons_names)
while end_game == False:
  if errors != 0: print(f"O nome do pokemon começa com as seguintes letras: {sorted_pokemon[0:errors]}")
  try_pokemon = input('Qual é o pokemon ?')
  if try_pokemon == sorted_pokemon:
    print("You Win")
    end_game = True
  else:
    print("it is wrong !")
    errors += 1