## У будинку кілька під'їздів. У кожному під'їзді однакову кількість квартир. Квартири нумеруються підряд, починаючи з одиниці. Чи може в деякому під'їзді перша квартира мати номер x, а остання - номер y?

## Формат введення

# Вводяться два натуральних числа x і y (x ≤ y), що не перевищують 10000.

## Формат виведення

# Виведіть слово YES (заголовними латинськими літерами), якщо таке можливо, і NO у протилежному випадку.

a = int(input())
b = int(input())
if a == 1:
    print("YES")
elif b % (b - a + 1) == 0:
    print("YES")
else:
    print("NO")
