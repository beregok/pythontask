# Послідовність складається з натуральних чисел і завершується числом 0. Визначте значення другого за величиною елемента в цій послідовності, тобто елемента, який буде найбільшим, якщо з послідовності видалити одне входження найбільшого елемента.
#
# ## Формат введення
#
# Вводиться послідовність цілих чисел, що закінчується числом 0 (саме число 0 в послідовність не входить, а служить як ознака її закінчення).
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
# 1
# 7
# 9
# 0
# Виведення програми:
# 7
#
# Тест 2
# Вхідні дані:
# 2
# 1
# 0
# Виведення програми:
# 1
#
# Тест 3
# Вхідні дані:
# 1
# 2
# 3
# 2
# 3
# 0
# Виведення програми:
# 3
# ```
#
# ## Розв'язання

a = int(input())
max1 = a
max2 = -1
while a != 0:
    a = int(input())
    if a > max1:
        max2 = max1
        max1 = a
    elif a > max2:
        max2 = a
print(max2)
