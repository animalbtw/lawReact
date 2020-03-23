import React from 'react'
import st from './Activities.module.css'
import Block from './Block/Block'



const Activities = (props) => {
    return (
        <div className={st.wrapper}>
            <div className={st.header}>
                <h2>Деятельность:</h2>
            </div>
            <div className={st.blocks}>
                <div></div>
                <div className={st.item}><Block head='Юридические услуги' body='Команда высококвалифицированных юристов готова оказать помощь в решении правовых вопросов.' /></div>
                <div className={st.item}><Block head='Банкротство физических лиц' body='Самый эффективный и законный способ избавления от долгов. Если общая сумма долга превышает 500 тысяч рублей, то, на сегодняшний день, граждане выбирают процедуру банкротства.' /></div>
                <div className={st.item}><Block head='Банкротство юридических лиц' body='При наличии законных оснований позволяет ликвидировать компанию со значительной суммой кредиторской задолженности, в том числе по налогам.' /></div>
                <div></div>
            </div>
        </div>
    )
}

export default Activities;