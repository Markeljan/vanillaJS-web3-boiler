

function init() {
    
}

async function fetchAccountData() {}

async function refreshAccountData() {}


async function onConnect() {}

async function onDisconnect() {}

window.addEventListener('load', async () => {
    init();
    if(localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) await onConnect();
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  
    document.querySelector("#radio-mumbai").addEventListener("click", function () {switchNetworkMumbai();});
    document.querySelector("#radio-polygon").addEventListener("click", function () {switchNetworkPolygon();}); 
  });