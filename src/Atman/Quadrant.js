import React, {Component} from 'react';
import {Doughnut}  from 'react-chartjs-2';

class Quadrant extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        labels:['Red', 'Green', 'Yellow', 'Blue'],
        datasets:[
          {
            data:[
              100,
              140,
              10,
              110
            ],
            backgroundColor:[
              "#F7464A",
              "#46BFBD",
               "#FDB45C",
               '#0000FF',
            ]
          }
        ]
      }
    }
  }

  render(){
    return  (
      <div className = "quadrant">
        <Doughnut
        data = {this.state.chartData}
        height = {400}
        options = {{
          segmentShowStroke : true,
		      segmentStrokeColor : "#fff",
		      segmentStrokeWidth : 1,
		      percentageInnerCutout : 50,
		      animationSteps : 1000,
		      animationEasing : "easeInOutElastic",
		      animateRotate : true,
		      animateScale : true,
		      responsive: true,
		      maintainAspectRatio: false,
		      showScale: true,
          legend: {
           display: false
          },
      //     title: {
      //      display: true,
      //      text: 'Custom Chart Title',
      //  },
       layout: {
           padding: {
               left: 0,
               right: 0,
               top: 20,
               bottom: 0
           }
       },
       animation: {
    duration: 500,
    easing: "easeOutQuart",
    onComplete: function () {
      var ctx = this.chart.ctx;
    //  ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      this.data.datasets.forEach(function (dataset) {

        for (var i = 0; i < dataset.data.length; i++) {
          var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
              total = dataset._meta[Object.keys(dataset._meta)[0]].total,
              mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
              start_angle = model.startAngle,
              end_angle = model.endAngle,
              mid_angle = start_angle + (end_angle - start_angle)/2;

            console.log(dataset.data[i]);
          var x = mid_radius * Math.cos(mid_angle);
          var y = mid_radius * Math.sin(mid_angle);

          ctx.fillStyle = '#fff';
          if (i === 3){ // Darker text color for lighter background
            ctx.fillStyle = '#444';
          }
          var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
          ctx.fillText("dataset.data[i]", model.x + x, model.y + y);
          // Display percent in another line, line break doesn't work for fillText
          ctx.fillText(percent, model.x + x, model.y + y + 15);
        }
      });
    }
  }

        }}
        />
      </div>
    )
  }
}

export default Quadrant;
