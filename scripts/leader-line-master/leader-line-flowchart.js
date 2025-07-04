
<script>
window.addEventListener('load', () => {
  // Define your reusable line style
  const flowLineStyle = {
    color: '#e74c3c',
    size: 4,
    path: 'straight',
    endPlug: 'arrow',
    // dash: { len: 6, gap: 4 },
    // startPlug: 'disc',
    dropShadow: true
  };

  // Loop through all elements with `data-connect`
  document.querySelectorAll('[data-connect]').forEach(el => {
    const targets = el.dataset.connect.split(',');
    targets.forEach(targetId => {
      const target = document.getElementById(targetId.trim());
      if (target) {
        new LeaderLine(el, target, flowLineStyle);
      }
    });
  });
});
</script>
