const isLogin = false;
const user = {
  username: 'admin',
  password: '123',
};

export default {
  login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.username === username && user.password === password) {
          resolve({ isLogin: true });
        }
        resolve({ isLogin: false, reason: 'Username or Password incorrect' });
      }, 1000);
    });
  },

  checkSession() {
    if (isLogin) return true;
    return false;
  },
};
