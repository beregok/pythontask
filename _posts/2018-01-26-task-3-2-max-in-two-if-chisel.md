---
date: 2018-01-25
title: Яке число більше?
categories:
  - 3. Умовний оператор
description: "Зчитує два цілих числа A і B і виводить найбільше з них."
resources:
  - name: Вихідний код
    link: task/w2/practic/2-max  two chisel.py
type: Document
---

Дано два цілих числа. Програма повинна вивести число 1, якщо перше число більше другого, число 2, якщо друге більше першого або число 0, якщо вони рівні.

## Формат введення

Вводяться два числа.

## Формат виведення

Виведіть відповідь до задачі.

## Примітка

Цю задачу бажано вирішити з використанням каскадних інструкцій if ... elif ... else.

## Приклади

```bash
Тест 1
Вхідні дані:
1
2
Виведення програми:
2

```

## Розв'язання

```python
a = int(input())
b = int(input())
if a > b:
    print(1)
elif a < b:
    print(2)
else:
    print(0)
```