import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      "alpha_two_code": "US",
      "web_pages": [
        "http://www.marywood.edu"
      ],
      "state-province": null,
      "name": "Marywood University",
      "domains": [
        "marywood.edu"
      ],
      "country": "United States"
    },
    {
      "alpha_two_code": "US",
      "web_pages": [
        "http://www.lindenwood.edu/"
      ],
      "state-province": null,
      "name": "Lindenwood University",
      "domains": [
        "lindenwood.edu"
      ],
      "country": "United States"
    },
  ])

  useEffect(() => {
    axios.get('http://universities.hipolabs.com/search?country=United+States')
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {

      })
  }, [])

  return (
    <div className="App">
      <table border={"2"}>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Domain</th>
          <th>country</th>
        </tr>
        {
          data.map((el, index) => {
            return <tr>
              <td>{index + 1}</td>
              <td>{el.name}</td>
              <td><a rel="noopener noreferrer" target='_blank' href={'http://' + el.domains}>{el.domains}</a></td>
              <td>{el.country}</td>
            </tr>
          })
        }
      </table>
    </div>
  );
}

export default App;
