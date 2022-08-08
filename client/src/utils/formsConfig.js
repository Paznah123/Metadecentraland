import React from 'react';

import Input from '../components/UI/Input';

import {
   requiredRule,
   minLengthRule,
   maxLengthRule,
   passwordMatchRule,
   hasUpperCaseRule,
   hasOneSymbolRule,
   validEmailRule
 } from './inputValidationRules';
 
// ============================================================ 

const createFormFieldConfig = (label, name, type, defaultValue = '') => {
   return {
      renderInput: (handleChange, value, isValid, error, key) => {
         return (
            <Input
               key={key}
               name={name}
               type={type}
               label={label}
               isValid={isValid}
               value={value}
               handleChange={handleChange}
               errorMessage={error}
            />
         );
      },
      label,
      value: defaultValue,
      valid: false,
      errorMessage: '',
      touched: false
   };
}

// ============================================================

export const registerForm = {
   name: {
      ...createFormFieldConfig('Name', 'name', 'text'),
      validationRules: [
        requiredRule('Name'),
        minLengthRule('Name', 3),
        maxLengthRule('Name', 25)
      ]
   },
   email: {
     ...createFormFieldConfig('Email', 'email', 'email'),
     validationRules: [
       requiredRule('Email'),
       minLengthRule('Email', 5),
       validEmailRule('Email')
     ]
   },
   password: {
      ...createFormFieldConfig('Password', 'password', 'password'),
      validationRules: [
        requiredRule('Password'),
        minLengthRule('Password', 8),
        hasUpperCaseRule('Password'),
        hasOneSymbolRule('Password')
      ]
   },
   confirmation: {
      ...createFormFieldConfig('Confirm Password', 'confirmation', 'password'),
      validationRules: [passwordMatchRule()]
   }
};
 

// ============================================================

export const loginForm = {
   email: {
     ...createFormFieldConfig('Email', 'email', 'email'),
     validationRules: [
       requiredRule('Email'),
       minLengthRule('Email', 5),
       validEmailRule('Email')
     ]
   },
   password: {
     ...createFormFieldConfig('Password', 'password', 'password'),
     validationRules: [
       requiredRule('Password'),
       minLengthRule('Password', 8),
     ]
   }
};

// ============================================================
