import './App.css'
import PageRouters from 'routers'
import Header from 'components/layouts/Header'
import ThemeContextProvider from 'context/themeProvider'

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header />
        <PageRouters />
      </div>
    </ThemeContextProvider>
  )
}

export default App
