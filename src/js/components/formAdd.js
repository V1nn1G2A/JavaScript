import React from "react";

const Form = ({addComment}) => {
   return <div className={'col-12 col-sm-9 col-lg-6'}>
            <section className={'add-comment'}>
               <h2 className={'headline'}>
                  Добавить комментарий
               </h2>
               <div className={'form'}>
                  <label className={'form__label'}>
                     * Текст комментария
                  </label>
                  <input className={'form__text-comment'} type='text' name='Текст комментария' cols='30' rows='10'></input>
                  <label className={'form__label'}>
                     * Автор
                  </label>
                  <input required className={'form__name-comment'} type='text' name='Имя автора' cols='30' rows='10'></input>
                  <button 
                     className={'form__button'}
                     onClick = {addComment}
                  >Добавить</button>
               </div>
            </section>
         </div>;
}

export default Form;