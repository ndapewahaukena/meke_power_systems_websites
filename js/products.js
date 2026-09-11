const products=[
['Energy','Solar Inverters','Hybrid and grid-tied inverter solutions for residential, commercial and industrial applications.','Available','⚡'],
['Energy','Industrial Generators','Power generation equipment for backup and continuous industrial applications.','Available on Request','▣'],
['Energy','Power Distribution Equipment','Switchgear, protection equipment, transformers and electrical distribution components.','Available on Request','◈'],
['Energy','EV Charging Stations','AC and DC charging solutions for commercial and fleet applications.','Available on Request','⚡'],
['Mobility','Electric Vehicles','Electric mobility solutions for commercial, fleet and transport applications.','Available on Request','🚙'],
['Mobility','Electric Motors','Electric motor systems and components for mobility and industrial applications.','Available on Request','⚙'],
['Mining','Mining Equipment','Equipment and supplies sourced for mining and industrial operations.','Available on Request','⛏'],
['Mining','Industrial Fasteners','Bolts, nuts, washers and other industrial fastening products.','Available','🔩'],
['Minerals','Mineral Resources','Gold, diamonds, copper, lithium and other mineral sourcing opportunities.','On Enquiry','◆'],
['Oil & Gas','Fuel Supply','Commercial fuel sourcing and supply solutions subject to client requirements.','On Enquiry','▰'],
['IT','Computers & Laptops','Business computing equipment for offices, institutions and industrial environments.','Available on Request','▣'],
['IT','Networking Equipment','Routers, switches, access points and networking infrastructure.','Available on Request','⌁'],
['IT','Software Solutions','Business, productivity and specialist software sourcing.','Available on Request','◫'],
['Medical','Medical Equipment','Medical devices and equipment sourced to client specifications.','Available on Request','✚'],
['Medical','Medical Supplies','Consumables and healthcare supplies for approved requirements.','Available on Request','＋'],
['Pharmaceutical','Pharmaceutical Products','Pharmaceutical products sourced through appropriate suppliers and channels.','On Enquiry','✚'],
['Automotive','Mercedes-Benz Spare Parts','Mercedes-Benz replacement parts sourced according to vehicle and part requirements.','Available on Request','◆'],
['Automotive','Jeep Spare Parts','Jeep replacement parts and components sourced according to vehicle specifications.','Available on Request','◆'],
['Agriculture','Agricultural Equipment','Equipment and supplies supporting farming and agricultural operations.','Available on Request','♧'],
['Transport','Transportation Solutions','Transport-related equipment, sourcing and commercial support solutions.','Available on Request','▰'],
['Industrial','Industrial Components','Specialised components and commercial products sourced to specification.','Available on Request','⚙'],
['Investments','Strategic Investment Opportunities','Selected opportunities across energy, minerals, infrastructure and technology.','On Enquiry','↗']
];
const grid=document.querySelector('#product-grid');const filters=document.querySelector('#filters');function statusClass(s){return s.includes('Available')? (s==='Available'?'available':'request') : 'unavailable'}function render(filter='All',search=''){if(!grid)return;const q=search.toLowerCase();const list=products.filter(p=>(filter==='All'||p[0]===filter)&&p.join(' ').toLowerCase().includes(q));grid.innerHTML=list.length?list.map(p=>`<article class="card product-card"><div class="product-visual">${p[4]}</div><div class="product-body"><div class="product-meta"><span class="tag">${p[0]}</span><span class="availability ${statusClass(p[3])}">● ${p[3]}</span></div><h3>${p[1]}</h3><p>${p[2]}</p><div class="product-actions"><a class="btn btn-navy" href="quote.html?product=${encodeURIComponent(p[1])}">Request a Quote</a><a class="btn btn-outline" href="quote.html?product=${encodeURIComponent(p[1])}">Enquire</a></div></div></article>`).join(''):`<div class="empty" style="grid-column:1/-1">No products matched your search.</div>`}
if(filters){const cats=['All',...new Set(products.map(p=>p[0]))];filters.innerHTML=cats.map(c=>`<button class="filter ${c==='All'?'active':''}" data-filter="${c}">${c}</button>`).join('');filters.addEventListener('click',e=>{if(!e.target.matches('.filter'))return;document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));e.target.classList.add('active');render(e.target.dataset.filter,document.querySelector('#search')?.value||'')})}document.querySelector('#search')?.addEventListener('input',e=>render(document.querySelector('.filter.active')?.dataset.filter||'All',e.target.value));render();
const qp=new URLSearchParams(location.search).get('product');if(qp&&document.querySelector('#product'))document.querySelector('#product').value=qp;
