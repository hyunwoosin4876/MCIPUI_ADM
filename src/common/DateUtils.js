import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';

function DateUtils() {
  // 현재 시간
  const nowDate = () => {};

  // 두 시간의 간격
  const DeffTime = (deffDate1, deffDate2) => {};

  /*
   * 년도 증감
   * 사용 법 : addYear('2023-01-01',  2);
   * return : '2025-01-01'
   */
  const addYear = (nowDate, year) => {};

  /*
   * 년도 증감
   * 사용 법 : addMonth('2023-01-01',  2);
   * return : 2023-03-01
   */
  const addMonth = (nowDate, month) => {};

  /*
   * 년도 증감
   * 사용 법 : addDay('2023-01-01',  2);
   * return : 2023-01-03
   */ 
  const addDay = (nowDate, day) => {};

  return (<div>DateUtils</div>);
}

export default DateUtils;
