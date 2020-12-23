import React, {useReducer} from 'react';

const BlogContext = React.createContext();


const blogReducer = (state, action) =>{
    switch(action.type){
        case 'add_blogPost':
            return [...state, {title: `Blog Post #${state.length+1}`}];
        default:
            return state;

    }
}



export const BlogProvider = ({ children }) => {

    //const [blogPosts, setBlogPosts] = useState([]);  
    const [blogPosts, dispatch] = useReducer(blogReducer, []);  
    const addBlogPost = ()=>{
       dispatch({type: 'add_blogPost'})
    }
  return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>{children}</BlogContext.Provider>; // value can be used anywhere where we import this BlogContext
}; // 'addBlogPost: addBlogPost' can be condensed to 'addBlogPost' only

export default BlogContext;