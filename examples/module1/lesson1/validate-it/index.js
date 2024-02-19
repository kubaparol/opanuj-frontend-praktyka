const VALIDATION_OPTIONS = [
  {
    checkFn: (value) => value >= 0,
    message: 'Value must be greater than or equal to 0.',
  },
  {
    checkFn: (value) => value <= 100,
    message: 'Value must be less than or equal to 100.',
  },
  {
    checkFn: (value) => value % 2 === 0,
    message: 'Value must be even.',
  },
];

function validate(value) {
  for (let i = 0; i < VALIDATION_OPTIONS.length; i++) {
    const { checkFn, message } = VALIDATION_OPTIONS[i];

    if (!checkFn(value)) {
      return { isValid: false, message };
    }
  }

  return { isValid: true };
}

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const value = Number(input.value);
    const isInteger = Number.isInteger(value);

    if (!value || !isInteger) {
      result.innerHTML = 'Invalid';
      return;
    }

    const { isValid, message } = validate(Number(value));

    if (!isValid) {
      result.innerHTML = message;
      return;
    }

    result.innerHTML = 'Valid';
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
