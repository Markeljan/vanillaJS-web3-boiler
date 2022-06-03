let provider;
let signer;
let account;

document.getElementById("btn-connect").addEventListener("click", fetchAccountData)
document.getElementById("btn-disconnect").addEventListener("click", onDisconnect)

function init() {
    try {
        if(ethereum.isMetaMask && localStorage.getItem("CACHED_PROVIDER") === "TRUE") {
            fetchAccountData();
        };

    } catch (error) {
        console.log("Error connecting to metamask account:\n", error)
        if (window.confirm("Install Metamask to access Web3 Content. \nClick OK to be directed to metamask.io ")) {
          window.open("http://metamask.io", "_blank");
        };
        }
};
    
async function refreshAccountData() {}

async function fetchAccountData() {
    try {
        account = await ethereum.request({method: "eth_requestAccounts"});
        document.getElementById("btn-connect").style.display = "none";
        document.getElementById("btn-disconnect").style.display = "block";
        localStorage.setItem("CACHED_PROVIDER", "TRUE");
    } catch (error) {
        console.log("Error connecting to metamask account:\n", error)
    }

  ethereum.on("accountsChanged", (accounts) => {
      if(accounts[0]) {
        fetchAccountData();
        
      } else {
        console.log("no account");
        localStorage.removeItem("CACHED_PROVIDER");
        document.getElementById("btn-disconnect").style.display = "none";
        document.getElementById("btn-connect").style.display = "block";
      }

  });
  ethereum.on("chainChanged", (chainId) => {
    fetchAccountData();
  });
};

function onDisconnect() {
    alert("To disconnect, open MetaMask and manualy disconnect.")
}

window.addEventListener('load', async () => {
    init();
  });