---
date: 2018-01-22
title: Симетричне число
categories:
  - 2. Цілі числа
description: "Визначте, чи є його десятковий запис є симетричним."
resources:
  - name: Вихідний код
    link: task/w1/trenirovka/9-simetriche chislo.py
type: Document
---

Дано чотиризначний число. Визначте, чи є його десятковий запис є симетричним. Якщо число симетричне, то виведіть 1, інакше виведіть будь-яке інше ціле число. Число може мати менше чотирьох знаків, тоді потрібно вважати, що його десяткова запис доповнюється зліва незначущими нулями.

## Формат введення

Вводиться однина.

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
2002
Виведення програми:
1
```

## Розв'язання

```python
n = int(input())
n1 = n//1000
n2 = (n - n1 * 1000) // 100
n3 = (n - n1 * 1000 - n2 * 100) // 10
n4 = n - n1 * 1000 - n2 * 100 - n3 * 10
n12 = int(str(n1) + str(n2))
n43 = int(str(n4) + str(n3))
print((n43 - n12) + 1)
```
