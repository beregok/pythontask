# Напишіть програму, яка зчитує ціле число і виводить текст, аналогічний наведеному в прикладі (прогалини важливі!). Не можна користуватися конкатенацієй рядків (використовуйте print з декількома параметрами).

## Формат введення

# Вводиться ціле число (гарантується, що число знаходиться в діапазоні від -1000 до +1000).

## Формат виведення

# Виведіть два рядки, відповідно до зразка.


n = int(input())
print("The next number for the number ", n, " is ",  n+1, ".", sep="")
print("The previous number for the number ", n, " is ", n-1, ".", sep="")