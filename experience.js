const experienceEntries = {
  current: {
    title: 'Automation Engineer', company: 'PT. Automation Jaya Electric', period: 'JUL 2026 — PRESENT · EAST JAKARTA, INDONESIA',
    items: ['Design, develop, and integrate industrial automation systems using PLCs, HMIs, sensors, actuators, robots, and control systems.', 'Develop PLC, HMI, and robot programs while integrating industrial devices using Modbus, OPC UA, Profinet, Ethernet/IP, and MQTT.', 'Perform system installation, commissioning, testing, troubleshooting, and optimization to ensure automation systems operate according to specifications.', 'Perform preventive and corrective maintenance, root cause analysis, system improvements, and technical documentation and reporting.']
  },
  iot: {
    title: 'IoT Engineer', company: 'PT. Benderang Hidup Indonesia', period: '2024 — 2025',
    items: ['Designed IoT system architecture integrated with SCADA/ICS.', 'Connected sensors, PLCs, RTUs, and gateways to SCADA platforms.', 'Implemented Modbus, OPC UA, and MQTT industrial communications.', 'Stored and transmitted data for real-time monitoring and troubleshot connectivity.']
  },
  rnd: {
    title: 'Research & Development', company: 'PT. Sari Teknologi', period: '2020 — 2024',
    items: ['Developed and optimized machine and automation programs based on client requirements.', 'Executed testing, troubleshooting, and technical documentation.', 'Delivered operator training for system operation, troubleshooting, and maintenance.', 'Delivered robotics training for elementary, junior high, and high school students.']
  }
};
const experienceDetail = document.getElementById('experienceDetail');
const experienceOptions = [...document.querySelectorAll('.experience-option')];
function showExperience(key) {
  const entry = experienceEntries[key];
  experienceOptions.forEach(option => { const active = option.dataset.experience === key; option.classList.toggle('active', active); option.setAttribute('aria-selected', active); });
  experienceDetail.style.animation = 'none';
  void experienceDetail.offsetWidth;
  experienceDetail.style.animation = '';
  experienceDetail.innerHTML = `<p class="mono">${entry.period}</p><h3>${entry.title}</h3><p class="company">${entry.company}</p>${entry.placeholder ? `<p class="detail-placeholder">${entry.placeholder}</p>` : `<ul>${entry.items.map(item => `<li>${item}</li>`).join('')}</ul>`}`;
}
experienceOptions.forEach(option => {
  option.addEventListener('mouseenter', () => showExperience(option.dataset.experience));
  option.addEventListener('focus', () => showExperience(option.dataset.experience));
  option.addEventListener('click', () => showExperience(option.dataset.experience));
});
showExperience('current');
