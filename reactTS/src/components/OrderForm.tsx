import { useState } from "react";

interface OrderFormProps {
    onSubmit(order:{name: string , price: number}) : void
}

export function OrderForm({ onSubmit }: OrderFormProps) {

    const [name, setName] = useState<string>("Masala Chai");
    const [price, setPrice] = useState<number>(25);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // prevent the default form submission behavior which would cause a page reload
        onSubmit({name, price});
    }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} // on change is used to update the state of name and price when user types in the input fields
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}


