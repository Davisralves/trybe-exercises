def get_best_stabilite_score(array):
    max_score = 0
    actual_score = 0
    for item in array:
        if item == 1:
            actual_score += 1
        if actual_score > max_score:
            max_score = actual_score
        if item == 0:
            actual_score = 0
    return max_score

print(get_best_stabilite_score([0, 1, 1, 1, 0, 0, 1, 1]))
print(get_best_stabilite_score([1, 1, 1, 1, 0, 0, 1, 1]))
