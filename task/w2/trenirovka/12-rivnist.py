# ирішити в цілих числах рівняння: $$(ax + b) / (cx + d) = 0$$
#
# # Формат введення
#
# водяться 4 числа: $$a, b, c, d; c і d$$ не рівні нулю одночасно.
#
# # Формат виведення
#
# еобхідно вивести всі рішення, якщо їх число звичайно, "NO" (без лапок), якщо рішень немає, і "INF" (без лапок), якщо рішень нескінченно багато.


# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())
# if (a == c and b == d) or (a == 0 and b != 0):
#     print("NO")
# else:
#     if a == 0 and b == 0:
#         print("INF")
#     else:
#         if a != 0:
#             if (d - b * c / a) != 0 and (- b / a) == (- b // a):
#                 print(- b // a)
#             else:
#                 print("NO")
#         else:
#             print("NO")
#

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