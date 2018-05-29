x = [int(i) for i in input().split()]
y = [int(i) for i in input().split()]
subst = [0, 1, 2, 1, 2, 0, 2, 0, 1, 0, 2, 1, 2, 1, 0, 1, 0, 2]
rez = max([(x[0] // y[subst[3 * i]]) * (x[1] // y[subst[3 * i + 1]])
           * (x[2] // y[subst[3 * i + 2]]) for i in range(6)])
print(rez)
