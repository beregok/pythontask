---
date: 2018-02-28
title: Кількість елементів, рівних максимуму
categories:
  - 4. Цикл while
description: "Визначте, яка кількість елементів цієї послідовності, рівних її найбільшому елементу."
resources:
  - name: Вихідний код
    link: task/w2/practic/16-number max posledovalnosty.py
type: Document
---

Послідовність складається з натуральних чисел і завершується числом 0. Визначте, яка кількість елементів цієї послідовності, рівних її найбільшому елементу.

## Формат введення

Вводиться послідовність цілих чисел, що закінчується числом 0 (саме число 0 в послідовність не входить, а служить ознакою її закінчення).

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
1
7
9
0
Виведення програми:
1

Тест 2
Вхідні дані:
1
3
3
1
0
Виведення програми:
2

Тест 3
Вхідні дані:
1
2
3
4
5
0
Виведення програми:
1
```

## Розв'язання

```python
a = int(input())
max1 = a
max2 = -1
while a != 0:
    a = int(input())
    if a > max1:
        max2 = max1
        max1 = a
    elif a > max2:
        max2 = a
print(max2)
```