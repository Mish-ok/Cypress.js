describe('Проверка авторизации', function () {

    it('Верный логин и Верный пароль', function () {
         cy.visit('https://login.qa.studio/');//зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверили цвет кнопки восстановить

         cy.get('#mail').type('german@dolnikov.ru');//ввели Верный Логин
         cy.get('#pass').type('iLoveqastudio1');//ввели Верный Пароль
         cy.get('#loginButton').click();//нажали войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');//Выводится ожидаемый текст
         cy.get('#messageHeader').should('be.visible');//текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
    
        })
        it('Верный Логин и НЕверный Пароль', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверили цвет кнопки восстановить
   
            cy.get('#mail').type('german@dolnikov.ru');//ввели Верный Логин
            cy.get('#pass').type('iLoveqastudio7');//ввели НЕверный Пароль
            cy.get('#loginButton').click();//нажали войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет');//Выводится ожидаемый текст
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
       
           })
           it('НЕверный Логин и Верный Пароль', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверили цвет кнопки восстановить
   
            cy.get('#mail').type('mikl@dolnikov.ru');//ввели НЕверный Логин
            cy.get('#pass').type('iLoveqastudio1');//ввели Верный Пароль
            cy.get('#loginButton').click();//нажали войти
   
            cy.get('#messageHeader').contains('Такого логина или пароля нет');//Выводится ожидаемый текст
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
       
           })
           it('Валидация собачки', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверили цвет кнопки восстановить
   
            cy.get('#mail').type('germandolnikov.ru');//ввели Логин БЕЗ @
            cy.get('#pass').type('iLoveqastudio1');//ввели Верный Пароль
            cy.get('#loginButton').click();//нажали войти
   
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Выводится ожидаемый текст
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
       
           })
           it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверили цвет кнопки восстановить
   
            cy.get('#forgotEmailButton').click();//нажали восстановить пароль
            cy.get('#mailForgot').type('german@dolnikov.ru');//ввели Верную почту
            cy.get('#restoreEmailButton').click();//нажали отправить код
   
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//Выводится ожидаемый текст
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
       
           })
           it('Приведение к строчным буквам в логине:', function () {
            cy.visit('https://login.qa.studio/');//зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//проверили цвет кнопки восстановить
   
            cy.get('#mail').type('German@Dolnikov.ru');//ввели Верный Логин с заглавными буквами
            cy.get('#pass').type('iLoveqastudio1');//ввели Верный Пароль
            cy.get('#loginButton').click();//нажали войти
   
            cy.get('#messageHeader').contains('Авторизация прошла успешно');//Выводится ожидаемый текст
            cy.get('#messageHeader').should('be.visible');//текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть крестик и он виден
       
           })
 })