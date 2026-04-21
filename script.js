  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      document.getElementById('panel-' + btn.dataset.panel).classList.add('active');
    });
  });

  // ─── Data connector ────────────────────────────────────────────────────────
  // Replace this function with your real data loading logic.
  // Call updateMetrics(data) and updateCharts(data) once your data is ready.

  async function loadData() {
    // Example: const res = await fetch('/api/fitness-summary');
    //          const data = await res.json();
    //          updateMetrics(data);
    //          updateCharts(data);
    console.log('loadData() → wire up your data source here');
  }

  function updateMetrics(data) {
    // Activity overview
    setText('m-steps',      data.avgSteps);
    setText('m-calories',   data.avgCalories);
    setText('m-active',     data.avgVeryActiveMins);
    setText('m-sedentary',  data.avgSedentaryMins);
    // Sleep
    setText('m-sleep-dur',  data.avgSleepHours);
    setText('m-sleep-eff',  data.avgSleepEfficiency);
    setText('m-restless',   data.avgRestlessMins);
    setText('m-awake',      data.avgAwakeMins);
    // Temporal
    setText('m-best-day',   data.mostActiveDay);
    setText('m-worst-day',  data.leastActiveDay);
    setText('m-peak-hour',  data.peakHour);
    setText('m-consistency',data.consistencyScore);
    // Segments
    setText('m-seg-high',   data.segHighCount);
    setText('m-seg-mod',    data.segModCount);
    setText('m-seg-sed',    data.segSedCount);
    setText('m-seg-other',  data.segOtherCount);
  }

  function updateCharts(data) {
    // Mount your Chart.js / D3 charts here using the placeholder IDs:
    // Activity  : chart-steps-hist, chart-intensity, chart-calories-trend
    // Sleep     : chart-sleep-hist, chart-sleep-scatter
    // Temporal  : chart-dow, chart-heatmap
    // Segments  : chart-seg-pie, chart-seg-bar, chart-kmeans
    console.log('updateCharts() → add your chart rendering here', data);
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) {
      const child = el.querySelector('span');
      if (child) { el.childNodes[0].textContent = val; }
      else { el.textContent = val; }
    }
  }

  loadData();