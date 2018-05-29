#Шоколадка має вигляд прямокутника, розділеного на n × m часточок. Шоколадку можна один раз розламати по прямій на дві частини. Визначте, чи можна таким чином відламати від шоколадки рівно k часточок.

## Формат введення

#Програма отримує на вхід три числа: n, m, k

## Формат виведення

#Програма повинна вивести одне з двох слів: YES або NO.

n = int(input())
m = int(input())
k = int(input())
if (k % m == 0) and (k // m) <= n:
    print("YES")
elif (k % n == 0) and (k // n <= m):
    print("YES")
else:
    print("NO")