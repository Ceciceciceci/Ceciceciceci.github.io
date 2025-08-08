//dependencies
import { useState, Suspense, lazy } from 'react'
// styles
import './App.css'
// components
import Button from './components/Button';
import GithubCommitGraph from './components/GithubCommitGraph';
import { Card } from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  const AboutMeComponent = lazy(() => import('./pages/AboutMe'));

  return (
    <>
      <div>
        <Suspense fallback={<div>Loading about me...</div>}>
            <AboutMeComponent />
        </Suspense>
        <div>
          <p>here's a fun button to press on </p>
          {count}
          <Button 
            title={'Hello'}
            disabled={false}
            onClick={() => setCount(count + 1)}
            type={'primary'} 
            size={'small'} 
            hasIcon={false}
          />
          <div>
            Git commit graph
            <GithubCommitGraph />
          </div>

          <Card 
            title='Card Number 1'
            subtitle='card number 1s subtitle' 
            imageUrl={''} 
            altText='random image' 
            description='some description describing the card'
            onClick={function (): void {
               new Error('Function not implemented.');
            }} 
          />
        </div>
      </div>
    </>
  )
}

export default App
