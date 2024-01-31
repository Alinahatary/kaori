// Получаем данные из формы регистрации
const log_email = document.getElementById('login_email').value;
const log_password = document.getElementById('login_pass').value;

const email = document.getElementById('signup_email').value;
const password = document.getElementById('signup_pass').value;
const repeatPassword = document.getElementById('signup_repeat_pass').value;

// Проверяем, что пароли совпадают
if (password !== repeatPassword) {
  alert('Пароли не совпадают');
  return;
}

// Регистрируем аккаунт
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Аккаунт успешно зарегистрирован
    const user = userCredential.user;
    console.log('Аккаунт зарегистрирован', user);
  })
  .catch((error) => {
    // Возникла ошибка при регистрации аккаунта
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Ошибка при регистрации аккаунта', errorCode, errorMessage);
  });