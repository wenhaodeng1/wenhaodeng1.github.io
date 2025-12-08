const deploy = {
  // 国内
  // https://js.design
  prod: {
    jsServerUrl: "/backend",
    jsStaticUrl: "https://img.js.design",
    jsDataUrl: "https://data.js.design",
    skiaBranch: "online",
    deploySSHVariable: "PROD_SSH_LOGIN",
    deployPathVariable: "PROD_HTML_PATH",
  },
  // 新环境
  //https://dev.geesdev.com
  zdev: {
    jsServerUrl: "/backend",
    jsStaticUrl: "https://static-zdev.xiaopiu.com",
    jsDataUrl: "https://data.geesdev.com",
    skiaBranch: "online",
    deploySSHVariable: "PROD_SSH_LOGIN",
    deployPathVariable: "PROD_HTML_PATH",
  },
  //https://test.geesdev.com
  ztest: {
    jsServerUrl: "/backend",
    jsStaticUrl: "https://static-zdev.xiaopiu.com",
    jsDataUrl: "https://data.geesdev.com",
    skiaBranch: "online",
    deploySSHVariable: "PROD_SSH_LOGIN",
    deployPathVariable: "PROD_HTML_PATH",
  },
  //https://gray.geesdev.com
  zgray: {
    jsServerUrl: "/backend",
    jsStaticUrl: "https://img.js.design",
    jsDataUrl: "https://data.geesdev.com",
    skiaBranch: "online",
    deploySSHVariable: "PROD_SSH_LOGIN",
    deployPathVariable: "PROD_HTML_PATH",
  },
};

const envMap = {
  gray: "zgray",
  test: "ztest",
  prod: "prod",
};

const initPrefix = () => {
  const { host } = window.location;
  if (host.includes("test")) {
    return deploy[envMap.test];
  }
  if (host.includes("gray")) {
    return deploy[envMap.gray];
  }
  return deploy[envMap.prod];
};

// 初始化全局常量
(() => {
  const prefix = initPrefix();
  Object.keys(prefix).forEach((key) => {
    window[key] = prefix[key];
  });
  window.jsUrl = window.location.protocol + "//" + window.location.host;
  window.jsHost = window.location.host;
  window.jsServerUrl = prefix.jsServerUrl;
  window.jsD2CBaseurl = window.jsServerUrl.startsWith('http') ? window.jsServerUrl: window.jsUrl + window.jsServerUrl + '/elements';
})();
