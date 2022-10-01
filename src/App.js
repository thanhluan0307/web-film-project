import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import DefaultLayout from '~/components/Layout/DefaultLayout/DefaultLayout';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map(function (route,index) {
            const Layout = route.layout || DefaultLayout
              return (
                <Route 
                  key={index}
                  path={route.path} 
                  element={
                    <Layout>
                        <route.component/>
                    </Layout>
                  }
                />
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
