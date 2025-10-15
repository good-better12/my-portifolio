 <script>
    // small utilities
    const yearSpan = document.getElementById('year'); if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // theme toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', ()=>{
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    });

    // reveal on scroll
    function onScroll(){
      document.querySelectorAll('.fade-up').forEach(el=>{
        const r = el.getBoundingClientRect();
        if(r.top < window.innerHeight - 40) el.classList.add('in-view');
      });
    }
    window.addEventListener('scroll', onScroll); window.addEventListener('load', onScroll);

    // Project modal data (replace with real content)
    const projects = {
      1: {title:'Effect of Biochar on Rice Yield', body:'<p><strong>Overview:</strong> Field trials assessing biochar application rates and rice yield across two seasons. Key metrics: yield, C sequestration, soil pH, and cost-benefit analysis.</p><p><strong>Tools:</strong> R, Python, QGIS, Field sensors</p>'},
      2: {title:'Vegetation Monitoring Dashboard', body:'<p>Interactive dashboard combining drone NDVI, Sentinel time series and simple yield models. Built with a lightweight web stack and serverless data APIs.</p>'},
      3: {title:'Intercropping for Soil Health in SSA', body:'<p>Systematic review and on-farm validation of intercropping strategies focusing on soil organic matter and yield stability.</p>'},
      4: {title:'Nano-formulated Herbicides Review', body:'<p>Meta-analysis on efficacy and environmental impacts of nano-formulated herbicide products with recommendations for farmers and regulators.</p>'}
    };

    function openProject(id){
      const modal = document.getElementById('modal');
      const content = document.getElementById('modalContent');
      const p = projects[id];
      content.innerHTML = `<h2 style="margin-top:0">${p.title}</h2>` + p.body + `<div style="margin-top:12px"><button class='btn primary' onclick="alert('Open case study or project page')">View case study</button></div>`;
      modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    }
    function closeModal(){document.getElementById('modal').classList.remove('open');document.getElementById('modal').setAttribute('aria-hidden','true')}

    // filter projects
    function filterProjects(type){
      const all = document.querySelectorAll('#projectsGrid .project');
      all.forEach(p=>{if(type==='all' || p.dataset.type===type) p.style.display='flex'; else p.style.display='none'});
    }

    // simple contact handler (non-production)
    function sendMessage(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value || 'Contact from portfolio';
      const message = document.getElementById('message').value;
      // This is a stub. Replace with real API or use mailto for simple testing.
      alert(`Thanks ${name}! Your message was received. (Demo only)`);
      e.target.reset();
    }

    function downloadCV(){
      // Example: create a small text-based CV download. Replace with a PDF file in production.
      const cvText = `Nathaniel Kwawu\nAgricultural Researcher & Digital Innovator\nEmail: youremail@example.com\n\nSummary:\n- Field researcher, remote sensing, data analysis.`;
      const blob = new Blob([cvText], {type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'Nathaniel_Kwawu_CV.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    }

    // accessibility: close modal with Esc
    window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

  </script>