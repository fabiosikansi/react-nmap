import Nmap from './../src/react-nmap';

//Static data
/*
const data = [
    {id: 1,x: 10, y: 10,weight: 1,class: 1},
    {id: 2,x: 20, y: 20,weight: 1,class: 2},
    {id: 3,x: 30, y: 30,weight: 1,class: 3},
    {id: 4,x: 40, y: 40,weight: 1,class: 4},
    {id: 5,x: 50, y: 50,weight: 1,class: 5}
];
ReactDOM.render(<Nmap data={data} width="1000" height="600" svgId="nmap" method="ac" />,document.getElementById('app'));
*/

//Data from CSV
d3.csv("data/configuration01.csv", function(error, data) {
    ReactDOM.render(<Nmap data={data} width="1000" height="600" svgId="nmap" method="ac" />,document.getElementById('app'));
});