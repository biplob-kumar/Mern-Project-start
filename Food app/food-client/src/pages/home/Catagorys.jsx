import React from 'react'


const categoryItems = [
    {id: 1, title: "Main Dish", despriction: "(86 dishes)", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUz70WBczGA0sBsyRexdw-vbDFf7-5i-0VB9WA6GvICA1_jaIlbYowE7qjEnKCg01vt-gyM8gWs4vqg3S_SFylY-qJdYqC6t5CPnr8U9vb0DvdXphgyVnrShHoJwDl89S51X5UbmLqkru-3FCxfjCJhFqBwFGV5zgNqBUGKSp31JWkFbItADga3XfG/s1600/img1.png"},
    {id: 2, title: "Break Fast", despriction: "(12 break fast)", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimF9lksGupvt6E12wLkQG6LXfHLvU_1q3aOrdSmbXRCTau1nA7vXiO3aha_P13Vj4byiRzA46tw2USNxqrFSRxaYRT-jmDg9VNv7VLmuZRrPoan9xwLwK9683MRomV8c1mbKijvkdStxz7AhIv_nOPy4N_uN6IAHS01qnnhL-fMAKh3KpNOs_1ee4u/s1600/img2.png"},
    {id: 3, title: "Dessert", despriction: "(48 dessert)", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGuEIXSjoTiNluyVFU_FgTCF8h2AewQRQggvaVI4VVhtcJPH4ozcES6j1YAhk_l6qs7bhNkESYccEKh__JegU-gL4ddXSFc6CnB0vvmkGa1moLvfASzpJQbxDT20GCvjk8UiRBtCCffXyy2gl7cfTjWlQPIV8NijQXAgJtZleztQ1fYmRR4_THlsRt/s1600/img3.png"},
    {id: 4, title: "Browse All", despriction: "(255 Items)", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqRDpfUzHRImWb1uAEomREjnQXOXRdmm504l87c2HeKApoGP7PXPtnd5LdZlMjp8ywnxySVec-rM5yeKgOomkLpU5bZyj7hWrtqR3pLslBdhVT9cD26x3KZfpkZRWtwFvwUtU0SIrant0aMO1uwPj8svE8HSn21wkzc5cqL3i4npe3qxzJ5O13HXtC/s1600/img4.png"}
]

const Catagorys = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 bg-white'>
    <div className='text-center'>
        <p className='subtitle'>Customer Favorites</p>
        <h2 className='title  '>Popular Catagories</h2>
    </div>

    {/* category cards */}
    <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
        {
            categoryItems.map((item, i) => (
                <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                    <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' /></div>
                    <div className='mt-5 space-y-1'>
                        <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                        <p className='text-secondary text-sm'>{item.despriction}</p>
                    </div>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default Catagorys