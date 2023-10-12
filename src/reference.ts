// ***** JSON PARSING *****
//app.use(express.json());

// ***** URL ENDODED PARSING *****
// app.use(express.urlencoded({extended: true}));


// ***** MIDDLEWARE *****
// Can pass middleware functions to intercept requests and perform logic on requests
// These can be curried to provide extended manipulation of middleware logic
// const middleware = ({name } : {name: string}) => (req: Request, res: Response, next: NextFunction) => {
//     req.name = name; 
//     next();
// };

// Now any request has access to the name property from the middleware function
// app.use(middleware({name: 'Aron'}));

// ***** ROUTES FOR CRUD OPERATIONS *****
// app.get('/', (req, res) => {
//     return res.send('Hello world');
// });

// app.post('/api/data', (req: Request, res: Response) => {
//     console.log(req.body);

//     return res.sendStatus(200);
// });

// app.all('api/all', (req: Request, res: Response) => {
//     return res.sendStatus(200);
// })

// app.listen(3000, () => {
//     console.log('Application listening at http://localhost:3000')
// });


// ***** OPTIONAL CHAINING OF REQUESTS *****
// Can use if you want to bundle CRUD operations for a particular route
// Express will detect the request type and handle accordingly
// app
// .route('api/books')
// .get((req: Request, res: Response) => {
//     return res.send('you made a GET request');
// })
// .post((req: Request, res: Response) => {
//     return res.send('you made a POST request');
// })
// .put((req: Request, res: Response) => {
//     return res.send('you made PUT request');
// })
// .delete((req: Request, res: Response) => {
//     return res.send('you made DELETE request');
// })
// .all((req: Request, res: Response) => {
//     return  res.send('you made an X request');
// });

// ***** PARAMS IN ROUTE *****
// app.get('/api/books/:bookId', (req: Request, res: Response) => {
//     console.log(req.params.bookId);
//     return res.send(200);
// });

// ***** NESTED ROUTES *****
// app.get('/api/books/:bookId/:authorId', (req: Request, res: Response) => {
//     console.log(req.params.bookId);
//     return res.send(200);
// });

// ***** EXECUTION OF MULTIPLE HANDLERS USING NEXT() *****
// const handleGetBookOne = (req: Request, res: Response, next: NextFunction) => {
//     console.log(req.params);
//     next();
// };
// const handleGetBookTwo = (req: Request, res: Response) => {
//     console.log('second function called');
//     return res.send(req.params);
// };
// app.get('api/books/bookId', [handleGetBookOne, handleGetBookTwo]);

// ***** ERROR HANDLING *****
// By default express will return error 500
// Express v5+ additionally captures errors in async functions 
// app.get('/error', () => {
//     throw new Error('Boom');
// });

// Handle error
// app.get('/errortwo', (req, res) => {
//     try {
//         // do some logic and send success
//         res.sendStatus(200);
//     } catch (e) {
//         // handle error with res.status
//         res.status(400).send('Some error msg');
//     }
// })