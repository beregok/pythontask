---
date: 2018-01-30
title: Впорядкувати три числа
categories:
  - 3. Умовний оператор
description: "Яке число, додатне чи від'ємне?"
resources:
  - name: Вихідний код
    link: task/w2/practic/5-sort min max.py
type: Document
---

Дано три числа. Упорядкуйте їх у порядку неспадання. Програма повинна зчитувати три числа a, b, c, потім програма повинна змінювати їх значення так, щоб стали виконані умови $$a ≤ b ≤ c$$, потім програма виводить трійку a, b, c.
                                                                                         
## Формат введення                                                                          
                                                                                         
Вводяться три числа.                                                              
                                                                                         
## Формат виведення                                                                         
                                                                                          
Виведіть відповідь до задачі.                                                            
                                                                                          
## Примітки                                                                                 
                                                                                          
Додаткові обмеження: не можна використовувати додаткові змінні (тобто єдиною допустимою операцією присвоювання є обмін значень двох змінних типу `(a, b) = (b, a)`.  

## Приклади

```bash
Тест 1
Вхідні дані:
1
2
1
Виведення програми:
1 1 2 
```

## Розв'язання - №1

```python
a = int(input())
b = int(input())
c = int(input())
if a <= b <= c:
    print(a, b, c)
elif b <= a <= c:
    print(b, a, c)
elif c <= b <= a:
    print(c, b, a)
elif c <= a <= b:
    print(c, a, b)
elif a <= c <= b:
    print(a, c, b)
else:
    print(b, c, a)  
```

## Розв'язання - №2

```python
a = int(input())
b = int(input())
c = int(input())
if a > b:
    a = a + b
    b = a - b
    a = a - b
if b > c:
    b = b + c
    c = b - c
    b = b - c
if a > b:
    a = a + b
    b = a - b
    a = a - b
print(a, b, c)  
```