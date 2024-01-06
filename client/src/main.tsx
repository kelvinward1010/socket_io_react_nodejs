//import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './router'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={routerConfig} />
    </RecoilRoot>
  // </React.StrictMode>,
)
