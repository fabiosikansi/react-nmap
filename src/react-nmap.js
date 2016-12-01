export default class Nmap extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var data = this.props.data;
        var cs = this.props.colorScale;
        var elements = [];
        for(var i = 0; i<data.length; i++){
            elements.push(new nmap_element({
                id:data[i].id,
                x:data[i].x,
                y:data[i].y,
                weight:(("weight" in data[i]) ? data[i].weight : 1),
                klass:(("class" in data[i]) ? data[i].class : 1)
            }));
        }
        var map = new nmap({x:0, y:0, width:parseInt(this.props.width), height:parseInt(this.props.height)});
        var nmapData = null;
        if (this.props.method == "ew") {
            nmapData = map.equalWeight({elements:elements});
        } else {
            nmapData = map.alternateCut({elements:elements});
        }

        const svg = d3.select("#" + this.props.svgId);
        svg.select("g.nmap").remove();
        svg.append("g").attr("class", "nmap").selectAll("rect")
            .data(nmapData).enter().append("rect")
            .attr("x", function(d){ return d.attr().x })
            .attr("y", function(d){ return d.attr().y })
            .attr("fill", function (d) { return cs(parseFloat(d.attr().element.attr().klass))})
            .attr("width", function(d){ return d.attr().width })
            .attr("height", function(d){ return d.attr().height });
    }

    render() {
        return (
            <svg id={this.props.svgId} width={this.props.width} height={this.props.height}></svg>
    );
    }
}
