# Напишіть програму, яка по даному числу N від 1 до 9 виводить на екран N пінгвінів. Зображення одного пінгвіна має розмір 5 × 9 символів, між двома сусідніми пінгвінами також є порожній (з пробілів) стовпець. Дозволяється вивести порожній стовпець після останнього пінгвіна. Для спрощення малювання скопіюйте пінгвіна з прикладу в середовище розробки.
# Формат введення
# Вводиться натуральне число
# Формат виведення
# Виведіть відповідь до задачі.
# Примітки
# Врахуйте, що виведення даних на екран проводиться порядково, а не попінгвінно.
# Не забудьте, що для виведення бекслеша треба написати два бекслеша поспіль.

num = int(input())
print("   _~_    "*num)
print("  (o o)   "*num)
print(" /  V  \\  "*num)
print("/(  _  )\\ "*num)
print("  ^^ ^^   "*num)
