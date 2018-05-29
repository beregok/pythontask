# Виконавець "Поділяєць" перетворює натуральні числа. У нього є дві команди: "Відняти 1" і "Розділити на 2", перша команда зменшує число на 1, друга команда зменшує число в два рази, якщо воно парне, інакше виконується помилка.
# Дано два натуральних числа A і B (A > B). Напишіть алгоритм для Поділяйця, який перетворює число A в число B і при цьому містить мінімальну кількість команд.
# Команди алгоритму потрібно виводити поодному в рядку, перша команда позначається, як -1, друга команда як: 2.
#
# ## Формат введення
#
# Вводяться два натуральних числа A і B.
#
# ## Формат виведення
#
# Виведіть відповідь до задачі.
#
# ## Приклади
#
# ```bash
# Тест 1
# Вхідні дані:
# 179
# 20
# Виведення програми:
# -1
# :2
# -1
# :2
# :2
# -1
# -1
#
# Тест 2
# Вхідні дані:
# 1024
# 1
# Виведення програми:
# :2
# :2
# :2
# :2
# :2
# :2
# :2
# :2
# :2
# :2
#
# Тест 3
# Вхідні дані:
# 1023
# 1
# Виведення програми:
# -1
# :2
# -1
# :2
# -1
# :2
# -1
# :2
# -1
# :2
# -1
# :2
# -1
# :2
# -1
# :2
# -1
# :2
# ```
#
# ## Розв'язання
a = int(input())
b = int(input())
while a != b:
    if a >= b * 2 and a % 2 == 0:
        a /= 2
        print(":2")
    else:
        a -= a
        print(-1)
