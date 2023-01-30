// old JS:
    oldBook = (title, author) => {
        return {
            title: title,
            author: author,
        }
    }



// ES6:
    // if the key is the same as the value, then it's not necessary to repeat it:
    newBook = (title, author) => {
        return {
            title,
            author,
        }
    }


const book = newBook('Finansowa Forteca', 'Marcin Iwuć');
console.log(book);  // output: "{ title: 'Finansowa Forteca', author: 'Marcin Iwuć' }"