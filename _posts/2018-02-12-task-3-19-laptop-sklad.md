---
date: 2018-02-12
title: Cкладування ноутбуків
categories:
  - 3. Умовний оператор
description: "Bизначить максимальну кількість ноутбуків, яке може бути розміщено на складі"
resources:
  - name: Вихідний код
    link: task/w2/practic/9-notebook sklad.py
type: Document
---

На склад, який має форму прямокутного паралелепіпеда, привезли ноутбуки, упаковані в коробки. Кожна коробка також має форму прямокутного паралелепіпеда. За правилами зберігання коробки з ноутбуками повинні бути розміщені на складі з виконанням наступних двох умов:

    * Сторони коробок повинні бути паралельні сторонам складу.
    * Коробку при приміщенні на склад дозволяється розташувати де завгодно (з виконанням попереднього умови), в тому числі на інший коробці, але все коробки повинні бути орієнтовані однаково (тобто не можна одну коробку розташувати "стоячи", а іншу - "лежачи")

Напишіть програму, яка за розмірами складу і розмірам коробки з ноутбуком визначить максимальну кількість ноутбуків, яке може бути розміщено на складі.

## Формат введення

Програма отримує на вхід шість натуральних чисел. Перші три задають довжину, висоту і ширину складу. Наступні три задають відповідно довжину, висоту і ширину коробки з ноутбуком.

## Формат виведення

Програма повинна вивести одне число - максимальну кількість ноутбуків, яке може бути розміщено на складі.

## Приклади

```bash
Тест 1
Вхідні дані:
100
200
300
1
2
3
Виведення програми:
1000000

Тест 2
Вхідні дані:
100
200
300
3
2
1
Виведення програми:
1000000

Тест 3
Вхідні дані::
100
100
1
2
2
2
Виведення програми:
0

Тест 4
Вхідні дані:
7
7
7
3
3
3
Виведення програми:
8
```

## Розв'язання №1

```python
a = int(input())
b = int(input())
c = int(input())
x = int(input())
y = int(input())
z = int(input())
if (a / x >= 1 and b / y >= 1 and c / z >= 1)\
        or (a / y >= 1 and b / x >= 1 and c / z >= 1)\
        or (a / x >= 1 and b / z >= 1 and c / y >= 1)\
        or (a / z >= 1 and b / x >= 1 and c / y >= 1)\
        or (a / z >= 1 and b / y >= 1 and c / x >= 1)\
        or (a / y >= 1 and b / z >= 1 and c / x >= 1):
    k = (a // x) * (b // y) * (c // z)
    n = (a // y) * (b // x) * (c // z)
    m = (a // x) * (b // z) * (c // y)
    s = (a // z) * (b // x) * (c // y)
    o = (a // z) * (b // y) * (c // x)
    p = (a // y) * (b // z) * (c // x)
    f = k if k >= n else n
    g = m if m >= s else s
    w = o if o >= p else p
    f1 = f if f >= g else g
    w1 = f1 if f1 >= w else w
    print(w1)
else:
    print(0)
```

## Розв'язання №2

```python
x = [int(i) for i in input().split()]
y = [int(i) for i in input().split()]
subst = [0, 1, 2, 1, 2, 0, 2, 0, 1, 0, 2, 1, 2, 1, 0, 1, 0, 2]
rez = max([(x[0] // y[subst[3 * i]]) * (x[1] // y[subst[3 * i + 1]])
           * (x[2] // y[subst[3 * i + 2]]) for i in range(6)])
print(rez)
```