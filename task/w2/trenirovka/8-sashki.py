## На дошці стоїть біла шашка. Потрібно визначити, чи може вона потрапити в задану клітинку, роблячи ходи по правилам (не перетворюючись на дамку). Білі шашки можуть ходити по чорних клітинам по діагоналі вгору-вліво або вгору-вправо. Ходів може бути декілька!
##
## Формат введення
##
## Вводиться клітина, де стоїть шашка, а потім клітина, куди шашка повинна потрапити.
##
## Кожна клітина описується номером вертикалі, а потім номером горизонталі.
##
## Формат виведення
##
## Виведіть слово YES (великими літерами), якщо шашка може потрапити з початкової клітини в зазначену, і NO у протилежному випадку.
##
## Примітки
##
## Дошка має розмір 8x8, вертикалі і горизонталі нумеруються числами від 1 до 8 починаючи з лівого нижнього кута. Вихідна і кінцева клітини не збігаються.

y1 = int(input())
x1 = int(input())
y2 = int(input())
x2 = int(input())
if ((y1 + x1) % 2 == 0) and ((y2 + x2) % 2 == 0):
    if (x2 > y1) and ((x1 + y1 - x2) <= y2) and (y2 <= (x1 + x2 - y1)):
        print("Yes")
    else:
        print("NO")
else:
    print("NO")
