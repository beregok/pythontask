# Оператори порівняння
#
#   ==    Дорівнює
#   !=    Не дорівнює
#   <     Менше
#   >     Більше
#   <=    Менше або дорівнює
#   >=    Більше або дорівнює
#
# Дозволяються подвійні порівнювання,
# Всі операції мють однаковий пріоритет і вони виконються після арифметичних операцій

# Логічні операції
#
#   and     і
#   or      або
#   not     не
#
# Пріоритет not, and, or

# Приклади використання логічних операцій

# Перевірка на подільність
n = int(input())
isEven = n % 2 == 0
print(isEven)

# Перевірка перекриття відрізків
start1 = int(input())
finish1 = int(input())
start2 = int(input())
finish2 = int(input())
isS1in2 = start2 <= start1 <= finish2
isF1in2 = start2 <= finish1 <= finish2
isS2in2 = start1 <= start2 <= finish1
isF2in2 = start1 <= finish2 <= finish1
answer = isS1in2 or isF1in2 or isS2in2 or isF2in2
print(answer)

# Перевірка перекриття відрізків 2
start1 = int(input())
finish1 = int(input())
start2 = int(input())
finish2 = int(input())
answer = start1 <= finish2 and start2 <= finish1
print(answer)

# Умовний оператор
x = int(input())
if x < 0:
    x = -x
print(x)

# Послідовність перевірки умови
x = int(input())
if x < 0 and x // 0 == 0:
    x = -x
print(x)

# Якщо то інакше
# Відступ 4 пробіли
x = int(input())
if x >= 0:
    print(x)
else:
    print(-x)

# Використання заперечення
x = int(input())
if x >= 0:
    print(x)
if not (x >= 0):
    print(-x)

# Вкладений оператор якщо то інaкше
# Перевірка четвертей по координатах точки
x = int(input())
y = int(input())
if x > 0:
    if y > 0:
        print(1)
    else:
        print(4)
else:
    if y > 0:
        print(2)
    else:
        print(4)

# Перевірка чисел
x = int(input())
if x == 1:
    print("One")
else:
    if x == 2:
        print("Two")
    else:
        if x == 3:
            print("Three")
        else:
            print("Other")

# Оператор elif
x = int(input())
if x == 1:
    print("One")
elif x == 2:
    print("Two")
elif x == 3:
    print("Three")
else:
    print("Other")
# Цикл поки
# Вивести всі числа від 1 до 100
i = 1
while i <= 100:
    print(i, end=" ")
    i = i +1
print("!")

# Знайти максимальне число
now = int(input())
maxNum = now
while now != 0:
    now = int(input())
    if now != 0 and now > maxNum:
        maxNum = now
print(maxNum)

# Сума послідовності чисел
semSeq = 0
now = int(input())
while now != 0:
    semSeq = semSeq + now
    now = int(input())
print(semSeq)

now = int(input())
semSeq = now
while now != 0:
    now = int(input())
    semSeq = semSeq + now
print(semSeq)


now = int(input())
semSeq = now
while now != 0:
    now = int(input())
    semSeq += now
print(semSeq)

# Виввести додатні числа послідовності
now = int(input())
while now != 0:
    if now > 0:
        print(now)
    now = int(input())

# Оператор continue
now = -1
while now != 0:
    now = int(input())
    if now <= 0:
        continue
    print(now)
