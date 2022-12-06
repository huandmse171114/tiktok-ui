import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/component/Layout'
import { Fragment } from 'react'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Component = route.component
                        let Layout = DefaultLayout

                        if (route.layout === null) Layout = Fragment
                        else if (route.layout) Layout = route.layout

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            ></Route>
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
