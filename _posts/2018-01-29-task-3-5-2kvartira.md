---
date: 2018-01-29
title: Квартира
categories:
  - 3. Умовний оператор
description: "Чи може в деякому під'їзді перша квартира мати номер x, а остання - номер y?"
resources:
  - name: Вихідний код
    link: task/w2/trenirovka/2-kvartira.py
type: Document
---

У будинку кілька під'їздів. У кожному під'їзді однакову кількість квартир. Квартири нумеруються підряд, починаючи з одиниці. Чи може в деякому під'їзді перша квартира мати номер x, а остання - номер y?


## Формат введення

Вводяться два натуральних числа x і y (x ≤ y), що не перевищують 10000

## Формат виведення

Виведіть слово YES (заголовними латинськими літерами), якщо таке можливо, і NO у протилежному випадку.

## Приклади

```bash
Тест 1
Вхідні дані:
11
15
Виведення програми:
YES
```

## Розв'язання

```python
a = int(input())
b = int(input())
if a == 1:
    print("YES")
elif b % (b - a + 1) == 0:
    print("YES")
else:
    print("NO")

```