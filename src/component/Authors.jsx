import { useState } from "react"
import { authors } from "../data/authors"

const Authors = () => {
    const [authorsdata,setauthorsdata] = useState(authors)
    const filterauthors = (e) => {
        const filterdauthorsdata = authors.filter((data) => data.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())

        )
        setauthorsdata(filterdauthorsdata)
        
    }
    return (
        <>

            <div className="container flex flex-wrap justify-center gap-2 my-6">
                <input type="text" className="w-full py-2 my-2 pl-5 outline-none capitalize" placeholder="Search For The Author" onChange={filterauthors} />
                {authorsdata.map((data) => {
                    return (

                        <div className="author w-72 rounded-lg p-5 flex flex-col items-center gap-2 border-2 border-black" key={data.id}>
                            <div className="img w-64 h-36 overflow-hidden bg-white ">
                                <img src={`/public/assets/${data.image}`} alt="" className="w-full h-full rounded-lg" />
                            </div>
                            <p className="font-bold text-xl">{data.name}</p>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default Authors