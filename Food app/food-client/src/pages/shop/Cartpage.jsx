import React, { useContext } from 'react'
import UseCarts from '../../hooks/UseCarts'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AuthContext } from '../../contexts/AuthProvider'
const Cartpage = () => {

  const [cart,refetch]= UseCarts()
  const {user} = useContext(AuthContext)

  //  incriment decriment button 
  const handleDecrese=(item)=>{
 console.log(item._id)
  }

  const handelincrase=(item)=>{
    console.log(item._id)
  }

  //  handle delete btn 
  const handleDelete=(item)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to  Delet it !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:8000/carts/${item._id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data=>{
        if (data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your Cart Data has been deleted.",
            icon: "success"
          });
        }
       })
      }
    });
  }
  return (
    <div className='section-container bg-white '>
     {/* banner  */}
      <div className=' bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='banner py-40 flex  flex-col items-center  justify-center  gap-8'>
          {/*  text  */}
          <div className='px-4 space-y-7 ' >
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black">
              Items Added to The <span className="text-green">Cart</span> 
              </h2>
          </div>
        </div>

      </div>

      {/*  cart for  tables */}
      <div>
      <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead className='bg-green text-white border-none rounded-sm' >
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      
        <th></th>
      </tr>
    </thead>
    <tbody className='text-black'>
      {/* row 1 */}
       {
        cart.map((item,index)=>(
          <tr  key={index}>
   <td>{index+1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {item.image} alt="cart" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td className='font-medium'>
        {item.name}
        </td>
        <td>
            <button className='btn bg-slate-300  text-black hover:bg-white btn-xs border-none'
            onClick={()=>handleDecrese(item)}>-</button>
            <input
             type="number"  
             onChange={()=> console.log(item.quantity)}
             value={item.quantity} 
             className='w-10 bg-white mx-2 text-center overflow-hidden'  />
            <button className='btn  bg-slate-300 text-black hover:bg-white  btn-xs border-none'
             onClick={()=>handelincrase(item)}
            >+</button>
          
         </td>
        <td>$ {item.price} </td>
        <th>
          <button className="btn btn-ghost btn-xs bg-red" onClick={()=>handleDelete(item)}>
            <FaTrash/>
          </button>
        </th>
      </tr>
        ))
       }
    </tbody>
    {/* foot */}

    
  </table>
</div>
      </div>

   {/*  customer details  */}
   <div className='my-12 py-5 flex flex-col md:flex-row justify-between items-start text-black'>
    <div className='md:w-1/2 space-y-3' >
      <h3 className='font-medium'>Customer Details </h3>
      <p>Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <p>User_id: {user.uid}</p>
    </div>
    <div className='md:w-1/2 space-y-3' >
    <h3 className='font-medium'> Shopping  Details </h3>
      <p>TotalItems: {cart.length}</p>
      <p>TotalPrice: $0.00</p>
      <button className='btn bg-green text-white border-none '>Proced Checkout </button>
    </div>
   </div>
    </div>
  )
}

export default Cartpage