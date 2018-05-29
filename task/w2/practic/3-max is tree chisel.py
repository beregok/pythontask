# Дано три цілих числа. Знайдіть найбільше з них (програма повинна вивести рівно одне ціле число).

# Яке найменше число операторів порівняння (>, <,> =, <=) необхідно для вирішення цього завдання?

## Формат введення

# Вводиться три цілих числа.

## Формат виведення

# Виведіть відповідь до задачі.

a = int(input())
b = int(input())
c = int(input())
if a > b and a > c:
    print(a)
elif b > a and b > c:
    print(b)
elif c > a and c > b:
    print(c)
elif a == b and b > c:
    print(b)
elif a == b and b < c:
    print(c)
elif c == b and c > a:
    print(c)
elif c == b and c < a:
    print(a)
elif a == c and c > b:
    print(a)
elif a == c and c < b:
    print(b)
else:
    print(a)
