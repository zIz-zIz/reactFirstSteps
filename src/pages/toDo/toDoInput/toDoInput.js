import React from 'react';
import MyButton from '../../../components/button/btn';

export default ToDoInput;
 
function ToDoInput({addNewTask}) {
    const [inputValue, setInputValue] = React.useState('');

    const createNewTask = () => {
        if (inputValue.trim().length) {
            addNewTask({
                id: new Date(),
                title: inputValue,
                completed: false
            });
            setInputValue('');
        }
    }

    return (
        <div className='d-flex'>
            <input className='to-do__input' 
                type='text' 
                placeholder="add task"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}/>
            <button className='btn btn_success' onClick={createNewTask}>add</button>
            {/* Пример создания собстевнной кнопки
            <MyButton className="red">add</MyButton> */}
        </div>
    )
}