import MyList from './MyList'
import useState from 'react'

const MyContainer = () => {
    const[items, setItems] = useState([
        { id: "1", text: "This is an item"},
        { id: "2", text: "This is also an item"},
        { id: "3", text: "This is also an item ':D'"}
    ])
}
  
  export default MyContainer;