const d=document,g=id=>d.getElementById(id);
const searchInput=g('searchInput'),outputContainer=g('outputContainer'),suggestions=g('suggestions');
let commandHistory=[],historyIndex=-1;

const db={
  about:{title:"About Me",content:"I'm a passionate developer who loves creating digital experiences. With expertise in web development, I enjoy building applications that solve real-world problems.",tags:["personal","bio","developer","experience"]},
  projects:{title:"My Projects",content:"Here are some of my notable projects:\n\n• Terminal Portfolio - A retro-style portfolio website\n• E-commerce Platform - Full-stack shopping solution\n• Weather App - Real-time weather tracking\n• Chat Application - Real-time messaging system",tags:["portfolio","work","development","coding"]},
  skills:{title:"Technical Skills",content:"Programming Languages: JavaScript, Python, Java, C++\nFrontend: React, Vue.js, HTML5, CSS3, SASS\nBackend: Node.js, Express, Django, Flask\nDatabases: MongoDB, PostgreSQL, MySQL\nTools: Git, Docker, AWS, Linux",tags:["technical","programming","languages","tools"]},
  contact:{title:"Get In Touch",content:"Email: developer@example.com\nLinkedIn: /in/developer\nGitHub: /developer\nTwitter: @developer\n\nFeel free to reach out for collaborations or opportunities!",tags:["email","social","networking","communication"]},
  help:{title:"Available Commands",content:"Available commands:\n• about - Learn about me\n• projects - View my work\n• skills - See my technical skills\n• contact - Get my contact info\n• clear - Clear terminal\n• ls - List all sections\n• whoami - Display current user\n• date - Show current date\n• tree - Show site structure",tags:["commands","navigation","help","guide"]}
};

function createMatrix(){
  const c=d.createElement('canvas'),ctx=c.getContext('2d');
  c.width=innerWidth;c.height=innerHeight;
  Object.assign(c.style,{position:'fixed',top:'0',left:'0',zIndex:'-1',opacity:'0.05'});
  
  const matrix="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(""),
        fontSize=10,columns=c.width/fontSize,drops=Array(columns).fill(1);
  
  function draw(){
    ctx.fillStyle='rgba(0,0,0,0.04)';ctx.fillRect(0,0,c.width,c.height);
    ctx.fillStyle='#00ff41';ctx.font=fontSize+'px monospace';
    drops.forEach((drop,i)=>{
      ctx.fillText(matrix[Math.floor(Math.random()*matrix.length)],i*fontSize,drop*fontSize);
      if(drop*fontSize>c.height&&Math.random()>0.975)drops[i]=0;
      drops[i]++;
    });
  }
  setInterval(draw,35);
  g('matrixBg').appendChild(c);
}

function showSuggestions(q){
  if(!q.trim()){suggestions.style.display='none';return;}
  const matches=[];
  Object.keys(db).forEach(k=>{
    const c=db[k];
    if(k.toLowerCase().includes(q.toLowerCase())||c.title.toLowerCase().includes(q.toLowerCase())||c.tags.some(t=>t.toLowerCase().includes(q.toLowerCase()))){
      matches.push({type:'command',value:k,description:c.title});
    }
  });
  ['clear','ls','whoami','date','tree','help'].forEach(cmd=>{
    if(cmd.toLowerCase().includes(q.toLowerCase())){
      matches.push({type:'system',value:cmd,description:`System command: ${cmd}`});
    }
  });
  if(matches.length>0){
    suggestions.innerHTML=matches.map(m=>`<div class="suggestion-item" onclick="selectSuggestion('${m.value}')"><span class="highlight">${m.value}</span> - ${m.description}</div>`).join('');
    suggestions.style.display='block';
  }else{suggestions.style.display='none';}
}

function selectSuggestion(cmd){searchInput.value=cmd;suggestions.style.display='none';executeCommand(cmd);}

function executeCommand(cmd){
  const c=cmd.toLowerCase().trim();
  addToHistory(cmd);addOutput(`$ ${cmd}`);
  switch(c){
    case 'clear':outputContainer.innerHTML='';break;
    case 'ls':addOutput('Available sections:','success-text');Object.keys(db).forEach(k=>addOutput(`  ${k}/`,'nav-link'));break;
    case 'whoami':addOutput('developer@portfolio:~$ Current user: Web Developer','success-text');break;
    case 'date':addOutput(`Current date: ${new Date().toLocaleString()}`,'success-text');break;
    case 'tree':addOutput('Site structure:','success-text');addOutput('portfolio/\n├── about/\n├── projects/\n├── skills/\n└── contact/','file-tree');break;
    default:
      if(db[c]){
        const content=db[c];
        addOutput(`Loading ${content.title}...`,'warning-text');
        setTimeout(()=>addContentSection(content.title,content.content),500);
      }else{addOutput(`Command not found: ${cmd}. Type 'help' for available commands.`,'error-text');}
  }
  searchInput.value='';suggestions.style.display='none';
}

function addOutput(text,className=''){
  const o=d.createElement('div');
  o.className=`output-line ${className}`;
  o.innerHTML=text.replace(/\n/g,'<br>');
  outputContainer.appendChild(o);
  outputContainer.scrollTop=outputContainer.scrollHeight;
}

function addContentSection(title,content){
  const s=d.createElement('div');
  s.className='output-line';
  s.innerHTML=`<div class="section"><h2>${title}</h2><p>${content.replace(/\n/g,'<br>')}</p></div>`;
  outputContainer.appendChild(s);
  outputContainer.scrollTop=outputContainer.scrollHeight;
}

function addToHistory(cmd){commandHistory.unshift(cmd);historyIndex=-1;}

searchInput.addEventListener('input',e=>showSuggestions(e.target.value));
searchInput.addEventListener('keydown',e=>{
  if(e.key==='Enter'){e.preventDefault();executeCommand(searchInput.value);}
  else if(e.key==='ArrowUp'){e.preventDefault();if(historyIndex<commandHistory.length-1){historyIndex++;searchInput.value=commandHistory[historyIndex];}}
  else if(e.key==='ArrowDown'){e.preventDefault();if(historyIndex>0){historyIndex--;searchInput.value=commandHistory[historyIndex];}else if(historyIndex===0){historyIndex=-1;searchInput.value='';}}
  else if(e.key==='Escape'){suggestions.style.display='none';}
});

d.addEventListener('click',e=>{if(!e.target.closest('.search-container')){suggestions.style.display='none';}});
d.addEventListener('click',e=>{if(e.target.classList.contains('nav-link')){e.preventDefault();executeCommand(e.target.dataset.cmd);}});
addEventListener('resize',()=>{g('matrixBg').innerHTML='';createMatrix();});

searchInput.focus();
createMatrix();
