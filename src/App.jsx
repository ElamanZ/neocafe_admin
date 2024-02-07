import Routes from './routes/Routes.jsx';

function App() {
  const isAuthenticated = true;

  return (
    <>
      <Routes isAuthenticated={isAuthenticated} />
    </>
  )
}

export default App
