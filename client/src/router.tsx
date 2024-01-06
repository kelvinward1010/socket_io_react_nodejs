import { createBrowserRouter } from "react-router-dom";
import { Error } from "./components";
import { Conversation, SetupRoom, Welcome } from "./modules";
import { conversationUrl, setupyourroomUrl } from "./urls";










export const routerConfig = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Welcome />,
    },
    {
        path: setupyourroomUrl,
        errorElement: <Error />,
        element: <SetupRoom />,
    },
    {
        path: conversationUrl,
        errorElement: <Error />,
        element: <Conversation />,
    },
])