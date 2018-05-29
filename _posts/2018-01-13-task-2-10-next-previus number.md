---
date: 2018-01-13
title: Наступне і попереднє
categories:
  - 2. Цілі числа
description: "Вивести числа між яким знаходиться дане"
resources:
  - name: Вихідний код
    link: task/w1/practic/14-next-previus number.py
type: Document
---

Напишіть програму, яка зчитує ціле число і виводить текст, аналогічний наведеному в прикладі (прогалини важливі!). Не можна користуватися конкатенацієй рядків (використовуйте print з декількома параметрами).

## Формат введення

Вводиться ціле число (гарантується, що число знаходиться в діапазоні від -1000 до +1000).

## Формат виведення

Виведіть два рядки, відповідно до зразка.

## Приклади

```bash
Тест 1
Вхідні дані:
179
Виведення програми:
The next number for the number 179 is 180.
The previous number for the number 179 is 178.
```

## Розв'язання

```python
n = int(input())
print("The next number for the number ", n, " is ",  n+1, ".", sep="")
print("The previous number for the number ", n, " is ", n-1, ".", sep="")
```