---
date: 2018-02-03
title: Тип трикутника
categories:
  - 3. Умовний оператор
description: "Визначити тип трикутника"
resources:
  - name: Вихідний код
    link: task/w2/trenirovka/9-triangle.py
type: Document
---

Дано три сторони трикутника a, b, c. Визначте тип трикутника із заданими сторонами. Виведіть одне з чотирьох слів: rectangular для прямокутного трикутника, acute для гострокутного трикутника, obtuse для тупокутного трикутника або impossible, якщо трикутника з такими сторонами не існує.

## Формат введення

Вводяться три цілих числа.

## Формат виведення

Виведіть відповідь до задачі.  

## Приклади

```bash
Тест 1
Вхідні дані:
3
4
5
Виведення програми:
rectangular

Тест 2
Вхідні дані:
3
5
4
Виведення програми:
rectangular
```

## Розв'язання

```python
a = int(input())
b = int(input())
c = int(input())
a, b, c = sorted([a, b, c])
if a + b <= c:
    print('impossible')
elif c**2 == (a**2) + (b**2):
    print('rectangular')
elif ((a**2) + (b**2) - (c**2)) / (2 * a * b) > 0:
    print('acute')
else:
    print('obtuse')
```