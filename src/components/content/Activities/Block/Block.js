import React from 'react'
import st from './Block.module.css'



const Block = (props) => {
    return (
        <div className={st.wrapper}>
            <div className={st.header}>
                <h3>{props.head}</h3>
            </div>
            <div className={st.body}>
                {props.body}
            </div>
        </div>
    )
}

export default Block;