import React,{useState} from 'react'

const TopSection = ({data1}) => {


    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <div className="lg:text-lg sm:grid grid-cols-4 pb-3 mb-3 text-sm sm:w-full">
          <div className="mr-3 pb-3">
            <div className="card text-white h-100 ">
              <div
                className="card-body bg-success rounded"
                style={{
                  background: "linear-gradient(to right, #1cbf4b, #0c8f2c)",
                }}
              >
                <div className="rotate">
                  <i className="fa fa-code fa-4x"></i>
                </div>
                <h6 className="text-uppercase">Classes Attended</h6>
                <h1
                  className="display-4 cursor-pointer"
                  onMouseOver={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  {data1.length > 0
                    ? isHovered
                      ? `${data1[0].ClassesAttend}/${data1[0].TotalAttend}`
                      : data1[0].ClassesAttend
                    : 0}
                </h1>
              </div>
            </div>
          </div>
          <div className="mr-3 pb-3">
            <div className="card text-white h-100">
              <div
                className="card-body bg-info rounded"
                style={{
                  background: "linear-gradient( to right, #FFA500, #FF6347)",
                }}
              >
                <div className="rotate">
                  <i className="fa fa-cubes fa-4x" aria-hidden="true"></i>
                </div>
                <h6 className="text-uppercase">Rank</h6>
                <h1 className="display-4">
                  {data1.length > 0 ? data1[0].Rank : 0}
                </h1>
              </div>
            </div>
          </div>
          <div className="mr-3 pb-3">
            <div className="card text-white h-100">
              <div
                className="card-body bg-info rounded"
                style={{
                  background: "linear-gradient( to right, #FFA500, #FF6347)",
                }}
              >
                <div className="rotate">
                  <i className="fa fa-cubes fa-4x" aria-hidden="true"></i>
                </div>
                <h6 className="text-uppercase">Test Attempted</h6>
                <h1 className="display-4">{data1.length > 0 ? `x` : 0}</h1>
              </div>
            </div>
          </div>
          <div className="mr-3 pb-3">
            <div className="card text-white h-100">
              <div
                className="card-body bg-info rounded"
                style={{
                  background: "linear-gradient(to right, #007bff, #090979)",
                }}
              >
                <div className="rotate">
                  <i className="fa fa-info fa-4x" aria-hidden="true"></i>
                </div>
                <h6 className="text-uppercase">Batch Name</h6>
                <h2 className="display-4">
                  {data1.length > 0 ? data1[0].studentId.batch : 0}
                </h2>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TopSection