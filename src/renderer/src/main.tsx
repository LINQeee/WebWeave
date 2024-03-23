import './assets/main.sass'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { setupStore } from './store/Store'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
