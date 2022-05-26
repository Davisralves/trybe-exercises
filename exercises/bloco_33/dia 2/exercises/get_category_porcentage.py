import json
import csv

with open("books.txt") as file:
  books = json.load(file)
  totalBooks = len(books)
  categories = {}
  for book in books:
    for categorie in book["categories"]:
      if categorie not in categories:
        categories[categorie] = 1
      categories[categorie] += 1

# fonte: https://pythonguides.com/python-dictionary-to-csv/#:~:text=In%20Python%20to%20convert%20a,works%20like%20the%20dictwriter().

with open('books.csv', 'w', newline='') as csvfile:
  header_key = ["category", "porcentage"]
  new_value = csv.DictWriter(csvfile, fieldnames=header_key)

  for new_key in categories:
    new_value.writerow({'category': new_key, "porcentage": categories[new_key] / totalBooks}) 