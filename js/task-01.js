function makeTask1() {
    const categoryList = document.querySelector('#categories');
    const categoryItems = categoryList.querySelectorAll('.item');


    console.log(`Number of categories: ${categoryItems.length}`);

    categoryItems.forEach((element) => {
        console.log(`Category: ${element.firstElementChild.textContent}`)
        console.log(`Elements: ${element.querySelectorAll('ul li').length}`)
    })
};

makeTask1();

