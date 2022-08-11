import {useState} from "react";

export function Form ({ onSubmit }){
    const [value, setValue] = useState ("");

    const handleSubmit = function(e){
        e.preventDefault();
        onSubmit(value);
        setValue('')
    }

    const handleChange = function(e){
        setValue(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type = "text" value={value} onChange = {handleChange}></input>
            <button>Отправить</button>
        </form>
    )
}