import logo from './logo.svg';
import './App.css';
import Card from './components/article.component';
import VideoComponent from './components/iframe.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card title="title" sameLine="sameLine" desc="description" />
        <Card title="title" sameLine="sameLine" />
        <iframe 
          src="https://archive.ph/wQBFb" 
          title="Direct Video Frame" 
          style={{ border: "none", width: "30vw", height: "50vh" }}
          allowFullScreen>
        </iframe>

        <div className="flex-container">
            <VideoComponent link="https://archive.ph/wQBFb" />
            <VideoComponent link="https://archive.ph/wQBFb" />
        </div>

        <p>
          poggers
        </p>
      </header>
    </div>
  );
}

export default App;
