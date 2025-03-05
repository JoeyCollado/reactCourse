import { useMemo, useDeferredValue } from "react"

const List = ({input}) => {

  const List_Size = 20000
  const defferedInput = useDeferredValue(input)
  const list  = useMemo(() => {
    const l = []

    for(let i = 0; i < List_Size; i++){
       l.push(<div key={i}>{defferedInput}</div>)
    }
    return l
  }, [defferedInput])

  return list
}

export default List