import {useState} from 'react';

function List() {
    const[text, setText] = useState('');         //for the input
    const[items, setItems] = useState([]);         //for the list

    function addItem() {
    setItems([...items, text]);   
    setText('');             

    }
    return (
        <div>
            <input
            type= "text"
            value ={text}
            onChange={(e) =>setText(e.target.value)}/>
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, index)=>
                <li key={index}>{item}</li>
        )}
            </ul>
        </div>
    );
}
 export default List;
    