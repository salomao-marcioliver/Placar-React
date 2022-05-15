import { useState } from "react"

type Props = {
    nameItem:string
}

export const Placar = ({nameItem}:Props) => {
    
    const [n, setN] = useState(0)
    const soma = () => {
        localStorage.setItem(nameItem, n.toString())
        setN(old => old + 1)

    }
    const diminui = () => {
        localStorage.setItem(nameItem, n.toString())
        setN(old => old - 1)

    }
    return (
        <div>
            <button onClick={soma}>+</button>
            {localStorage.getItem(nameItem)}
            <button onClick={diminui}>-</button>
        </div>
    )


}