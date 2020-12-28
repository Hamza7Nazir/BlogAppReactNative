import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  // (blogPosts , action)
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random() * 999999),
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPosts) => blogPosts.id !== action.payload); // if condition is true it will return else rejected
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost; // if true send action.payload else blogPost
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } }); // {title: tilte, content: content}
    callback(); // this will take us to Index page
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } }); //id: id, title:title,content:content
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
); // reducer, dispatch (action), initialState
