<script>
window.addEventListener('load', function() {
  const flowLineStyle = {
    color: 'black',
    size: 2.75,
    path: 'fluid',
    endPlug: 'arrow',
    dropShadow: true
  };

  document.querySelectorAll('[data-connect]').forEach(function(el) {
    const targets = el.dataset.connect.split(',').map(function(t) { return t.trim(); });

    const labelMap = {};
    if (el.dataset.label) {
      el.dataset.label.split(';').forEach(function(pair) {
        const parts = pair.split(':').map(function(s) { return s.trim(); });
        const key = parts[0], value = parts[1];
        if (key && value) {
          labelMap[key] = value;
        }
      });
    }

    targets.forEach(function(targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        const options = Object.assign({}, flowLineStyle);

        const labelText = labelMap[targetId];
        if (labelText) {
          options.middleLabel = LeaderLine.pathLabel(labelText, {
            fontSize: '18px',
            color: 'black',
            backgroundColor: 'rgba(255,255,255,0.85)',
            padding: 4
          });
        }

        new LeaderLine(el, target, options);
      }
    });
  });
});
</script>
