var getLastName= function(name)
{
    return name.lastName;
};
d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(getLastName);
