## Дано три числа. Упорядкуйте їх у порядку неспадання. Програма повинна зчитувати три числа a, b, c, потім програма повинна змінювати їх значення так, щоб стали виконані умови a ≤ b ≤ c, потім програма виводить трійку a, b, c.

## Формат введення

## Вводяться три числа.

## Формат виведення

## Виведіть відповідь до задачі.

# Спосіб 1

#  = int(input())
#  = int(input())
#  = int(input())
# f a <= b <= c:
#    print(a, b, c)
# lif b <= a <= c:
#    print(b, a, c)
# lif c <= b <= a:
#    print(c, b, a)
# lif c <= a <= b:
#    print(c, a, b)
# lif a <= c <= b:
#    print(a, c, b)
# lse:
#    print(b, c, a)

# Спосіб 2

a = int(input())
b = int(input())
c = int(input())
if a > b:
    a = a + b
    b = a - b
    a = a - b
if b > c:
    b = b + c
    c = b - c
    b = b - c
if a > b:
    a = a + b
    b = a - b
    a = a - b
print(a, b, c)