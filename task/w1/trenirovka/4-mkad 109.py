# Довжина Київської кільцевої автомобільної дороги - 109 кілометрів. Байкер Вася стартує з нульового кілометра ККАД і їде зі швидкістю v кілометрів на годину. На якій позначці він зупиниться через t годин?

## Формат введення

# Програма отримує на вхід значення v і t. Якщо v>0, то Вася рухається в позитивному напрямку по ККАД, якщо ж значення v<0, то в негативному. (Гарантується, що вихідні числа - цілі і знаходяться в проміжку від -1000 до +1000).

## Формат виведення

# Програма повинна вивести ціле число від 0 до 108 - номер позначки, на якій зупиниться Вася.


v = int(input())
t = int(input())
print(v * t % 109)