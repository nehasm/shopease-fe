import {useState} from 'react'

const useInput = (validationCheckName,initialValue="") => {
    const [enteredValue,setEnteredValue] = useState("");
    const [isTouched,setIsTouched] = useState(false);

    let valueIsValid = false;

    switch(validationCheckName){
        case 'is_not_empty':
            valueIsValid =  enteredValue.trim() !== '';
            break;
        case 'is_email_and_not_empty':
            valueIsValid = enteredValue.trim() !== '' && enteredValue.includes('@');
            break;
        case 'is_password_and_not_empty':
            valueIsValid = enteredValue.trim() !== '' && enteredValue.length >= 8;
            break;
        default:
    }

    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false)
    }
    const setInitialValue = () => {
        setEnteredValue(initialValue);
    }

  return {
    value:enteredValue,valueIsValid,hasError,valueChangeHandler,inputBlurHandler,setInitialValue,reset
  }
}

export default useInput