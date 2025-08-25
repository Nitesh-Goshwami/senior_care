export const isEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const isStrongPassword = (password) => {
  return password.length >= 6;
};
