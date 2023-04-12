import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from 'react-router-dom';

const SingleRoom = () => {

  const {state}= useLocation();
  console.log(state);
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Hotel Information</h1>
            <div className="item">
              <img
                // src={state?.data?.photos[0]}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{state?.data?.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">title:</span>
                  <span className="itemValue">{state?.data?.maxPeople}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">CheapestPrice:</span>
                  <span className="itemValue">{state?.data?.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {/* {state?.data?.address} */}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  {/* <span className="itemValue">{state?.data?.city}</span> */}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Desc:</span>
                  <span className="itemValue">{state?.data?.desc}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default SingleRoom;
