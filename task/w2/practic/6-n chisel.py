# Дано три цілих числа. Визначте, скільки серед них збігаються. Програма повинна вивести одне з чисел: 3 (якщо все збігаються), 2 (якщо два збігається) або 0 (якщо все числа різні).
#
# ## Формат введення
#
# Вводяться три цілих числа.
#
# ## Формат виведення
#
# Виведіть відповідь до задачі.
a = int(input())
b = int(input())
c = int(input())
if (a == b) and (a == c) and (b == c):
    print(3)
elif (a == b) or (a == c) or (b == c):
    print(2)
else:
    print(0)
