Тестовое задание для "Траектория" от Лоншакова Максима Витальевича

Работающий билд - https://cerulean-muffin-571deb.netlify.app/

Запуск версии для разработки стандартный - npm start

ТЗ для тестового задания:
Цель
Реализовать SPA-приложение (на Vue или React) с возможностью просмотра, сортировки, редактирования и удаления машин, полученных с сервера через REST API.

📦 Эндпоинт API
GET: https://ofc-test-01.tspb.su/test-task/vehicles

Пример ответа:

[{
"id": 1,
"name": "Toyota",
"model": "Camry",
"year": 2021,
"color": "red",
"price": 21000,
"latitude": 55.753332,
"longitude": 37.621676
}]

🔧 Требования по функционалу:

Вывод списка машин (name, model, year, price), редактирование машины (по полю name и price), удаление машины, сделать сортировку машин по year и price

⭐ Дополнительное задание:

Добавить карту, на которой будут авто по координатам latitude и longitude (Карту можно брать любую), использовать TypeScript

📚 Дополнительная информация:

В качестве стора можно использовать любую библиотеку. Дизайн на свой вкус, если есть желание, можно использовать любые UI библиотеки
