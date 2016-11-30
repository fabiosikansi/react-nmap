# react-nmap

Basic [nmap.js] react component

### Installation

Run
`
npm install
`
and
`
npm run build-example
`

### Usage:
```javascript
import Nmap from './react-nmap';

const data = [
    {id: 1,x: 10, y: 10,weight: 1,class: 1},
    {id: 2,x: 20, y: 20,weight: 1,class: 2},
    {id: 3,x: 30, y: 30,weight: 1,class: 3},
    {id: 4,x: 40, y: 40,weight: 1,class: 4},
    {id: 5,x: 50, y: 50,weight: 1,class: 5}
];
ReactDOM.render(<Nmap data={data} width="1000" height="600" svgId="nmap" method="ac" />,document.getElementById('app'));

});
```

### References

 * [nmap.js](https://github.com/sebastian-meier/nmap.js): Sebastian Meyer implementation
 * [d3.js](https://d3js.org/)
 * [react](https://facebook.github.io/react/)

### Original Publication
Duarte, F.S.L.G.; Sikansi, F.; Fatore, F.M.; Fadel, S.G.; Paulovich, F.V., "Nmap: A Novel Neighborhood Preservation Space-filling Algorithm," Visualization and Computer Graphics, IEEE Transactions on , vol.20, no.12, pp.2063,2071, Dec. 31 2014; doi: 10.1109/TVCG.2014.2346276;URL: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6876012&isnumber=6935054

[nmap.js]:https://github.com/sebastian-meier/nmap.js