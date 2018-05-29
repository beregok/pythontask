# Перша програма яка виводить Привіт світ!
print("Привіт, світ!")

# Арифметичні обчислення
print(1+2+3+4+5)

# Об'єднання рядків
print('1'+'2')

print("2 + 3 =", 2+3)

# Арифметичні обчислення
print(1+2+3+4+5)

# Розділювач, та об'єднання рядків
print("1", "2", "3", sep="+", end=" ")
print("=", 1+2+3)

# Арифметичні операції
print(11+6)
print(11-6)
print(11*6)
print(11//6)    # ділення на ціло
print(11/6)
print(11%6)     # Остача від ділення
print(11**2)    # Степінь

# Задача про годинник і застосування остачі від ділення
print((23+8)%24)
print((7-8)%24)     # Обернена задача

# Фізичний зміст
speed = 108                 # Швидкість
speed2 = -5                 # Поправка спідометра
time = 12                   # Час
dist = time*(speed+speed2)  # Пройдена дистанція
print(dist)

# Рядкові операції
phraza = "Hasta la vista"
who = "Baby"
print(phraza,", ", who, sep='')

ans = 2+3
expr = '2 + 3 ='
print(expr + str(ans))
print(id(ans))

# Добуток рядків
print("abc"*6)

# Введення даних
name = input()
print("Hello,", name)

# Сума двох чисел
a1 = int(input())  # Перетворення в число
a2 = int(input())
print(a1+a2)

# Перетворення в число
print(int('100'*100))

# Змінні
a = int(input())
b = int(input())
c = int(input())
d = int(input())
cost1 = a*100 + b
cost2 = c*100 + d
totalCost = cost1 + cost2
print(totalCost // 100, totalCost % 100)

# 0-255
n = int(input())
print(n % 256)

# Вивід останньої цифри числа
n = int(input())
k = int(input())
print(n//100**k)

# Ділення двох чисел
a = int(input())
b = int(input())
print((a+b-1)//b)
print((a-1)//b+1)