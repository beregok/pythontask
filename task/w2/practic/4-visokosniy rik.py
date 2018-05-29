# Дано натуральне число. Потрібно визначити, чи є рік з даними номером високосним. Якщо рік є високосним, то виведіть YES, інакше виведіть NO. Нагадаємо, що відповідно до григоріанським календарем, рік є високосним, якщо його номер кратний 4, але не кратний 100, а також якщо він кратний 400.

## Формат введення

# Вводиться одне натуральне число.

## Формат виведення

# Виведіть відповідь до задачі.


y = int(input())
if y % 4 == 0 and y % 100 != 0:
    print("YES")
elif y % 400 == 0:
    print("YES")
else:
    print("NO")
