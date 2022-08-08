const createValidationRule = (ruleName, errorMessage, validateFunc) => {
   return {
      name: ruleName,
      message: errorMessage,
      validate: validateFunc
   };
};
 
// ============================================================

export const requiredRule = (inputName) => {
   return createValidationRule(
      'required',
      `${inputName} required`,
      (inputValue, formObj) => inputValue.length !== 0
   );
};
 
// ============================================================

export const minLengthRule = (inputName, minCharacters) => {
   return createValidationRule(
      'minLength',
      `${inputName} should contain at least ${minCharacters} characters`,
      (inputValue, formObj) => inputValue.length >= minCharacters
   );
};

// ============================================================

export const maxLengthRule = (inputName, maxCharacters) => {
   return createValidationRule(
      'minLength',
      `${inputName} cannot contain more than ${maxCharacters} characters`,
      (inputValue, formObj) => inputValue.length <= maxCharacters
   );
};

// ============================================================

export const passwordMatchRule = () =>{
   return createValidationRule(
      'passwordMatch',
      `Passwords do not match`,
      (inputValue, formObj) => inputValue === formObj.password.value
   );
};
 
// ============================================================

export const hasUpperCaseRule = (inputName) => {
   return createValidationRule(
      'hasUpperCase',
      `${inputName} should contain atleast one uppercase letter`,
      (inputValue, formObj) => inputValue.split('').some(c => c === c.toUpperCase() && isNaN(c) && c.toLowerCase() !== c.toUpperCase())
   );
};

// ============================================================

export const hasOneSymbolRule = (inputName) => {
   return createValidationRule(
      'hasOneSymbol',
      `${inputName} should contain atleast one symbol`,
      (inputValue, formObj) => inputValue.split('').some(c => isNaN(c) && c.toLowerCase() === c.toUpperCase())
   );
};

// ============================================================

export const validEmailRule = (inputName) => {
   return createValidationRule(
      'validEmail',
      `${inputName} is not a valid email`,
      (inputValue, formObj) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
   );
};

// ============================================================
