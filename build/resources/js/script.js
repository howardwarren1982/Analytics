const set_obsever = function (element_by_id, obervered) {
  const bar = document.getElementById(element_by_id);
  bar.id = "none";

  //Create the observer, same as before:
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //chacge id
        bar.id = element_by_id;
      }
      return;
    });
  });

  observer.observe(document.querySelector(obervered));
};

const redbar_array = ["redBar1", "redBar2", "redBar3", "redBar4", "redBar5"];
const bluebar_array = [
  "blueBar1",
  "blueBar2",
  "blueBar3",
  "blueBar4",
  "blueBar5",
];
const polygons_array = ["BluePolygon", "RedPolygon"];
const calendar_dates_array = ["eight", "nine", "ten", "eighteen"];

redbar_array.forEach((element) => {
  set_obsever(element, ".observepoint2");
});

bluebar_array.forEach((element) => {
  set_obsever(element, ".observepoint2");
});

polygons_array.forEach((element) => {
  set_obsever(element, ".observepoint1");
});

calendar_dates_array.forEach((element) => {
  set_obsever(element, ".observepoint3");
});
