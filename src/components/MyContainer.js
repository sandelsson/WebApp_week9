import MyList from './MyList'
import {useState} from 'react'


function MyContainer(){


    const[items, setItems] = useState([
        { id: "1", text: "This is an item", clicked: false},
        { id: "2", text: "This is also an item", clicked: false}
    ])

    const updateitem = (id) => {
        //console.log(id.target.text)
        //className={item.clicked ? 'clicked' :''}
        var index = items.findIndex(x=> x.id === id); //https://www.codegrepper.com/code-examples/css/update+array+in+useState
        console.log(items[index].clicked)
        items[index].clicked = true
        document.getElementById(items[index].id).setAttribute("class", "clicked")
        console.log(items[index].id)
        //document.getElementById(items.index[id]).setAttribute("ClassName", "clicked")
        
        
    }

    const [inputtext, setText] = useState('')

    

    const onSubmit = (e) => {
        e.preventDefault()
        addItem({text: inputtext})

        setText("")
  


    }
    
    const addItem = (item) => {
        //console.log(item)
        const id = Math.floor(Math.random() * 100500 + 123)
        const newItem = {id, ...item}
        //console.log(items)
        setItems([...items, newItem])
      }
    




    return (
        <div>
            <MyList updateitem={updateitem} header="" items={items} />
            <div>
            <form onSubmit={onSubmit}>
                <label></label>
                <textarea placeholder="Add item" onChange={(e) => setText(e.target.value)} value={inputtext}/>
                <input className="btn" type="submit" value="Add"></input>

            </form>

            </div>  
        </div>

        


    )
    
    


    }
export default MyContainer