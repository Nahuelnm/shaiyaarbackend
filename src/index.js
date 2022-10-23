import morgan from 'morgan';
import app from './app';


// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Starting Server
app.listen(app.get('port'))
console.log("Server on port", app.get('port'));