const books = (state=[], action) => ([
    {
        id: 1,
        category: 'CSS',
        title: 'CSS权威指南',
        author: 'Eric A. Meyer',
        price: 42
    },
    {
        id: 2,
        category: 'JS',
        title: 'JavaScript高级程序设计',
        author: 'Nicholas C.Zakas',
        price: 69
    },
    {
        id: 3,
        category: 'CSS',
        title: '精通CSS:高级Web标准解决方案',
        author: '巴德,科利森,莫尔',
        price: 25
    }
]);

export default books;