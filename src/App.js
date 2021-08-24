import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
    return (
        <div className="App">
            <div className="App-content">
                <p>
                    Lista de la compra
                </p>
                <Form />
            </div>
        </div>
    );
}
export default App;