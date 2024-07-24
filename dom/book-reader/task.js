const booksControls = Array.from(document.querySelectorAll(`.font-size`));
const bookContent = document.querySelector('.book');
let size = {
    0: 'book_fs-small',
    2: 'book_fs-big',
}
let indexActiv = 1;

booksControls.forEach((item, index) => {
    item.onclick = () => {
        booksControls[indexActiv].classList.remove('font-size_active');
        bookContent.classList.remove(size[indexActiv]);
        indexActiv = index;
        booksControls[index].classList.add('font-size_active');
        bookContent.classList.add(size[index]);
        return false;
    };
}

)
