import {FC} from 'react' 
interface IInput{
    type:string,
    placeholder:string
}
const Input:FC<IInput> = ({type,placeholder}) => {
    return( 
        <input type={type} placeholder={placeholder}/>
    )
}

export default Input