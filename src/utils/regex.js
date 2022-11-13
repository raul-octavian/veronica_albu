export const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const onlyLetter = /^[a-z A-Z]+$/;

export const allButSpace = /^[^ ]+$/;

export const validatePassword =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
export const validatePhone = /^[0-9]*$/;

export const validateHasNumber = /\d/;

export const validateHasCapitalLetter = /(?=.*?[A-Z]).*/;

export const validateHasLowerCaseLetter = /(?=.*?[a-z]).*/;

export const validateHasSpecialCharacters = /(?=.*[!@#\$%\^&\*])/;
