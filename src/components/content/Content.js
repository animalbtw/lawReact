import React from 'react'
import st from './Content.module.css'
import Form from './Form/Form'
import Activities from './Activities/Activities'


const Content = (props) => {
    return (
        <div className={st.content}>
            <div className={st.bg}>
                <Form />
            </div>
            <Activities />
        </div>
    )
}

export default Content;