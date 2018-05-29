---
date: 2018-01-06
title: Останнє число
categories:
  - 2. Цілі числа
description: "Вивести останню цифру числа"
resources:
  - name: Вихідний код
    link: task/w1/practic/6-ostanne chislo.py
type: Document
---

Дано натуральне число. Виведіть його останню цифру.

## Формат введення

Вводиться єдине ціле невід'ємне число (гарантується, що воно не перевищує 10000).

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
179
Виведення програми:
9
```

## Розв'язання

```python
n = int(input())
print(n % 10)
```