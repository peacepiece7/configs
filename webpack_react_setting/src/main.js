import { createRoot } from 'react-dom/client'
import '@/main.scss'
import testImage from '@/assets/test.png'
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const imgEl = document.createElement('img')
imgEl.src = testImage
document.body.append(imgEl)

const app = document.getElementById('root')
const root = createRoot(app)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>HOME</h1>} />
      <Route path='/product' element={<h1>PRODUCT</h1>} />
      <Route path='*' element={<h1>NOT FOUND</h1>} />
    </Routes>
  </BrowserRouter>
)
