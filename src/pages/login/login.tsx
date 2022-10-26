import {FC} from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form/Form'

const Login:FC = () => {
    const inp = [
        {   
            id:0,
            type:'string',
            placeholder:'login'
        },
        {
            id:1,
            type:'password',
            placeholder:'password'
        }
    ]
    return(
        <div>
            <Link to='/'>Back to main</Link>
            <Form countInput={inp}/>
            Login
        </div>
    )
}

export default Login