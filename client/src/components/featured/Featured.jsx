import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <>
    <div >
           <h2>Looking for the perfect stay?</h2>
      <p>Travellers with similar searches booked these properties</p> 
    </div>

      <div className="featured">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/232840359.jpg?k=3d639c2ea9eb765b73e83f6d60d2b5daab6f96d6c847127e8b0a3eacaab535da&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Mysore</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/244893543.jpg?k=307877119fd11d82699e0ffd69a1981cddc12934e7547d82e7321925e0b6affe&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Gurugram</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/45995462.jpg?k=86f2973d7b251e34d6b39626d8ec031be45e943efc92f4f5b5a160d54b27562d&o=&hp=1"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Jodhpur</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Featured;
