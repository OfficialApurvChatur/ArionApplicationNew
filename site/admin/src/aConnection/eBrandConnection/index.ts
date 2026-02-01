const brandConnection = {
  aBrandID: "arion",
  bBrandName: "Arion",

  cFrontendApplicationName: "Arion Frontend",
  dAdministrationApplicationName: "Arion Administration",
  eBackendApplicationName: "Arion Backend",

  fFrontendApplicationURL: "https://arion-frontend-v02.netlify.app",
  gAdminApplicationURL: "https://arion-admin-v02.netlify.app",
  hBackendApplicationURL: "https://arion-backend-v02.netlify.app",

  iEmailName: "@arion.com",

  jInstagramURL: "https://www.google.com/",
  kXURL: "https://www.google.com/",
  lThreadsURL: "https://www.google.com/",
  mLinkedinURL: "https://www.google.com/",
  nGithubURL: "https://www.google.com/",

  get oBackendBaseURL() {
    return import.meta.env.VITE_ENVIRONMENT === "Production"
      ? this.qBackendProductionURL
      : this.pBackendLocalURL;
  },
  pBackendLocalURL: "http://localhost:8000",
  qBackendProductionURL: "https://arion-backend-v02.onrender.com",

  get rFrontendBaseURL() {
    return import.meta.env.VITE_ENVIRONMENT === "Production" ? [ 
      this.tFrontendProductionURL1, 
      this.tFrontendProductionURL2, 
    ] : [ 
      this.sFrontendLocalURL1, 
      this.sFrontendLocalURL2,
      this.sFrontendLocalURL3,
      this.sFrontendLocalURL4,
      this.sFrontendLocalURL5,
      this.sFrontendLocalURL6,
      this.sFrontendLocalURL7,
      this.sFrontendLocalURL8,
      this.sFrontendLocalURL9,
    ];
  },
  sFrontendLocalURL1: "http://localhost:5173",
  sFrontendLocalURL2: "http://localhost:5174",
  sFrontendLocalURL3: "http://localhost:5175",
  sFrontendLocalURL4: "http://localhost:5176",
  sFrontendLocalURL5: "http://localhost:5177",
  sFrontendLocalURL6: "http://localhost:5178",
  sFrontendLocalURL7: "http://localhost:5179",
  sFrontendLocalURL8: "http://localhost:5180",
  sFrontendLocalURL9: "http://localhost:5181",
  tFrontendProductionURL1: "https://arion-admin-v02.netlify.app",
  tFrontendProductionURL2: "https://arion-frontend-v02.netlify.app",

  uTagName: "Empowering Admin Control, Unleashing Efficiency",

  vMainApplication: "Arion Application",
  vFrontendApplication: "Arion Application (Frontend)",
  vAdminApplication: "Arion Application (Admin)",
  vBackendApplication: "Arion Application (Backend)",
}

export default brandConnection;
