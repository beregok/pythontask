## За даним числом N роздрукуйте всі цілі ступеня двійки, не перевищують N, в порядку зростання.Операціей піднесення в ступінь користуватися не можна!
##
## формат введення
## 
## Вводиться натуральне число.
## 
## формат виведення
## 
## Виведіть відповідь до задачі.
n = int(input())
i = 1
while i <= n:
    print(i, end=" ")
    i = i * 2
