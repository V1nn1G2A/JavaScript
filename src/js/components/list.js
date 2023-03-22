import React from "react";
import Commment from '../components/comment'

const ListComments = (props) => {
   const { comments, deleteComment } = props; 
   
   return (
      <section className={'comment'}>
         <h2 className={'headline'}>
            Комментарии
         </h2>
         <span className={comments.length === 0 ? 'comment__inline' : 'comment__none'}>
            Список пуст...
         </span>
         <ol
            >
         {
            comments.map((comment) => {
               return (
                  <Commment
                     key = {comment.id}
                     id = {comment.id}
                     autor = {comment.autor}
                     text = {comment.text}
                     date = {comment.date}
                     deleteComment = {deleteComment}
                  />
               )
            })
         }
      </ol>
   </section>
   )
}

export default ListComments;