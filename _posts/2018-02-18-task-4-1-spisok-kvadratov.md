---
date: 2018-02-18
title: Cписок квадратів
categories:
  - 4. Цикл while
description: "Pоздрукуйте всi квадрати натуральних чисел."
resources:
  - name: Вихідний код
    link: task/w2/practic/10-spisok kvadratow.py
type: Document
---

Дане ціле число N, роздрукуйте всi квадрати натуральних чисел, що не перевищують N, в порядку зростання.

## Формат введення

Вводиться натуральне число.

## Формат виведення

Виведіть відповідь до задачі.
## Приклади

```bash
Тест 1
Вхідні дані:
50
Виведення програми:
1 4 9 16 25 36 49 

Тест 2
Вхідні дані:
10
Виведення програми:
1 4 9 

Тест 3
Вхідні дані:
9
Виведення програми:
1 4 9
```

## Розв'язання

```python
n = int(input())
i = 1
while i**2 <= n:
    print(i**2, end=" ")
    i = i + 1
```