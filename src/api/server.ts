import express,{json} from 'express'
import users from './routes/users'

const app = express()
app.use(json())

//MiddleWare


// Routes
app.use('/api',users);

export default app;
