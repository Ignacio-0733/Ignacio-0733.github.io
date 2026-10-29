const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });
}

const translations = 
{
  "t0": {
    "en": "About",
    "es": "Sobre mí"
  },
  "t1": {
    "en": "Technologies",
    "es": "Tecnologías"
  },
  "t2": {
    "en": "Projects",
    "es": "Proyectos"
  },
  "t3": {
    "en": "Experience",
    "es": "Experiencia"
  },
  "t4": {
    "en": "Contact ↗",
    "es": "Contacto ↗"
  },
  "t5": {
    "en": "<span class=\"status-dot\"></span> AVAILABLE TO LEARN & COLLABORATE",
    "es": "<span class=\"status-dot\"></span> DISPONIBLE PARA APRENDER Y COLABORAR"
  },
  "t6": {
    "en": "Building systems.<br><span>Connecting technology</span><br>and motorsport.",
    "es": "Construyendo sistemas.<br><span>Conectando tecnología</span><br>y motorsport."
  },
  "t7": {
    "en": "I’m Ignacio, an ASIR Dual student interested in systems administration, networking and automation. My goal is to apply these skills in demanding technology environments, especially in motorsport.",
    "es": "Soy Ignacio, estudiante de ASIR Dual interesado en la administración de sistemas, las redes y la automatización. Mi objetivo es aplicar estas habilidades en entornos tecnológicos exigentes, especialmente en motorsport."
  },
  "t8": {
    "en": "Explore projects <span>↘</span>",
    "es": "Explorar proyectos <span>↘</span>"
  },
  "t9": {
    "en": "<b>01</b> Systems & networks",
    "es": "<b>01</b> Sistemas y redes"
  },
  "t10": {
    "en": "<b>02</b> Automation",
    "es": "<b>02</b> Automatización"
  },
  "t11": {
    "en": "<b>03</b> Motorsport IT",
    "es": "<b>03</b> Motorsport IT"
  },
  "t12": {
    "en": "NETWORK / TELEMETRY",
    "es": "NETWORK / TELEMETRY"
  },
  "t13": {
    "en": "NETWORK",
    "es": "NETWORK"
  },
  "t14": {
    "en": "AUTOMATION",
    "es": "AUTOMATION"
  },
  "t15": {
    "en": "TELEMETRY",
    "es": "TELEMETRY"
  },
  "t16": {
    "en": "SYS.STATUS <b>LEARNING_MODE</b>",
    "es": "SYS.STATUS <b>LEARNING_MODE</b>"
  },
  "t17": {
    "en": "<span></span> SCROLL TO EXPLORE",
    "es": "<span></span> DESPLAZA PARA EXPLORAR"
  },
  "t18": {
    "en": "CURRENT FOCUS",
    "es": "ENFOQUE ACTUAL"
  },
  "t19": {
    "en": "IT Infrastructure <i>✳</i> Networking <i>✳</i> Automation <i>✳</i> Cloud & Data <i>✳</i> Motorsport",
    "es": "IT Infrastructure <i>✳</i> Networking <i>✳</i> Automation <i>✳</i> Cloud & Data <i>✳</i> Motorsport"
  },
  "t20": {
    "en": "01 / PROFILE",
    "es": "01 / PERFIL"
  },
  "t21": {
    "en": "Technology with purpose.",
    "es": "Tecnología con propósito."
  },
  "t22": {
    "en": "A solid technical foundation, constant curiosity and a clear goal: grow in systems and networking.",
    "es": "Una base técnica sólida, curiosidad constante y un objetivo claro: crecer en sistemas y redes."
  },
  "t23": {
    "en": "ABOUT ME",
    "es": "SOBRE MÍ"
  },
  "t24": {
    "en": "From technical support to connected systems.",
    "es": "Del soporte técnico a los sistemas conectados."
  },
  "t25": {
    "en": "My studies in IT Systems Administration and my practical experience have allowed me to work with IT support, equipment maintenance, networking, digital tools and web development.",
    "es": "Mi formación en Administración de Sistemas Informáticos en Red y mi experiencia práctica me han permitido trabajar con soporte informático, mantenimiento de equipos, redes, herramientas digitales y desarrollo web."
  },
  "t26": {
    "en": "I’m currently expanding my knowledge in automation and programming. In the long term, I want to build my career in motorsport IT, where system reliability and teamwork are essential.",
    "es": "Actualmente sigo ampliando mis conocimientos en automatización y programación. A largo plazo, quiero orientar mi carrera hacia IT en motorsport, donde la fiabilidad de los sistemas y el trabajo en equipo son fundamentales."
  },
  "t27": {
    "en": "ASIR Dual",
    "es": "ASIR Dual"
  },
  "t28": {
    "en": "Continuous learning",
    "es": "Aprendizaje continuo"
  },
  "t29": {
    "en": "Motorsport IT",
    "es": "Motorsport IT"
  },
  "t30": {
    "en": "Systems & networking",
    "es": "Sistemas y redes"
  },
  "t31": {
    "en": "Windows Server, Linux, TCP/IP, DNS, DHCP, VLAN and incident troubleshooting.",
    "es": "Windows Server, Linux, TCP/IP, DNS, DHCP, VLAN y resolución de incidencias."
  },
  "t32": {
    "en": "Automation",
    "es": "Automatización"
  },
  "t33": {
    "en": "Workflows with Make, Airtable and digital tools.",
    "es": "Flujos de trabajo con Make, Airtable y herramientas digitales."
  },
  "t34": {
    "en": "Data & development",
    "es": "Datos y desarrollo"
  },
  "t35": {
    "en": "Python, SQL and web development; learning to integrate data and services.",
    "es": "Python, SQL y desarrollo web; aprendiendo a integrar datos y servicios."
  },
  "t36": {
    "en": "02 / TECHNOLOGIES",
    "es": "02 / TECNOLOGÍAS"
  },
  "t37": {
    "en": "My toolkit.",
    "es": "Mi caja de herramientas."
  },
  "t38": {
    "en": "Technologies and concepts I have worked with during my studies and practical experience. Proficiency varies by tool.",
    "es": "Tecnologías y conceptos con los que he trabajado durante mi formación y experiencia. El nivel depende de cada herramienta."
  },
  "t39": {
    "en": "Systems",
    "es": "Sistemas"
  },
  "t40": {
    "en": "Administration & support",
    "es": "Administración y soporte"
  },
  "t41": {
    "en": "Networking",
    "es": "Redes"
  },
  "t42": {
    "en": "Connectivity & infrastructure",
    "es": "Conectividad e infraestructura"
  },
  "t43": {
    "en": "Programming & data",
    "es": "Programación y datos"
  },
  "t44": {
    "en": "Development & queries",
    "es": "Desarrollo y consultas"
  },
  "t45": {
    "en": "Automation & tools",
    "es": "Automatización y herramientas"
  },
  "t46": {
    "en": "Digital processes",
    "es": "Procesos digitales"
  },
  "t47": {
    "en": "03 / PROJECTS",
    "es": "03 / PROYECTOS"
  },
  "t48": {
    "en": "Learn by building.",
    "es": "Aprender haciendo."
  },
  "t49": {
    "en": "Academic and personal projects that show my progress in infrastructure, programming and development.",
    "es": "Proyectos académicos y personales que muestran mi progreso en infraestructura, programación y desarrollo."
  },
  "t50": {
    "en": "INFRASTRUCTURE · NETWORKING",
    "es": "INFRAESTRUCTURA · REDES"
  },
  "t51": {
    "en": "Enterprise Network & IoT Labs",
    "es": "Enterprise Network & IoT Labs"
  },
  "t52": {
    "en": "Networking labs with VLANs, IP addressing, routers and switches, ASA 5505 firewall and services such as DHCP, DNS and FTP, including an IoT device topology.",
    "es": "Prácticas de redes con VLAN, direccionamiento IP, routers y switches, firewall ASA 5505 y servicios como DHCP, DNS y FTP, incluyendo una topología con dispositivos IoT."
  },
  "t53": {
    "en": "View projects on GitHub <span>↗</span>",
    "es": "Ver proyectos en GitHub <span>↗</span>"
  },
  "t54": {
    "en": "DEVELOPMENT · FINANCE",
    "es": "DESARROLLO · FINANZAS"
  },
  "t55": {
    "en": "Personal application to organise income and expenses, track monthly budgets and visualise an investment portfolio.",
    "es": "Aplicación personal para organizar ingresos y gastos, controlar presupuestos mensuales y visualizar una cartera de inversión."
  },
  "t56": {
    "en": "App",
    "es": "App"
  },
  "t57": {
    "en": "Finance",
    "es": "Finanzas"
  },
  "t58": {
    "en": "Portfolio",
    "es": "Portfolio"
  },
  "t59": {
    "en": "Explore repository <span>↗</span>",
    "es": "Explorar repositorio <span>↗</span>"
  },
  "t60": {
    "en": "PROGRAMMING · DATA",
    "es": "PROGRAMACIÓN · DATOS"
  },
  "t61": {
    "en": "Programming exercises, SQL/PLSQL queries and web development projects to strengthen fundamentals and good practices.",
    "es": "Ejercicios de programación, consultas SQL/PLSQL y proyectos de desarrollo web para consolidar fundamentos y buenas prácticas."
  },
  "t62": {
    "en": "View repositories <span>↗</span>",
    "es": "Ver repositorios <span>↗</span>"
  },
  "t63": {
    "en": "TELEMETRY · CLOUD · MOTORSPORT",
    "es": "TELEMETRÍA · CLOUD · MOTORSPORT"
  },
  "t64": {
    "en": "TFG idea: generate telemetry with Python and study different cloud platforms for ingestion, storage and analysis. Project in planning stage.",
    "es": "Idea de TFG: generar telemetría con Python y estudiar distintas plataformas cloud para su ingesta, almacenamiento y análisis. Proyecto en fase de planificación."
  },
  "t65": {
    "en": "Upcoming project <span>↗</span>",
    "es": "Próximo proyecto <span>↗</span>"
  },
  "t66": {
    "en": "Want to review the code?",
    "es": "¿Quieres revisar el código?"
  },
  "t67": {
    "en": "Visit my GitHub ↗",
    "es": "Visitar mi GitHub ↗"
  },
  "t68": {
    "en": "04 / EXPERIENCE",
    "es": "04 / EXPERIENCIA"
  },
  "t69": {
    "en": "Practical experience.",
    "es": "Experiencia práctica."
  },
  "t70": {
    "en": "Applied learning in IT support, maintenance and digital tools.",
    "es": "Aprendizaje aplicado en soporte informático, mantenimiento y herramientas digitales."
  },
  "t71": {
    "en": "Internship · Impulsa Energía",
    "es": "Prácticas · Impulsa Energía"
  },
  "t72": {
    "en": "WEB & AUTOMATION",
    "es": "WEB & AUTOMATIZACIÓN"
  },
  "t73": {
    "en": "Web development and maintenance, content updates, functional checks and support with incident resolution. I also work with Make automations, information management in Airtable and email marketing campaigns with Brevo.",
    "es": "Desarrollo y mantenimiento web, actualización de contenidos, revisión funcional y apoyo en la resolución de incidencias. También trabajo con automatizaciones mediante Make, gestión de información en Airtable y campañas de email marketing con Brevo."
  },
  "t74": {
    "en": "Internship · Galapagar Town Hall",
    "es": "Prácticas · Ayuntamiento de Galapagar"
  },
  "t75": {
    "en": "IT SUPPORT",
    "es": "IT SUPPORT"
  },
  "t76": {
    "en": "User support, equipment maintenance and repair, configuration tasks and IT incident resolution. Practical experience with Active Directory, network connectivity and VPN configuration.",
    "es": "Soporte a usuarios, mantenimiento y reparación de equipos, tareas de configuración y resolución de incidencias informáticas. Experiencia práctica con Active Directory, conectividad de red y configuración de VPN."
  },
  "t77": {
    "en": "05 / CONTINUOUS LEARNING",
    "es": "05 / FORMACIÓN CONTINUA"
  },
  "t78": {
    "en": "Learning is part of the job.",
    "es": "Aprender es parte del trabajo."
  },
  "t79": {
    "en": "Additional training in networking, cybersecurity, artificial intelligence and systems.",
    "es": "Formación complementaria en redes, ciberseguridad, inteligencia artificial y sistemas."
  },
  "t80": {
    "en": "View LinkedIn profile & training ↗",
    "es": "Ver perfil y formación en LinkedIn ↗"
  },
  "t81": {
    "en": "06 / CONTACT",
    "es": "06 / CONTACTO"
  },
  "t82": {
    "en": "Let’s talk about<br><span>technology.</span>",
    "es": "Hablemos de<br><span>tecnología.</span>"
  },
  "t83": {
    "en": "I’m building my path in IT, systems and networking. If you work in technology or motorsport, I’d be happy to connect and learn.",
    "es": "Estoy construyendo mi camino en IT, sistemas y redes. Si trabajas en tecnología o motorsport, estaré encantado de conectar y aprender."
  },
  "t84": {
    "en": "Connect on LinkedIn ↗",
    "es": "Conectar en LinkedIn ↗"
  },
  "t85": {
    "en": "View GitHub ↗",
    "es": "Ver GitHub ↗"
  },
  "t86": {
    "en": "MADRID, SPAIN · OPEN TO LEARNING",
    "es": "MADRID, ESPAÑA · ABIERTO A APRENDER"
  },
  "t87": {
    "en": "<span class=\"brand-mark\">IP</span><span>IGNACIO PÉREZ<span class=\"brand-sub\">IT PORTFOLIO</span></span>",
    "es": "<span class=\"brand-mark\">IP</span><span>IGNACIO PÉREZ<span class=\"brand-sub\">IT PORTFOLIO</span></span>"
  },
  "t88": {
    "en": "Built to document progress, one project at a time.",
    "es": "Diseñado para documentar el progreso, proyecto a proyecto."
  },
  "t89": {
    "en": "BACK TO TOP ↑",
    "es": "VOLVER ARRIBA ↑"
  }
}
;

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[key] && translations[key][lang] !== undefined) {
      el.innerHTML = translations[key][lang];
    }
  });

  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-button').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('portfolio-language', lang);
}

document.querySelectorAll('.lang-button').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem('portfolio-language');
setLanguage(savedLanguage === 'es' ? 'es' : 'en');

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
