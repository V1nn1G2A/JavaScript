import React from "react";

const Commment = (props) => {
   const {id, deleteComment} = props;

   return <li 
            className = {'comment__block'}
            >
            <div className={'comment__content'}>
               <h3 className={'comment__autor'}>
                  {props.autor}
               </h3>
               <button 
                  className={'comment__delete'}
                  onClick = {() => {deleteComment(id)}}
                  >
                  </button>
               <p className={'comment__text'}>
                  {props.text}
               </p>
               <span className={'comment__date'}>{props.date}</span>
            </div>
         </li>
}

export default Commment;