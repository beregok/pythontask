---
date: 2018-02-24
title: Як влаштовані дійсні числа
description: Дійсні числа
categories:
  - 5. Дійсні числа
type: Theory
set: real-to-go
set_order: 1
---

На відміну від цілих чисел, дійсні числа в мові Пайтон мають обмежену довжину.

Подумаємо, як зберігати десятковий дріб в пам'яті. Оскільки дійсних чисел нескінченно багато (навіть більше, ніж натуральних), то нам доведеться обмежити точність. Наприклад, ми можемо зберігати тільки кілька перших значущих цифр, щоб не зберігати незначущі нулі. Будемо окремо зберігати ціле число з першими значущими цифрами і окремо зберігати степінь числа 10, на який потрібно помножити це число.

Наприклад, число 5.972 * 10 ** 24 (це маса Землі в кілограмах) можна зберегти як 5972 (цифри числа, мантиса) і 21 (на яку степінь 10 потрібно помножити число, експонента). За допомогою такого уявлення можна зберігати дійсні числа будь-якої розмірності.

Приблизно так і зберігаються числа в пам'яті комп'ютера, однак замість десяткової системи використовується двійкова. На більшості апаратних систем в мові Пайтон для зберігання float використовується 64 біта, з яких 1 біт йде на знак, 52 біта - на мантиссу і 11 біт - на експоненту. Це не зовсім правильно, але досить непогано описує реальність.

53 біта дають близько 15-16 десяткових знаків, які будуть зберігатися точно. 11 біт на експоненту також накладає обмеження на розмірність збережених чисел (приблизно від -1000 до 1000 степеня числа 10).

Будь-яке дійсне число на мові Пайтон представимо у вигляді дробу, де в чисельнику зберігається ціле число, а в знаменнику знаходиться яка-небудь степінь двійки. Наприклад, 0.125 представимо як 1/8, а 0.1 як 3602879701896397/36028797018963968. Нескладно помітити, що ця частина не дорівнює 0.1, тобто зберігання числа 0.1 точно в типі float неможливо, як і багатьох інших "красивих" десяткових дробів.

В цілому буде корисно уявляти собі дійсне число X як відрізок $$[X - epsilon; X + epsilon]$$. Як же визначити величину epsilon?

Для цього потрібно зрозуміти, що похибка не є абсолютною, тобто однаковою для всіх чисел, а є відносною. Спрощено, апаратну похибку зберігання числа X можна оцінити як X * 2 ** (- 54).

Найчастіше в задачах вхідні дані мають певну точність. Розглянемо на прикладі: задані два числа X і Y з точністю 6 знаків після коми (значить epsilon = 5 * 10 ** (- 7)) і по модулю не перевищують 10 ** 9. Оцінити абсолютну похибку обчислення X * Y. Розглянемо найгірший випадок, коли X і Y рівні 10 ** 9 і відхилилися на максимально можливе значення epsilon в одну сторону. Тоді результат обчислення буде виглядати так:

$$(X + epsilon) * (Y + epsilon) = XY + (X + Y) * epsilon + epsilon ** 2$$

Величина epsilon ** 2 завнадто мала, XY - це правильна відповідь, а (X + Y) * epsilon - шукане значення абсолютної похибки. Підставим числа і отримаємо:

$$2 * 10 ** 9 * 5 * 10 ** (- 7) = 10 ** 3$$

Абсолютна похибка обчислення склала 1000 (одну тисячу). Що досить несподівано і сумно.

Таким чином, стає зрозуміло, що потрібно акуратно обчислювати значення похибки для порівняння дійсних чисел.