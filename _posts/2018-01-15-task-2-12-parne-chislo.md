---
date: 2018-01-15
title: Наступне парне
categories:
  - 2. Цілі числа
description: "Виведіть наступне за ним"
resources:
  - name: Вихідний код
    link: task/w1/trenirovka/2- parne chislo.py
type: Document
---

Дано ціле число N. Виведіть наступне за ним парне число.

## Формат введення

Вводиться ціле позитивне число, не перевищує 1000.

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
7
Виведення програми:
8

Тест 2
8
Виведення програми:
10
```

## Розв'язання

```python
n = int(input())
print(n + 2 - n % 2)
```