# Дано два цілих числа. Програма повинна вивести число 1, якщо перше число більше другого, число 2, якщо друге більше першого або число 0, якщо вони рівні.

## Формат введення

# Вводяться два числа.

## Формат виведення

# Виведіть відповідь до задачі.

## Примітка

# Цю задачу бажано вирішити з використанням каскадних інструкцій if ... elif ... else.


a = int(input())
b = int(input())
if a > b:
    print(1)
elif a < b:
    print(2)
else:
    print(0)
