import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Article from './Article'
import ArticleDetail from './ArticleDetail'

export default function ArticleRoute() {
    return (
        <Routes>
            <Route path='/' element={<Article />} />
            <Route path='/:id' element={<ArticleDetail />} />
        </Routes>
    )
}
