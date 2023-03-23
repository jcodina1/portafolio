export default function Slider({total}){
    return(
        <div className="slider">
          <div className="slide-track">
            {total.map((p,index) => (
              <div className="slide" key={index}>
                <img  src={p.img} alt="" />
              </div>
            ))}
          </div>
        </div>
    )
}