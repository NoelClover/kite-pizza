import {FC} from 'react'
import Input from '../UI/Input/Input'
export interface IInputData{
    id:number,
    type:string,
    placeholder:string,
    onChange?:()=>void,
}
export interface IForm{
    countInput:IInputData[],
    labelText?:string,
    addBtn?:boolean,
    textBtn?:string,
}

const Form:FC<IForm> =({countInput,addBtn,labelText,textBtn}) => {
    return(
        <form>
            {countInput.map((item,idx)=>{
                console.log(item);
                
                return(
                    <Input key={item.id} type={item.type} placeholder={item.placeholder}/>
                )
            })}
            <button>submit</button>
        </form>
    )
}

export default Form