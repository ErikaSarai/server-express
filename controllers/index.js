const items = [
    {id: 1, name: 'Products'},
]

const index = (req, res) => {
    res.render('index', {
        title: 'My WebStore'
    });  
};

const ListOfProducts = (req, res, next) => {
    res.render('products', {
        title: 'List of Products',
        items: items,
    })
};

const NewProduct =  (req, res, next) => {
    const { newItem } = req.body;

    items.push({
        id: items.length + 1,
        name: newItem
    })

    res.redirect('/products');
};

module.exports = {
    index,
    ListOfProducts,
    NewProduct
}