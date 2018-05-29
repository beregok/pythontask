---
date: 2018-01-27
title: Максимум трьох чисел
categories:
  - 3. Умовний оператор
description: "Зчитує три цілих числа і виводить найбільше з них."
resources:
  - name: Вихідний код
    link: task/w2/practic/3-max is tree chisel.py
type: Document
---

Дано три цілих числа. Знайдіть найбільше з них (програма повинна вивести рівно одне ціле число).

Яке найменше число операторів порівняння (>, <,> =, <=) необхідно для вирішення цього завдання?

## Формат введення

Вводиться три цілих числа.

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
1
2
3
Виведення програми:
3

```

## Розв'язання

```python
a = ina = int(input())
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
```