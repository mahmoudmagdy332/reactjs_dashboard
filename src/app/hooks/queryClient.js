import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

import Cookies from "js-cookie";
// Function to handle errors globally

const handleGlobalError = (error) => {

  // if ( error.response?.status == 401) {
  //   console.error(`[Global Error]: Unauthorized access - ${error.response.status}`);
  //   Cookies.remove("access_token");
  //   localStorage.setItem("student","");
  //   window.location.href="/";
  // } else if (error) {
  //   console.error(`[Global Error]: ${error}`);
  // } else {
  //   console.error(`[Global Error]: An unknown error occurred`);
  // }
};

// Create a QueryClient instance with default options
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error) {
        handleGlobalError(error)
        return error;
      }
    },
  }),
  mutationCache: new MutationCache({
  
  onError: (error) => {
    if (error) {
      handleGlobalError(error)
      return error;
    }
  },
}),
  
});

export default queryClient;