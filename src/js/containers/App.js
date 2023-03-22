import React from 'react';
import Form from '../components/formAdd';
import ListComments from '../components/list';
import { addComment, deleteComment } from '../actions';
import { connect } from 'react-redux';


let CommentApp = ( props ) => {
   const {comments, addComment, deleteComment} = props;

   return(
      <React.StrictMode>
         <main>
            <h1>Страница со списком дел</h1>
            <div className={'container'}>
               <div className={'row  d-flex  justify-content-center'}>
                  <div className={'col-12  col-sm-9  col-lg-6'}>
                     <ListComments comments={comments} deleteComment={deleteComment} />
                  </div>
                  <Form addComment={addComment}/>
               </div>
            </div>
         </main>
      </React.StrictMode>
   );
}

const mapStateToProps = state => {
   return { comments: state }
}

const mapDispatchToProps = dispatch => {
   return {
      addComment: () => dispatch(addComment()),
      deleteComment: (ev) => dispatch(deleteComment(ev))
   }
}

CommentApp = connect(
   mapStateToProps,
   mapDispatchToProps
)(CommentApp);

export default CommentApp;
