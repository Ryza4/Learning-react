import '../styles/Partners.css'

function Partners(props) {
  return (
    <div className="partner-list">
        {
            props.Partnerlist.map((item,index) => {
                    return( 
                    <div class="kartu-partner" key={index}>
                        <img src={item.image}/>
                    </div>)
            })
        }
   

</div>
  )
}

export default Partners
