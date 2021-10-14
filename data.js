window.onload = () => {
    // obtiene nodos desde el DOM
    const inputText = document.querySelector('#texto-entrada');
    const resultParent = document.querySelector('#resultados');

    // Clean, sort, filter & transforma en array
    const cleanWords = (string, regex, spacing) => {
        const arr = string
            .replace(regex, '')
            .toLowerCase()
            .split(spacing)
            .sort()
            .filter(value => value != '')
        return arr;
    }

    // return del total de letras o palabras
    const countLetter = (letters) => {
        let counts = {};
        letters.forEach((letter) => {
            counts[letter] = (counts[letter] || 0) + 1;
        })
        return counts;
    }

    // Añade el resultado de letras al DOM
    const setResultOfLetters = (results, node) => {
        for (const result in results) {
            node.insertAdjacentHTML('beforeend',
            `<p>
                <strong>Letra: ${result} </strong>
                <span> Cantidad: ${results[result]}</span>
            </p>`)
        }
    }

    // Añade el resultado de palabras al DOM
    const setResultOfWords = (results, node) => {
        for (const result in results) {
            node.insertAdjacentHTML('beforeend',
            `<p>
                <strong>Palabra: ${result} </strong>
                <span> Cantidad: ${results[result]}</span>
            </p>`)
        }
    }

    // Crea un array de letras o palbras
    const letters = cleanWords(inputText.textContent, /[^A-Za-z]\s*/g, '');
    const words = cleanWords(inputText.textContent, /[^A-Za-z]\s/g, ' ' );

    // Inserta el resultado en el DOM
    setResultOfLetters(countLetter(letters), resultParent);
    setResultOfWords(countLetter(words), resultParent);
}
