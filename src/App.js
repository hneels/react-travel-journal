import './App.css';
import data from './data'
import Card from './components/Card'
import Header from './components/Header';

function App() {

    const places = data.map(place => {
        return (
            <Card
                key={place.title}
                {...place}
            />
        )
    })


    return (
        <div className="app">
            <Header />
            {places}
        </div>
    );
}

export default App;
