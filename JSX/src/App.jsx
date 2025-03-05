import './index.css'

export default function App(){
   return <> <form className='new-item-form'>
     <div className='form-row'>
      <label htmlFor='item' className='item'>New Item</label>
      <input type='text' id='item'></input>
     </div>
     <button className='btn'>Add</button>
   </form>

   <h1 className='header'>Todo List</h1>
   <ul className='list'>
    <li>
      <label className='itembox'>
        <input type='checkbox'></input> 
        <span>Item 1</span>
      </label>
      <button className='btn btnDanger'>Delete</button>
    </li>

    <li>
      <label className='itembox'>
        <input type='checkbox'></input> 
        <span>Item 2</span>
      </label>
      <button className='btn btnDanger'>Delete</button>
    </li>
   </ul>
   </>
}