# У кафе морозиво продають по три кульки і по п'ять кульок. Чи можна купити рівно k кульок морозива?
# 
# ## Формат введення
# 
# Вводиться число k (ціле, позитивне)
# 
# ## Формат виведення
# 
# Програма повинна вивести слово YES, якщо при таких умовах можна набрати рівно k кульок (не більше і не менше), в іншому випадку - вивести NO.
# 
k = int(input())
if k < 3 or k == 4 or k == 7:
    print("NO")
else:
    print("YES")
