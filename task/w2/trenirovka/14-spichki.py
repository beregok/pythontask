# Уздовж прямої викладені три сірники. Необхідно перекласти один із них так, щоб при підпалюванні будь-якого сірника згорали всі три. Для того щоб вогонь переходив з одного сірника на інший, необхідно щоб ці сірники дотикалися (хоча б кінцями).
#
# Потрібно написати програму, яка визначить, яку з трьох сірників необхідно перемістити.
#
# ## Формат введення
#
# Вводяться шість цілих чисел: l₁, r₁, l₂, r₂, l₃, r₃ - координати першоого, другого і третього сірника відповідно ($$0 ≤ lᵢ <rᵢ ≤ 100$$). Кожен сірник описується координатами лівого і правого кінця по горизонтальній осі OX.
#
# ## Формат виведення
#
# Виведіть номер шуканого сірника. Якщо можливих відповідей декілька, то виведіть найменший з них. У разі, коли немає необхідності переміщати будь-який сірник, виведіть 0. Якщо ж необхідного результату досягти неможливо, то виведіть -1.

# Вдоль прямой выложены три спички. Необходимо переложить одну из них так, чтобы при поджигании любой спички сгорали все три. Для того чтобы огонь переходил с одной спички на другую, необходимо чтобы эти спички соприкасались (хотя бы концами).
# Требуется написать программу, определяющую, какую из трех спичек необходимо переместить.
# Формат ввода
# Вводятся шесть целых чисел : l₁,r₁,l₂,r₂,l₃,r₃ –– координаты первой, второй и третьей спичек соответственно (0 ≤ lᵢ < rᵢ ≤ 100). Каждая спичка описывается координатами левого и правого концов по горизонтальной оси OX.
# Формат вывода
# Выведите номер искомой спички. Если возможных ответов несколько, то выведите наименьший из них. В случае, когда нет необходимости перемещать какую-либо спичку, выведите 0. Если же требуемого результата достигнуть невозможно, то выведите -1.

l1 = int(input())
r1 = int(input())
l2 = int(input())
r2 = int(input())
l3 = int(input())
r3 = int(input())
if 0 <= l1 < r1 <= 100 and 0 <= l2 < r2 <= 100 and 0 <= l3 < r3 <= 100:
    if (l1 <= r2 and l2 <= r1 and l2 <= r3 and l3 <= r2)\
            or (l2 <= r1 and l1 <= r2 and l1 <= r3 and l3 <= r1)\
            or (l2 <= r3 and l3 <= r2 and l3 <= r1 and l1 <= r3)\
            or (l3 <= r2 and l2 <= r3 and l2 <= r1 and l1 <= r2)\
            or (l3 <= r1 and l1 <= r3 and l1 <= r2 and l2 <= r1)\
            or (l1 <= r2 and l3 <= r1 and l3 <= r2 and l2 <= r3):
        print(0)
    else:
        d1 = r1 - l1
        d2 = r2 - l2
        d3 = r3 - l3
        if (l3 > r2 and d1 >= l3 - r2)\
                or (l2 > r3 and d1 >= l2 - r3)\
                or (l2 <= r3 and l3 <= r2):
            print(1)
        elif (l3 > r1 and d2 >= l3 - r1)\
                or (l1 > r3 and d2 >= l1 - r3)\
                or (l1 <= r3 and l3 <= r1):
            print(2)
        elif (l1 > r2 and d3 >= l1 - r2)\
                or (l2 > r1 and d3 >= l2 - r1)\
                or (l1 <= r2 and l2 <= r1):
            print(3)
        else:
            print(-1)
else:
    print(-1)


l1 = int(input())
r1 = int(input())
l2 = int(input())
r2 = int(input())
l3 = int(input())
r3 = int(input())
if 0 <= l1 < r1 <= 100 and 0 <= l2 < r2 <= 100 and 0 <= l3 < r3 <= 100:
    if (l1 <= r2 and l2 <= r1 and l2 <= r3 and l3 <= r2)\
            or (l2 <= r1 and l1 <= r2 and l1 <= r3 and l3 <= r1)\
            or (l2 <= r3 and l3 <= r2 and l3 <= r1 and l1 <= r3)\
            or (l3 <= r2 and l2 <= r3 and l2 <= r1 and l1 <= r2)\
            or (l3 <= r1 and l1 <= r3 and l1 <= r2 and l2 <= r1)\
            or (l1 <= r2 and l3 <= r1 and l3 <= r2 and l2 <= r3):
        print(0)
    else:
        d1 = r1 - l1
        d2 = r2 - l2
        d3 = r3 - l3
        if (l3 > r2 and d1 >= l3 - r2)\
                or (l2 > r3 and d1 >= l2 - r3)\
                or (l2 <= r3 and l3 <= r2):
            print(1)
        elif (l3 > r1 and d2 >= l3 - r1)\
                or (l1 > r3 and d2 >= l1 - r3)\
                or (l1 <= r3 and l3 <= r1):
            print(2)
        elif (l1 > r2 and d3 >= l1 - r2)\
                or (l2 > r1 and d3 >= l2 - r1)\
                or (l1 <= r2 and l2 <= r1):
            print(3)
        else:
            print(-1)
else:
    print(-1)
