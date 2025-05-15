// import React from "react";
//
// const EquipmentList = () => {
//     return (
//         <div>
//             <h2>Equipment List</h2>
//             <p>Список оборудования...</p>
//         </div>
//     );
// };
//
// export { EquipmentList };

import React, {useState} from 'react';

const EquipmentList = () => {
    const [val, setVal] = useState('')
    return (
        // <div>
        //     <p>Hello Molnet: {val}</p>
        //     <input value={val} onChange={event => setVal(event.target.value)} />
        // </div>

        <div style={styles.container}>
            <p>Hello Molnet</p>

            <h2 style={styles.header}>Таблица</h2>

            <p style={styles.paragraph}>Hello Molnet: {val}</p>
            <input value={val} onChange={event => setVal(event.target.value)} style={styles.input} />

            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>ФИО</th>
                    <th style={styles.th}>Логин</th>
                    <th style={styles.th}>Пароль</th>
                </tr>
                </thead>
                <tbody>
                <tr style={styles.tr}>
                    <td style={styles.td}>1</td>
                    <td style={styles.td}>Попов Арсений Сергеевич</td>
                    <td style={styles.td}>my_login_001</td>
                    <td style={styles.td}>my_password_001</td>
                </tr>
                <tr style={styles.tr}>
                    <td style={styles.td}>2</td>
                    <td style={styles.td}>Позов Дмитрий Темурович</td>
                    <td style={styles.td}>my_login_002</td>
                    <td style={styles.td}>my_password_002</td>
                </tr>
                <tr style={styles.tr}>
                    <td style={styles.td}>3</td>
                    <td style={styles.td}>Матвиенко Сергей Борисович</td>
                    <td style={styles.td}>my_login_003</td>
                    <td style={styles.td}>my_password_003</td>
                </tr>
                <tr style={styles.tr}>
                    <td style={styles.td}>4</td>
                    <td style={styles.td}>Шастун Антон Андреевич</td>
                    <td style={styles.td}>my_login_004</td>
                    <td style={styles.td}>my_password_004</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

// CSS-стили
const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        padding: "20px",
    },
    header: {
        color: "#007bff",
    },
    paragraph: {
        fontSize: "18px",
        marginBottom: "10px",
    },
    input: {
        padding: "8px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "20px",
    },
    table: {
        width: "60%",
        margin: "0 auto",
        borderCollapse: "collapse",
        backgroundColor: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        overflow: "hidden",
    },
    th: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "12px",
        border: "1px solid #ddd",
    },
    td: {
        padding: "12px",
        border: "1px solid #ddd",
        textAlign: "left",
    },
    tr: {
        backgroundColor: "#f9f9f9",
    },
};

export {EquipmentList};