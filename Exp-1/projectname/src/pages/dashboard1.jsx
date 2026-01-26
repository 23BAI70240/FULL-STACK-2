import {logs} from "../data/logs";

const dashboard1 = () => {
    const totalCarbon = logs.reduce((sum,log) =>sum+log.carbon,0)


  return(
      <div>
          <h2>Dashboard</h2>
          <p>These are the given carbon emmission</p>
          <ul>
              {
                  logs.map((highCarbonLogs) => (
                      <li key = {highCarbonLogs.id}>
                          {highCarbonLogs.activity} : {highCarbonLogs.carbon} kgs
                      </li>
                  ))
              }
          </ul>
      </div>
  )
}

export default dashboard1;