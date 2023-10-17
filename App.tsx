// App.js
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigator from './src/navigation/navigator';

const queryClient = new QueryClient();

const App = () => {
  console.log('thisi s querty client', queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;
