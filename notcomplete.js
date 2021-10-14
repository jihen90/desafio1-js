document.addEventListener("DOMContentLoaded", function(event){  
    console.log(filteredText);
    console.log(duplicateElements);  
});

// texto de prueba
const testText = 'hola, esto, hola, podria, no, no, funcionar';

// Transforma el texto en array
turnInArray = (text) => {return text = text.split(' ');}


// Clean del texto
cleanText = (text) => {
    text = text.replaceAll(',', '');
    text = text.replaceAll('.', '');
    text = text.replaceAll('!', '');
    text = text.replaceAll('?', '');
    text = text.replaceAll('\n', '');
    text = text.replaceAll('\t', '');
    return text;    
}

// Entrega el texto filtrado
filteredText = turnInArray(cleanText(testText));

// Obtenemos las palabras repetidas en el texto
toFindDuplicates = (arry) => arry.filter((item, index) => arry.indexOf(item) !== index)
duplicateElements = toFindDuplicates(filteredText);

