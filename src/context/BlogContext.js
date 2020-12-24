import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  // (blogPosts , action)
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: action.payload.title, content: action.payload.content , id: Math.floor(Math.random()*999999) }];  //`Blog Post #${state.length + 1}`
    case "delete_blogpost":
    return state.filter((blogPosts)=> blogPosts.id !== action.payload) // if condition is true it will return else rejected
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "add_blogpost", payload: {title, content} }); // {title: tilte, content: content}
  };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
      dispatch({ type: "delete_blogpost", payload: id });
    };
  };

export const { Context, Provider } = createDataContext( blogReducer, { addBlogPost, deleteBlogPost }, [] ); // reducer, dispatch (action), initialState
