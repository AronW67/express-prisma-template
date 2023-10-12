import { Express, Request, Response } from 'express';
import { createUser, getUsers } from './controllers/user.controller';

/**
 * Function which allocates the routes for the application
 * @param app the express application
 */
const routes = (app: Express) => {
    // Default route
    app.get('/', (req: Request, res: Response) => res.status(200).send('Welcome to the express template'));
    
    // Define api routes
    app.get('/api/user', getUsers);

    app.post('/api/user', createUser);

    // Catch all for unmatched routes
    app.all('*', (req, res) => {
        res.status(404).send('Not Found');
    });
};

export default routes;