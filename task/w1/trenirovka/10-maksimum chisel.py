# Напишіть програму, яка зчитує два цілих числа A і B і виводить найбільше значення з них. Числа - цілі від 1 до 1000.

# При вирішенні задачі можна користуватися тільки цілочисельними арифметичними операціями. Не можна користуватися нелінійними конструкціями: ветвлениями, циклами, функціями.

## Формат введення

# Вводяться два числа.

## Формат виведення

# Виведіть відповідь до задачі.

a = int(input())
b = int(input())
k = (a % b) // a * b
l = (b % a) // b * a
n = (a // b) * (b // a) * a
print(k + l + n)