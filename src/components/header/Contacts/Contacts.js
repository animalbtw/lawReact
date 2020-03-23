import React from 'react'
import st from './Contacts.module.css'


const Contacts = (props) => {
    return (
        <div className={st.headerContacts}>
            <div className={st.main}>
                <strong>
                    +7 (999) 999-99-99<br></br>
                    +7 (999) 999-99-99<br></br>
                </strong>
            </div>
            <div className={st.time}>с 9:00 до 18:00</div>
        </div>
    )
}

export default Contacts;