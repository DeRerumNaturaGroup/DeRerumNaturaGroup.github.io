<script>
window.addEventListener('load', () => {
  const flowLineStyle = {
    color: 'black',
    size: 2.75,
    path: 'fluid',
    endPlug: 'arrow',
    dropShadow: true
  };

  document.querySelectorAll('[data-connect]').forEach(el => {
    const targets = el.dataset.connect.split(',').map(t => t.trim());

    // Parse per-connection labels (format: "step2A: Label Text; step3A: Other Label")
    const labelMap = {};
    if (el.dataset.label) {
      el.dataset.label.split(';').forEach(pair => {
        const [key, value] = pair.split(':').map(s => s.trim());
        if (key && value) {
          labelMap[key] = value;
        }
      });
    }

    targets.forEach(targetId => {
      const target = document.getElementById(targetId);
      if (target) {
        const options = { ...flowLineStyle };

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



