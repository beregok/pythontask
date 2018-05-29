---
date: 2018-02-25
title: Сума квадратів
categories:
  - 4. Цикл while
description: "Обчисліть"
resources:
  - name: Вихідний код
    link: task/w2/practic/13-suma kvadratov.py
type: Document
---

За даним натуральним n обчисліть суму $$1² + 2² + 3² + ... + n²$$.
 
## Формат введення

Вводиться натуральне число.
 
## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
1
Виведення програми:
1

Тест 2
Вхідні дані:
2
Виведення програми:
5

Тест 3
Вхідні дані:
3
Виведення програми:
14
```

## Розв'язання №1

```python
now = int(input())
maxNum = now
while now != 0:
    now = int(input())
    if now != 0 and now > maxNum:
        maxNum = now
print(maxNum)
```

## Розв'язання №2

```python
n = int(input())
i = 1
suma = 0
while i <= n:
    suma += i**2
    i += 1
print(suma)
```