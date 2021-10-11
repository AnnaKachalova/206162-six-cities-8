import Main from '../main/main';

type AppProps = {
  rentCount: number;
}

function App({rentCount}:AppProps): JSX.Element {
  return (
    <Main rentCount={rentCount}/>
  );
}

export default App;
