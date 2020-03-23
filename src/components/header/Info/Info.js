import React from 'react'
import st from './Info.module.css'



const Info = (props) => {
    return (
        <div className={st.main}>
            <div className={st.headerInfo}>
                Маклаков<br></br>
                Евгений Вадимович<br></br>
            </div>
            <div className={st.low}>
                Арбитражный управляющий
            </div>
        </div>
    )
}

export default Info;