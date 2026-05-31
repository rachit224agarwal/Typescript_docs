import './App.css'
import { Card } from './components/Card.tsx'
import { ChaiCard } from './components/ChaiCard.tsx'
import { ChaiList } from './components/ChaiList.tsx'
import { Counter } from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import type { Chai } from './types.ts'

function App() {

const Menu : Chai[] = [
  {id: 1,name: "Masala Chai",price: 25},{id: 2,name: "Ginger Chai",price: 30},{id: 3,name: "Lemon Chai",price: 35}
]

  return (
    <>
      <div>
        <h1>React with TypeScript</h1>
        <ChaiCard name="Masala Chai" price={25} />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={Menu} />
      </div>
      <br />
      <OrderForm onSubmit={(order) => console.log("Order submitted:", order)} />
      <br /><br />
      <Card title="Welcome to React with TypeScript!" footer={<button>Chai and TypeScript</button>} />
    </>
  )
}

export default App
