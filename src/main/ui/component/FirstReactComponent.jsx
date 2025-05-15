import React, {useState} from 'react';

const FirstReactComponent = () => {
    const [value, setValue] = useState('')
    const [val, setVal] = useState('')
    return (
        <div>
            <p>You entered: {value}</p>
            <input value={value} onChange={event => setValue(event.target.value)}/>

            <p>Hello Molnet: {val}</p>
            <input value={val} onChange={event => setVal(event.target.value)}/>

            {/* Посмотреть
            <img src="warehouse.jpg" alt="Склад"></img>
            <FontAwesomeIcon icon={faPlus} />*/}
        </div>
    )
}

export {FirstReactComponent};