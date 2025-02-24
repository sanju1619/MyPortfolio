import  "./myexperience.css"


function Myexperience(){
    return <>
    <div style={{margin:"20 px ", padding:"20px" , border:"1px solid black ",  backgroundColor:"black"}}>
    <div style={{backgroundColor:"black", color:"white", }}>
        <h1>
            My experience
        </h1>

        <div style={{border:"0.5px solid white",margin:"15px", borderRadius:"20px"}}>
        <div className="MyexperienceMob"style={{display:"flex", alignItems:"center", justifyContent:"space-around", height:"100px"} } >
            <img src="/assets/relevancelabLogo.svg" height="15px"></img>
            <h4 style={{fontSize:"24",fontWeight:" 600"}} > Service Desk Engineer At Relevance Lab</h4>
            <p style={{fontSize:""}}> October 2023 - present</p>
        </div>
        <p className="mydescMob"style={{padding:"20px"}}>I work as a Service Desk Engineer at Relevance Lab( https://www.relevancelab.com/)  with 1.5 years of experience in IT support. I'm also passionate about web development and currently building projects with React.js. </p>
        </div>
        </div>
        </div></>
    
      


}
export default Myexperience