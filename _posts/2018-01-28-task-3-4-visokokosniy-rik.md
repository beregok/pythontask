---
date: 2018-01-28
title: Високосний рік
categories:
  - 3. Умовний оператор
description: "Сказати відповідь, Так чи Ні."
resources:
  - name: Вихідний код
    link: task/w2/practic/4-visokosniy rik.py
type: Document
---

Дано натуральне число. Потрібно визначити, чи є рік з даними номером високосним. Якщо рік є високосним, то виведіть YES, інакше виведіть NO. Нагадаємо, що відповідно до григоріанським календарем, рік є високосним, якщо його номер кратний 4, але не кратний 100, а також якщо він кратний 400.

## Формат введення

Вводиться одне натуральне число.

## Формат виведення

Виведіть відповідь до задачі.

## Приклади

```bash
Тест 1
Вхідні дані:
4
Виведення програми:
YES
```

## Розв'язання

```python
y = int(input())
if y % 4 == 0 and y % 100 != 0:
    print("YES")
elif y % 400 == 0:
    print("YES")
else:
    print("NO")
```