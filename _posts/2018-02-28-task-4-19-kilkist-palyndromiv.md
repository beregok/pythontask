---
date: 2018-02-28
title: Kількість паліндромів
categories:
  - 4. Цикл while
description: "Вивести кількість паліндромів"
resources:
  - name: Вихідний код
    link: task/w2/task-4-19-kilkist-palyndromiv.py
type: Document
---

Назвемо число паліндромом, якщо воно не змінюється при перестановці його цифр у зворотному порядку. Напишіть програму, яка за заданою кількістю K виводить кількість натуральних палиндромiв, що не перевищують K.

## Формат введення

Визначена однина K ($$1 ≤ K ≤ 100000$$).

## Формат виведення

Необхідно вивести кількість натуральних палиндромiв, що не перевищують K.

## Приклади

```bash
Тест 1
Вхідні дані:
1
Виведення програми:
1

Тест 2
Вхідні дані:
100
Виведення програми:
18

Тест 3
Вхідні дані:
10
Виведення програми:
9
```

## Розв'язання

```python
k = int(input())
i = 1
ii = 0
while i <= k:
    a = i
    n = 0
    while a > 0:
        z = a % 10
        a //= 10
        n *= 10
        n += z
    if n == i:
        ii += 1
    i += 1
print(ii)
```