## Дано координати двох точок на площині, потрібно визначити, чи лежать вони в одній координатної чверті чи ні (всі координати відмінні від нуля).
##
## формат введення
##
## Вводяться 4 числа: координати першої точки (x1, y1) і координати другої точки (x2, y2).
##
## формат виведення
##
## Програма повинна вивести слово YES, якщо точки знаходяться в одній координатної чверті, в іншому випадку вивести слово NO.

x1 = int(input())
y1 = int(input())
x2 = int(input())
y2 = int(input())
if (x1 > 0 and x2 > 0) and (y1 > 0 and y2 > 0):
    print("YES")
elif (x1 < 0 and x2 < 0) and (y1 > 0 and y2 > 0):
    print("YES")
elif (x1 < 0 and x2 < 0) and (y1 < 0 and y2 < 0):
    print("YES")
elif (x1 > 0 and x2 > 0) and (y1 < 0 and y2 < 0):
    print("YES")
else:
    print("NO")
