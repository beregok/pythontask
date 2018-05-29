#За багато років ув'язнення в'язень замку Іф виконав в стіні прямокутний отвір розміром D × E. Замок Іф складний з цегли, розміром A × B × C. Визначте, чи зможе в'язень викидати цеглини в море через цей отвір, якщо сторони цегли повинні бути паралельні сторонам отвори.

#Формат введення

#Програма отримує на вхід числа A, B, C, D, E.

#Формат виведення

#Програма повинна вивести слово YES або NO.

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
