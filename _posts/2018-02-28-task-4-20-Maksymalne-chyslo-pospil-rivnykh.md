---
date: 2018-02-28
title: Максимальне число поспіль рівних
categories:
  - 4. Цикл while
description: "Визначте, яке найбільше число поспіль елементів цієї послідовності дорівнюють один одному"
resources:
  - name: Вихідний код
    link: task/w2/task-4-20-Maksymalne-chyslo-pospil-rivnykh.py
type: Document
---

Дана послідовність натуральних чисел, що завершується числом 0. Визначте, яке найбільше число поспіль елементів цієї послідовності дорівнюють один одному.

## Формат введення

Вводиться послідовність цілих чисел, що закінчується числом 0 (саме число 0 в послідовність не входить, і є ознакою її закінчення).

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
1
7
7
9
1
0
Виведення програми:
2

Тест 2
Вхідні дані:
1
2
3
4
5
6
7
8
9
10
11
0
Виведення програми:
1

Тест 3
Вхідні дані:
4
4
4
4
4
4
4
4
4
4
4
4
4
4
4
0
Виведення програми:
15
```

## Розв'язання

```python
n = 1
nx = 0
pos = -1
prev = -1
while pos != 0:
    pos = int(input())
    if prev != -1:
        if pos == prev:
            n += 1
        else:
            if nx < n:
                nx = n
            n = 1
    prev = pos
print(nx)
```