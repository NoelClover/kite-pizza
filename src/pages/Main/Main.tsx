import {FC} from 'react'
import { Link } from 'react-router-dom'
const Main:FC = () => {
    return(
        <div>
            <Link to='/login'>login</Link>
            <Link to='/reg'>Registration</Link>
        </div>
    )
}


export default Main