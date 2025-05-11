const numberFaces = [
            {num:1}, {num:2}, {num:3}, {num:4}, {num:5}, {num:6},
            {num:7}, {num:8}, {num:9}, {num:0}, {num:"*"},
            {num:"/"}, {num:"C"}, {num:"+"}, {num:"-"}, {num:"="}, {num:"."},
        ];

        let currentInput = [];
        const displayElement = document.getElementById('display-value');
        const buttonsContainer = document.getElementById('buttons-container');

        // Create buttons
        numberFaces.forEach((item, index) => {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = item.num;
            button.addEventListener('click', () => handleClick(item.num));
            
            buttonContainer.appendChild(button);
            buttonsContainer.appendChild(buttonContainer);
        });

        function handleClick(item) {
            if (item === "C") {
                currentInput = [];
            } else if (item === "=") {
                try {
                    currentInput = [eval(currentInput.join(""))];
                } catch (error) {
                    currentInput = [];
                }
            } else if (item === "0.") {
                currentInput = [...currentInput, item.slice(0, -1)];
            } else {
                currentInput = [...currentInput, item];
            }
            
            updateDisplay();
        }

        function updateDisplay() {
            displayElement.textContent = currentInput.join("");
        }