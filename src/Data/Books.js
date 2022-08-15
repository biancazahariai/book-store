export const Books = [
  {
    isbn: "1159142",
    title: "Agile Web Development with Rails",
    author: "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
    quantity: 14,
    price: "12.99",
    cover:
      "https://pragprog.com/titles/rails6/agile-web-development-with-rails-6/rails6.jpg",
  },
  {
    isbn: "9781491943533",
    title: "Practical Modern JavaScript",
    author: "Nicolás Bevacqua",
    quantity: 1,
    price: "5.67",
    cover:
      "https://cdn11.bigcommerce.com/s-igquupw3/images/stencil/1280x1280/products/990653/32158040/9781491943533__67042.1653098995.jpg?c=2",
  },
  {
    isbn: "34165433533",
    title: "Think Like a Monk: Train Your Mind for Peace and Purpose Every Day",
    author: "Jay Shetty",
    quantity: 8,
    price: "9.70",
    cover: "https://cdn.dc5.ro/img-prod/493169576-0.jpeg",
  },
  {
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    quantity: 33,
    price: "6.79",
    cover: "https://m.media-amazon.com/images/I/51gtBJztsTL.jpg",
  },
  {
    isbn: "643503",
    title: "CakePHP Application Development",
    author: "Ahsanul Bari, Anupom Syam",
    quantity: 5,
    price: "5.55",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/41DTkgS-NbL._SX404_BO1,204,203,200_.jpg",
  },
  {
    isbn: "2166584",
    title:
      "WordPress for Web Developers: An Introduction for Web Professionals",
    author: "Stephanie Leary (auth.)",
    quantity: 2,
    price: "7.79",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/513u5MCWr3L._SX404_BO1,204,203,200_.jpg",
  },
  {
    isbn: "547307",
    title: "Alex Homer, ASP.NET 2.0 Visual Web Developer 2005",
    author: "David Sussman",
    quantity: 9,
    price: "8.46",
  },
];

export const RentedBooks = {
  1159142: [
    {
      name: "Jhon Smith",
      date: "Sat Aug 13 2022 21:26:45 GMT+0300 (Eastern European Summer Time)",
    },
    {
      name: "Sadie Aldis",
      date: "Tue Jul 19 2022 21:26:45 GMT+0300 (Eastern European Summer Time)",
    },
  ],
  643503: [
    {
      name: "Denis D",
      date: "Mon Jul 4 2022 11:26:45 GMT+0300 (Eastern European Summer Time)",
    },
    {
      name: "Stefan Vladimir",
      date: "Tue Aug 6 2022 09:26:45 GMT+0300 (Eastern European Summer Time)",
    },
    {
      name: "Martin Nestle",
      date: "Wen Aug 7 2022 09:26:45 GMT+0300 (Eastern European Summer Time)",
    },
    {
      name: "Lidia Chelsea",
      date: "Fri Jul 22 2022 15:26:45 GMT+0300 (Eastern European Summer Time)",
    },
  ],
};
