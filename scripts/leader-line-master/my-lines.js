
<script>
//Draws leader between 'from' and 'to' on 'stage'. Uses existing objects if ids exist, otherwise creates them according to given style parameter.
//lineOptions to stylize.
//Issues. May need to create id via html if container is to keep equations.
function drawLeader({
  
  containerId = 'stage',
  from = { id: 'from', text: '', className: '', style: {} },
  to = { id: 'to', text: '', className: '', style: {} },
  lineOptions = {}
}) {
  // Creates 'from' and 'to' in 'containerId'. Ignores creation if ids already exist and draws a leaderline between them.
  window.addEventListener('load', () => {
    const container = document.getElementById(containerId);
    const elements = { from, to };
    const createdDivs = {};

    for (const key in elements) {
      const { id, text, className, style } = elements[key];
      let el = document.getElementById(id);

      if (!el || !container.contains(el)) {
        el = document.createElement('div');
        el.id = id;
        el.textContent = text;
        el.className = className || 'anchor80-line';
        Object.assign(el.style, {
          position: 'relative',
          ...style
        });
        container.appendChild(el);
      }

      createdDivs[key] = el;
    }

    new LeaderLine(createdDivs.from, createdDivs.to, lineOptions);
  });
}

</script>
