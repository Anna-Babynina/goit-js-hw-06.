// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

function onLoginFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('все поля должны быть заполнены.');
    return;
  }
  console.log(' form.elements', form.elements);
  console.log(' event.currentTarget.elements', event.currentTarget.elements);
  const dataFormResult = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    dataFormResult[name] = value;
  });

  console.log(dataFormResult);
  form.reset();
}








