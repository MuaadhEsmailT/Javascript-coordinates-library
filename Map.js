/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root
var root = am5.Root.new("Map_chartdiv");

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart_Map = root.container.children.push(
  am5map.MapChart.new(root, {
    panX: "rotateX",
    projection: am5map.geoNaturalEarth1()
  })
);

root._logo.dispose();



// Create polygon series
var polygonSeries = chart_Map.series.push(
  am5map.MapPolygonSeries.new(root, {
    geoJSON: Penang
  })
);

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}"
});

polygonSeries.mapPolygons.template.states.create("hover", {
  fill: am5.color(0x297373)
});




let pointSeries = chart_Map.series.push(
  am5map.MapPointSeries.new(root, {
    geoJSON: Points
  })
);
pointSeries.bullets.push(function() {
  let circle = am5.Circle.new(root, {
    radius: 5,
    fill: am5.color(0xff0000),
    tooltipText: "{name}"
  });

  circle.events.on("click", function(ev) {
    console.log(ev.target.dataItem);
  });

  return am5.Bullet.new(root, {
    sprite: circle
  });
});


