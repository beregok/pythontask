---
date: 2018-01-09
title: Сума цифр тризначного числа
categories:
  - 2. Цілі числа
description: "Знайдіть суму цифр тризначного числа."
resources:
  - name: Вихідний код
    link: task/w1/practic/10-suma cifr 3-go chisla.py
type: Document
---

Дано тризначне число. Знайдіть суму його цифр.

## Формат введення

Вводиться ціле позитивне число. Гарантується, що воно відповідає умові завдання.

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
179
Виведення програми:
17
```

## Розв'язання

```python
n = int(input())
print(n // 100 + ((n // 10) % 10) + n % 10)
```