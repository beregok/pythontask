# Определите количество четных элементов в последовательности, завершающейся числом 0.
# Формат ввода
# Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит, а служит как признак ее окончания).
# Формат вывода
# Выведите ответ на задачу.
n = -1
z = -1
while n != 0:
    n = int(input())
    if n % 2 == 0:
        z += 1
    else:
        z += 0
print(z)