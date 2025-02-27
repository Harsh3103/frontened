import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const GoalWise = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/getSingleData';
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to extract specific data for the chart
  const getChartData = () => {
    if (!data) return null;

    const chartData = {
      labels: ['TotalQuestions', 'TotalCorrect', 'Totalincorrect', 'Totalskipped'],
      datasets: [
        {
          label: 'Goal Wise Data',
          data: [
            data.reduce((acc, item) => acc + item.TotalQuestions, 0),
            data.reduce((acc, item) => acc + item.TotalCorrect, 0),
            data.reduce((acc, item) => acc + item.Totalincorrect, 0),
            data.reduce((acc, item) => acc + item.Totalskipped, 0),
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return chartData;
  };

  // Custom styles for the chart container


  return (
    <div>
      
              <div className=" items-center shadow-green-300  shadow-md ml-10 mt-20   drop-shadow-sm w-[1020px] h-[600px] border border-gray-300 p-20">
      <h2 className=' ml-[60px] mt-[-40px] text-3xl font-bold text-red-500 mb-4 text-center '>Goal Wise Data</h2>
      
        {data ? <Bar data={getChartData()} /> : <div>Loading...</div>}
      </div>
    </div>
   
  );
};

export default GoalWise;
