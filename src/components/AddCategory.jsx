import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange=({target})=>{
        setInputValue(target.value);
    }

    const onSubmit=(event)=>{

        //previene que se refresque toda la pagina por el form
        event.preventDefault();

        //condicion para que solo se pueda ingresar mas de 1 un digito
        if(inputValue.trim().length <=1) return;

        //usa las props para agregar lo escrito en inputvalue junto
        //con lo que hay en categories en la lista
        //setCategories((categories)=>[inputValue,...categories]);
        onNewCategory(inputValue.trim());
        //limpiar con enter
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="buscar gif" 
        value={inputValue} onChange={onInputChange}/>
    </form>
  )
}
