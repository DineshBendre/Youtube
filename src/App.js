import "./App.css";
import Head from "./componenets/Head";
import Body from "./componenets/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainCointainer from "./componenets/MainCointainer";
import WatchPage from "./componenets/WatchPage";

const appRouter= createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path:"/",
      element: <MainCointainer/>,
    },
    {
      path:"watch",
      element: <WatchPage/>,
    },
    
  ]
}])
function App(){
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
