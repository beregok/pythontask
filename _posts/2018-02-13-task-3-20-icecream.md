---
date: 2018-02-13
title: Mорозиво
categories:
  - 3. Умовний оператор
description: "Bизначить максимальну кількість ноутбуків, яке може бути розміщено на складі"
resources:
  - name: Вихідний код
    link: task/w2/trenirovka/11-icecream.py
type: Document
---

У кафе морозиво продають по три кульки і по п'ять кульок. Чи можна купити рівно k кульок морозива?

## Формат введення

Вводиться число k (ціле, позитивне)

## Формат виведення

Програма повинна вивести слово YES, якщо при таких умовах можна набрати рівно k кульок (не більше і не менше), в іншому випадку - вивести NO.

## Приклади

```bash
Тест 1
Вхідні дані:
2
Виведення програми:
NO

Тест 2
Вхідні дані:
3
Виведення програми:
YES
```

## Розв'язання №1

```python
k = int(input())
if k < 3 or k == 4 or k == 7:
    print("NO")
else:
    print("YES")
```
