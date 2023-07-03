import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'

function ResearchCard(props) {


 
  // PROACT tag data
  const catData=['Privacy','Responsibility','Openess','Accountability','Compliance','Trust']

    // SearchBarState
  const [search, setSearch] = React.useState('')

  // Category Tag State
  const[cat,setCat]=React.useState('')

  // Data State
  const [usedata,setUsedata]=React.useState(props.data)

  //Tag_Filter
  React.useEffect(() => {
    // console.log(cat)
     const a= 
     props.data.filter((info)=>{
        return cat===''?info: cat.every(val=>info.tags.includes(val))
    }
      )
      setUsedata(a)
  }, [cat])


  // Tag Filter Remover
  function remover(element){
    const da=
     cat.filter((rem)=>{
      return rem!==element
    })
    setCat(da)
  }

  // Date variables
  const[lowerDate,setlowerDate]=React.useState('')
  const[upperDate,setupperDate]=React.useState('')
  const[range,setRange]=React.useState('')


  //Year extract from data
  React.useEffect(() => {
    const lis=[]
    const a=
    usedata.map((data)=>{
     return( [...lis,data.year]).toString()
  })
  let un=[...new Set(a)].sort();
    setRange(un)

  }, [lowerDate,upperDate])

 
  // console.log(range)
  return (
    <>
    {/*DATE */}

    <div className='flex flex-wrap justify-center  w-full h-auto'>
        <span>
      <label htmlFor="LowerDate" className='text-[3.5vh] px-2 font-descFont font-semibold text-eg2'>From:</label>
  <select name="LowerDate" id="LowerDate" className=' bg-eg2 h-[5vh] w-[12vh] font-semibold rounded-2xl px-2  text-eg1 ' onChange={(e)=>setlowerDate(e.target.value)}>
  <option  defaultValue=""></option>
  {range?
  range.map((value)=>(<option value={value}>{value}</option>))
  :
  ""}
  </select>
  </span>
  <span>
      <label htmlFor="UpperDate" className='text-[3.5vh] px-2 font-descFont font-semibold text-eg2'>To:</label>
  
  <select name="UpperDate" id="UperDate" className=' bg-eg2 h-[5vh] w-[12vh] font-semibold rounded-2xl px-2  text-eg1 ' onChange={(e)=>setupperDate(e.target.value)}>
  <option  defaultValue=""></option>
  {range?
  range.map((value)=>(<option value={value}>{value}</option>))
  :
  ""}
  </select>

  </span>
      
    </div>


     {/* SEARCHBAR */}
     <div className='mt-2 mb-5 mx-10'>
     <div className=' text-center text-eg2 font-exclaim text-[5vh] inline-flex lg:ml-24'>
     Search
     <span>
     <svg className='w-[5vh] h-auto' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#77ACA2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#77ACA2" d="M62.828,57.172L50.402,44.746C53.902,40.07,56,34.289,56,28C56,12.535,43.465,0,28,0S0,12.535,0,28 s12.535,28,28,28c6.289,0,12.074-2.098,16.75-5.598l12.422,12.426c1.562,1.562,4.094,1.562,5.656,0S64.391,58.734,62.828,57.172z M28,48C16.953,48,8,39.047,8,28S16.953,8,28,8s20,8.953,20,20S39.047,48,28,48z"></path> </g> <circle fill="#F4E9CD" cx="28" cy="28" r="20"></circle> </g> </g></svg>
     </span>
     </div>
     <Form >
       <InputGroup className='flex justify-center'>
         <Form.Control placeholder='' className=' px-10 bg-eg3 text-epeach font-medium font-descFont text-[3vh] lg:w-3/4 w-full mb-5 h-[7vh] rounded-2xl '  onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())} />
       </InputGroup>
     </Form>
     </div>


     {/* PROACT FILTERS */}
     <div className='flex flex-wrap justify-center my-5 '>
      {catData.map((data)=>(
     <div  className='bg-eg2 p-2 rounded-2xl text-eg1 font-descFont font-semibold hover:bg-eg3 duration-200 items-center align-middle text-center mx-5 my-2' key={data}>
          <button type="button" id="category"  onClick={()=>  setCat([...cat,data])}>
            {data} 
            </button>
          {cat.includes(data)?<span >
            <button type="button" className='mx-2 hover:text-epeach' onClick={()=>remover(data)}>
            &#10006;
            </button>
            </span>:""
          }
           </div>
      ))} 
     </div>

    

    <div className='flex justify-center  flex-wrap lg:flex-row felx-col'>
    {/* CARDS */}

          {   
          usedata.filter((data)=>{
            return search ===""?data :data.name.toLowerCase().includes(search)
            })
            .filter((value)=>{
              if(lowerDate==="" && upperDate==="")
              return value
              else if(lowerDate!=="" && upperDate==="" ){
                var dateobj=new Date();
                var dateObject=dateobj.getFullYear();
              return value.year>=lowerDate && value.year<=dateObject
              }
              else return value.year>=lowerDate && value.year<=upperDate
            })
           
            .map((info)=>(
          <div className='lg:w-1/5 sm:w-1/2 w-3/4 h-auto bg-eg1 m-1 rounded-xl border-4 border-eg1' key={info.id}>
            <div className='mx-5 my-2'>
            <div className='text-[3vh] text-enavy font-headingFont font-medium text-center min-h-[12vh]'>
              {info.name}
            </div>
            <div className='text-[2.5vh] w-[90%] text-eg2 font-descFont font-semibold mb-2'>
                {'From: '+info.year}
              </div>

              <div className='text-[2vh] w-[90%] min-h-[16vh] text-eg3 font-descFont font-regular mb-5'>
                {info.description}
              </div>


                {/* Button */}
                <div className='text-center'>
           <a href={info.link}>
           <button type="button" className='bg-eg2 p-2 rounded-2xl text-eg1 font-descFont font-semibold hover:bg-eg3 duration-200 items-center align-middle text-center'>
            Read More
           </button>
           </a>
           </div>

            {/* CardTags */}
              <div className='flex justify-center mt-3 flex-wrap border-t-4 border-eg3 rounded-2xl'>
              
              {info.tags.map((info)=>(
              <div className='bg-eg3 p-2 rounded-2xl text-eg1 font-descFont font-semibold m-2 text-[1.8vh] '>
              {info}
            </div>
           ))}
          

              </div>
                
            
            </div>
          </div>
          ))}
    </div>
    </>
  )
}

export default ResearchCard
