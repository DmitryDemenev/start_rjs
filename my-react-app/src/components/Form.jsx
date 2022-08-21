import {useState} from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
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

    const inputRef = useRef();

    useEffect (()=>{
        inputRef.current?.focus()
    })

    return(
        <form className="form" onSubmit={handleSubmit}>
            <TextField required placeholder="Введите сообщение" type = "text"
             value={value} onChange = {handleChange} inputRef = {inputRef}></TextField>
            <Button type="submit" variant="contained">Send</Button>
        </form>
    )
}