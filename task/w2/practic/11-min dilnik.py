## Дано ціле число, що не менше 2. Виведіть його найменший натуральний дільник, відмінний від 1.
##
## Формат введення
##
## Вводиться ціле позитивне число.
##
## Формат виведення
##
## Виведіть відповідь до задачі.
n = int(input())
i = 2
while n % i != 0:
    i = i + 1
print(i)