//src/App.js
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination'
import axios from 'axios'
 
function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(7) //7 Per Page
 
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
 
    fetchPosts()
  }, [])
 
  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/postsPerPage)
   
  return (
    <div className="container" style={{padding: 20}}>
      <h4 className="d-inline-block">ReactJS Pagination - React axios.get</h4>
 
      <table className="table table-striped">
          <thead className="thead-light ">
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </thead>
          <tbody>
          {currentPosts.map(row => <tr>
            <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.body}</td>
            </tr>)}
          </tbody>
        </table>
 
      <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
    </div>
  );
}
 
export default App;