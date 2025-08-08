import React, { useEffect, useState } from "react";

type DataType = {
  days: number[];
  total: number;
  week: number;
};

const GithubCommitGraph: React.FC = () => {
  const [data, setData] = useState<DataType[] | null>(null);
  const [colorInterval, setColorInterval] = useState<number>(1);

  const setColor = (value: number) => {
    // for 0 it should always be grey and its own color
    if (value === 0) {
      return 'box-grey';
    }
    const bucket = Math.floor(value / colorInterval);
    return `green-${bucket}`;  
  }

  const calcInterval = (data: DataType[]) => {
    let highestMax = -1;
    for (const weeks of data) {
      const days = weeks?.days;
      if (days) {
         const maxOfDays = Math.max(...days);
         if (maxOfDays > highestMax){
          highestMax = maxOfDays;
         }
      }
    }
    console.log('highest Max: ', highestMax);
    const interval = Math.floor(highestMax / 4); // round to whole number
    setColorInterval(interval);
    console.log('interval: ', interval);
  }

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://api.github.com/repos/facebook/react/stats/commit_activity'); 
      if (!response.ok) {
        return new Error ("it errored out")
      } else if (response.json) {
        const result = await response.json();
        setData(result);
        calcInterval(result);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='git-commit-year-container'>
      {data && data.map((week:DataType, i:number) => (
        <div className="git-commit-week-box" key={i}>
          {week.days.map((day: number, j: number) => (
            <div
              key={j}
              className={`git-commit-day-box ${setColor(day)}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GithubCommitGraph;