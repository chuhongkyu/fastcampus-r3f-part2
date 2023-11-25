import Seoul from "../pages/Seoul"
import Home from "../pages/index"

export const routerInfo = [
  {
    path: "/",
    element: <Home/>,
    children: [
      {
          path: "seoul",
          element: <Seoul />,
      },
    ]
  },
]