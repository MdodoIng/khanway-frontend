import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Store from "@helper/store.tsx";
import {Provider} from "react-redux";
import './language/i18n.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={Store.store}>
        <App/>
    </Provider>
)
