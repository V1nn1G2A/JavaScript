let nextCommentId = -1

export const addComment = () => {
   const autorValue = document.querySelector('.form__name-comment'),
      textValue = document.querySelector('.form__text-comment');
   nextCommentId = (nextCommentId === -1) ? document.querySelectorAll('.comment__block').length + 1 : nextCommentId; 

   let test = {
      type: 'ADD_COMMENT',
      id: ++nextCommentId,
      autor: autorValue.value,
      text: textValue.value
   }

   console.log(test);
   return test;
}

export const deleteComment = (id) => {
   let test = {
      type: 'DELETE_COMMENT',
      id: id
   };

   return test;
}