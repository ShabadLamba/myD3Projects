// select the svg conatiner first
const svg = d3.select('svg');

d3.json('planets.json').then(data => {

    // join the data to circs
    const circs = svg.selectAll('circle')
        .data(data);

    // add attrs to circs already in the DOM
    circs.attr('cy', 300)
        .attr('cx', d => d.distance / 3.5)
        .attr('r', d => (1 / d.velocity) * 100)
        .attr('fill', d => d.fill)
        .attr('opacity', '1');

    // append the enter selection to the DOM
    circs.enter()
        .append('circle')
        .attr('cy', 300)
        .attr('cx', d => d.distance / 3.5)
        .attr('r', d => (1 / d.velocity) * 100)
        .attr('transform', 'translate(50,0)')
        .attr('fill', d => d.fill)
        .attr('opacity', '1');

});



particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});