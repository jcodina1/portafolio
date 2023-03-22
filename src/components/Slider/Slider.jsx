export default function Slider({total}){
    return(
        <div className="slider">
          <div className="slide-track">
            {total.map((p) => (
              <div className="slide">
                <img key={p.id} src={p.img} alt="" />
              </div>
            ))}
          </div>
        </div>
    )
}