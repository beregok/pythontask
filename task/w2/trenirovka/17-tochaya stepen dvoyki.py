## Дано натуральне число N. Виведіть слово YES, якщо число N є точним ступенем двійки, або слово NO в іншому випадку. Операцією зведення в ступінь користуватися не можна!
##
## Формат введення
##
## Вводиться натуральне число.
##
## Формат виведення
##
## Виведіть відповідь до задачі.
n = int(input())
while n >= 2:
    n = n / 2
if 1 == n:
    print("YES")
else:
    print("NO")
