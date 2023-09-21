/* 
{
*   id: string | number,
*   title: string,
*   author: string,
*   year: number,
*   isComplete: boolean,
}
*/

(() => {
    let books = [];

    function addBook(event) {
        event.preventDefault();
        const titleInput = document.querySelector('#inputBookTitle');
        const authorInput = document.querySelector('#inputBookAuthor');
        const yearInput = document.querySelector('#inputBookYear');
        const isCompleteInput = document.querySelector('#inputBookIsComplete');

        const newBook = {
            id: +new Date(),
            title: titleInput.value,
            author: authorInput.value,
            year: parseInt(yearInput.value), // Convert year to number
            isComplete: isCompleteInput.checked,
        };

        books.push(newBook);
        document.dispatchEvent(new Event('bookChanged'));
        resetForm();
    }

    function searchBooks(event) {
        event.preventDefault();
        const searchInput = document.querySelector('#searchBookTitle');
        const query = searchInput.value.toLowerCase();

        const filteredBooks = books.filter((book) =>
            book.title.toLowerCase().includes(query)
        );

        renderBooks(filteredBooks);
    }

    function toggleBookCompletion(event) {
        const bookId = Number(event.target.id);
        const bookIndex = books.findIndex((book) => book.id === bookId);

        if (bookIndex !== -1) {
            books[bookIndex].isComplete = !books[bookIndex].isComplete;
            document.dispatchEvent(new Event('bookChanged'));
        }
    }

    function deleteBook(event) {
        const bookId = Number(event.target.id);
        const bookIndex = books.findIndex((book) => book.id === bookId);

        if (bookIndex !== -1) {
            books.splice(bookIndex, 1);
            document.dispatchEvent(new Event('bookChanged'));
        }
    }

    function resetForm() {
        const form = document.querySelector('#inputBook');
        form.reset();
    }

    function renderBooks(bookList) {
        const incompleteBookshelf = document.querySelector(
            '#incompleteBookshelfList'
        );
        const completeBookshelf = document.querySelector(
            '#completeBookshelfList'
        );

        incompleteBookshelf.innerHTML = '';
        completeBookshelf.innerHTML = '';

        bookList.forEach((book) => {
            const bookItem = createBookElement(book);
            if (book.isComplete) {
                completeBookshelf.appendChild(bookItem);
            } else {
                incompleteBookshelf.appendChild(bookItem);
            }
        });
    }

    function createBookElement(book) {
        const bookItem = document.createElement('article');
        bookItem.classList.add('book_item');

        const title = document.createElement('h2');
        title.innerText = book.title;

        const author = document.createElement('p');
        author.innerText = `Penulis: ${book.author}`;

        const year = document.createElement('p');
        year.innerText = `Tahun: ${book.year}`;

        const actionButtons = document.createElement('div');
        actionButtons.classList.add('action');

        const toggleButton = document.createElement('button');
        toggleButton.id = book.id;
        toggleButton.innerText = book.isComplete
            ? 'Belum Selesai dibaca'
            : 'Selesai dibaca';
        toggleButton.classList.add('green');
        toggleButton.addEventListener('click', toggleBookCompletion);

        const deleteButton = document.createElement('button');
        deleteButton.id = book.id;
        deleteButton.innerText = 'Hapus buku';
        deleteButton.classList.add('red');
        deleteButton.addEventListener('click', deleteBook);

        actionButtons.appendChild(toggleButton);
        actionButtons.appendChild(deleteButton);

        bookItem.appendChild(title);
        bookItem.appendChild(author);
        bookItem.appendChild(year);
        bookItem.appendChild(actionButtons);

        return bookItem;
    }

    function saveData() {
        localStorage.setItem('books', JSON.stringify(books));
    }

    function loadBooks() {
        const storedBooks = localStorage.getItem('books');
        books = storedBooks ? JSON.parse(storedBooks) : [];
        document.dispatchEvent(new Event('bookChanged'));
    }

    function initialize() {
        const inputForm = document.querySelector('#inputBook');
        const searchForm = document.querySelector('#searchBook');

        inputForm.addEventListener('submit', addBook);
        searchForm.addEventListener('submit', searchBooks);
        document.addEventListener('bookChanged', () => {
            renderBooks(books);
            saveData();
        });

        loadBooks();
    }

    initialize();
})();
