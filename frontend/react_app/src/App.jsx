import Helmet from 'react-helmet'
import Hello from './components/Hello'

function App() {
  
  return (
    <>
     <Helmet>
      <title>Hi</title>
     </Helmet>
     <Hello name="Jake"></Hello>
    </>
  )
}

export default App
