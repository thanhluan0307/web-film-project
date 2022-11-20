import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import {pageRoutes} from '~/routes'
import DefaultLayout from '~/Layout/DefaultLayout/DefaultLayout';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
          {pageRoutes.map(function (route,index) {
              return (
                <Route 
                  key={index}
                  path={route.path} 
                  element={
                    <DefaultLayout>
                        <route.component/>
                    </DefaultLayout>
                  }
                />
              )
            })
          }
        </Routes>
    </BrowserRouter>
  );
}

export default App;
