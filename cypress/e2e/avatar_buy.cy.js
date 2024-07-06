describe('Проверка авторизации', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/');//зашли на сайт
         //cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(#ED6F2D)');//проверили цвет кнопки войти

         cy.get(':nth-child(1) > .auth__input').type('Email');//ввели Верный Логин
         cy.get('#password').type('Password');//ввели Верный Пароль
         cy.get('.auth__button').click();//нажали войти

         cy.get('.header__btns > :nth-child(4)').click();//заходим в магазин
         cy.get('.available > button').first().click();// кликаем Купить у первого доступного

         cy.get('.credit').type('4620869113632996');// вводим номер карты
         cy.get('.k_input_ccv').type('125');// вводим CVV карты
         cy.get('.k_input_date').type('1225');// вводим срок действия карты
         cy.get('.k_input_name').type('MIKL');// вводим имя владельца действия
         cy.get('.pay-btn').click();// нажимаем кнопку Оплатить

         cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();// нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');// проверяем наличие и видимость сообщения о успешной покупке

        })
 })