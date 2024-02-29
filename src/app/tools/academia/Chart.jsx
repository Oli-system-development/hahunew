// // Chart.jsx
// import React, { useEffect } from "react";
// import ApexCharts from "apexcharts";

// const Chart = () => {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       let options = {
//         chart: {
//           height: "100%",
//           maxWidth: "100%",
//           type: "area",
//           fontFamily: "Inter, sans-serif",
//           dropShadow: {
//             enabled: false,
//           },
//           toolbar: {
//             show: false,
//           },
//         },
//         tooltip: {
//           enabled: true,
//           x: {
//             show: false,
//           },
//         },
//         fill: {
//           type: "gradient",
//           gradient: {
//             opacityFrom: 0.55,
//             opacityTo: 0,
//             shade: "#1C64F2",
//             gradientToColors: ["#1C64F2"],
//           },
//         },
//         series: [
//           {
//             name: "New users",
//             data: [6500, 6418, 6456, 6526, 6356, 6456],
//             color: "#1A56DB",
//           },
//         ],
//         xaxis: {
//           categories: [
//             "01 February",
//             "02 February",
//             "03 February",
//             "04 February",
//             "05 February",
//             "06 February",
//             "07 February",
//           ],
//           labels: {
//             show: false,
//           },
//           axisBorder: {
//             show: false,
//           },
//           axisTicks: {
//             show: false,
//           },
//         },
//         yaxis: {
//           show: false,
//         },
//       };

//       if (document.getElementById("area-chart")) {
//         const chart = new ApexCharts(
//           document.getElementById("area-chart"),
//           options
//         );
//         chart.render();
//       }
//     }
//   }, []);

//   return (
//     <div className='rounded-lg h-48'>
//       <div id='area-chart'></div>
//     </div>
//   );
// };

// export default Chart;
