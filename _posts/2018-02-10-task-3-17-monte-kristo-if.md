---
date: 2018-02-10
title: В'язень замку Іф
categories:
  - 3. Умовний оператор
description: "Чи зможе він втекти?"
resources:
  - name: Вихідний код
    link: task/w2/practic/7-monte kristo.py
type: Document
---

За багато років ув'язнення в'язень замку Іф виконав в стіні прямокутний отвір розміром D × E. Замок Іф складний з цегли, розміром A × B × C. Визначте, чи зможе в'язень викидати цеглини в море через цей отвір, якщо сторони цегли повинні бути паралельні сторонам отвори.

## Формат введення

Програма отримує на вхід числа A, B, C, D, E.

## Формат виведення

Програма повинна вивести слово YES або NO.

## Приклади

```bash
Тест 1
Вхідні дані:
1
1
1
1
1
Виведення програми:
YES

Тест 2
Вхідні дані:
2
2
2
1
1
Виведення програми:
NO
```

## Розв'язання

```python
a = int(input())
b = int(input())
c = int(input())
d = int(input())
e = int(input())
if a > 0 and b > 0 and c > 0 and d > 0 and e > 0:
    if a <= d and b <= e:
        print("YES")
    elif a <= e and b <= d:
        print("YES")
    elif b <= d and c <= e:
        print("YES")
    elif b <= e and c <= d:
        print("YES")
    elif a <= d and c <= e:
        print("YES")
    elif a <= e and c <= d:
        print("YES")
    else:
        print("NO")
else:
    print("NO")
```