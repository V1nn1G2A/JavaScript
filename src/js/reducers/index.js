import {getFullDate} from "../date";

const initialState = [
   { id: 1, autor: "Иван Будько", text: "Едрен батон", date: "20 Января в 19 часов 40 минут"},
   { id: 2, autor: "Сан Саныч", text: "Потрясающе", date: "20 Января в 20 часов 15 минут" }
];

const commentsReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_COMMENT':
         return [
            ...state,
            { id: action.id, autor: action.autor, text: action.text, date: getFullDate() }
         ]

      case 'DELETE_COMMENT':
         return state.filter(comment => {return comment.id !== action.id})

      default:
         return state;
   }
};

export default commentsReducer;