a = int(input())
b = int(input())
c = int(input())
d = int(input())
if a == 0 and b == 0:
    print("INF")
else:
    if (d - b * c / a) != 0 and (- b / a) == (- b // a):
        print(- b // a)
    else:
        print("NO")
