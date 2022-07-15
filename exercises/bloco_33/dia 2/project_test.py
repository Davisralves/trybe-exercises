import csv

with open("./inventory.csv") as file:
    raw_data = csv.reader(file)
    header = next(raw_data)
    data = list()
    for row in raw_data:
        data.append(dict(zip(header, row)))
    print(data)
