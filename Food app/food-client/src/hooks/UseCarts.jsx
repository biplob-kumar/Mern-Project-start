import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const UseCarts = () => {
  const {user} = useContext(AuthContext)
  const {refetch,data:cart=[]}=useQuery({
    queryKey: ['todos',user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/carts?email=${user?.email}`)
      return res.json()
    },
  })
  return [cart,refetch]
}

export default UseCarts