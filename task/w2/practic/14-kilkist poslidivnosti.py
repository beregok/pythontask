# Програма отримує на вхід послідовність цілих невід'ємних чисел, кожне число записано в окремому рядку. Послідовність завершується числом 0, при зчитуванні якого програма повинна закінчити свою роботу і вивести кількість членів послідовності (не рахуючи останнього числа 0).
#
# Числа, наступні  за числом 0, зчитувати не потрібно.
#
# ## Формат введення
#
# Вводиться послідовність цілих чисел, що закінчується числом 0.
#
# ## Формат виведення
#
# Виведіть відповідь до задачі.
#
# ## Приклади
#
# ```bash
# Тест
# 1
# Вхідні дані:
# 1
# 7
# 9
# 0
# 5
#
# Виведення програми:
# 3
#
# Тест
# 2
# Вхідні дані:
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 0
# 1
# 2
# 3
#
# Виведення програми:
# 7
#
# Тест
# 3
# Вхідні дані:
# 100
# 0
#
# Виведення програми:
# 1
# ```

now = int(input())
i = 0
while now != 0:
    now = int(input())
    i += 1
print(i)
