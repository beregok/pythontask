## В перший день спортсмен пробіг x кілометрів, а потім він кожен день збільшував пробіг на 10% від попереднього значення.

## За даним числом y визначте номер дня, за який пробіг спортсмена складе не менше y кілометрів.

## Формат введення

## Програма отримує на вхід дійсні числа x і y

## Формат виведення

## Програма повинна вивести одне натуральне число.x = int(input())
y = int(input())
z = 1
while x < y:
    x = x * 1.1
    z = z + 1
print(z)
