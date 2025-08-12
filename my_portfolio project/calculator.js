document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculator button');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('clear')) {
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.value = '';
            } else if (button.classList.contains('equals')) {
                if (firstOperand && operator && currentInput) {
                    secondOperand = currentInput;
                    try {
                        const result = eval(`${firstOperand} ${operator} ${secondOperand}`);
                        display.value = result;
                        currentInput = result.toString();
                        firstOperand = '';
                        operator = '';
                        secondOperand = '';
                    } catch (e) {
                        display.value = 'Error';
                        currentInput = '';
                    }
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput) {
                    firstOperand = currentInput;
                    operator = value === '×' ? '*' : value === '÷' ? '/' : value;
                    currentInput = '';
                    display.value = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});