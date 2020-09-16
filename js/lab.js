var firstName= employees.map(getName)

var getName= function(firstName)
{return firstName.firstName;}
d3.select("body")
    .selectAll("h2")
    .data(firstName)
    .enter()
    .append("h2")
    .style("color", "black")
    .text(getName);
