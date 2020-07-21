document.addEventListener("DOMContentLoaded", function () {
  var elems = document.getElementById("add_help_modal");
  var instances = M.Modal.init(elems);
});

function modalClose() {
  var elems = document.getElementById("add_help_modal");
  var instances = M.Modal.init(elems);
  instances.close();
}

class DigiMortgagePorter {
  constructor(url) {
    this.url = "https://dmpapi-bold-reedbuck.cfapps.io";
    //this.url = "http://127.0.0.1:8080";
  }

  async getMortgageDetails(uiSortCode, uiMortgageNo) {
    const resp = await fetch(
      `${this.url}/getMortgageDetails?sortcode=${uiSortCode}&mortgageno=${uiMortgageNo}`
    );
    const data = await resp.json();
    return data;
  }

  async createMortgagePortingRequest(
    requestid,
    accountno,
    sortcode,
    cust1name,
    cust1dob,
    cust2name,
    cust2dob,
    custaddress,
    startdate,
    term,
    openbalance,
    currbalance,
    interest,
    default12mnths,
    propaddress,
    propvalue,
    email,
    phone
  ) {
    const resp = await fetch(
      `${this.url}/createRequest?requestid=${requestid}&accountno=${accountno}&sortcode=${sortcode}&cust1name=${cust1name}&cust1dob=${cust1dob}&cust2name=${cust2name}&cust2dob=${cust2dob}&custaddress=${custaddress}&startdate=${startdate}&term=${term}&openbalance=${openbalance}&currbalance=${currbalance}&interest=${interest}&default12mnths=${default12mnths}&propaddress=${propaddress}&propvalue=${propvalue}&email=${email}&phone=${phone}`
    );
    const data = await resp.json();
    return data;
  }
}

const objDigiMortgagePorter = new DigiMortgagePorter();
const mort_dtls_tbody = document.getElementById("mortgage-details-body");
const card_content = document.getElementById("add-card-content");
document
  .getElementById("get-mortgage-btn")
  .addEventListener("click", getMortgageDetails);

function getMortgageDetails(e) {
  const sortcode = document.getElementById("uiSortCode").value.trim();
  const mortgageno = document.getElementById("uiMortgageNumber").value.trim();
  //card_content.innerHTML = "";
  mort_dtls_tbody.innerHTML = "";
  objDigiMortgagePorter
    .getMortgageDetails(sortcode, mortgageno)
    .then((data) => {
      console.log(data);
      displayMortDetails(data);
    });
  e.preventDefault();
}

function displayMortDetails(data) {
  data.forEach((mortgage) => {
    const tr1 = document.createElement("tr");
    tr1.id = "tr1";
    const td1l = document.createElement("td");
    td1l.appendChild(document.createTextNode("Main Customer Name"));
    tr1.appendChild(td1l);
    const td1d = document.createElement("td");
    td1d.id = "td1d";
    td1d.appendChild(document.createTextNode(mortgage.cust1Name));
    tr1.appendChild(td1d);
    mort_dtls_tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    tr2.id = "tr2";
    const td2l = document.createElement("td");
    td2l.appendChild(document.createTextNode("Main Customer DoB"));
    tr2.appendChild(td2l);
    const td2d = document.createElement("td");
    td2d.id = "td2d";
    td2d.appendChild(document.createTextNode(mortgage.cust1DOB));
    tr2.appendChild(td2d);
    mort_dtls_tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    tr3.id = "tr3";
    const td3l = document.createElement("td");
    td3l.appendChild(document.createTextNode("Joint Customer Name"));
    tr3.appendChild(td3l);
    const td3d = document.createElement("td");
    td3d.id = "td3d";
    td3d.appendChild(document.createTextNode(mortgage.cust1Name));
    tr3.appendChild(td3d);
    mort_dtls_tbody.appendChild(tr3);

    const tr4 = document.createElement("tr");
    tr4.id = "tr4";
    const td4l = document.createElement("td");
    td4l.appendChild(document.createTextNode("Joint Customer DOB"));
    tr4.appendChild(td4l);
    const td4d = document.createElement("td");
    td4d.id = "td4d";
    td4d.appendChild(document.createTextNode(mortgage.cust2DOB));
    tr4.appendChild(td4d);
    mort_dtls_tbody.appendChild(tr4);

    const tr5 = document.createElement("tr");
    tr5.id = "tr5";
    const td5l = document.createElement("td");
    td5l.appendChild(document.createTextNode("Customer Address"));
    tr5.appendChild(td5l);
    const td5d = document.createElement("td");
    td5d.id = "td5d";
    td5d.appendChild(document.createTextNode(mortgage.custAddress));
    tr5.appendChild(td5d);
    mort_dtls_tbody.appendChild(tr5);

    const tr6 = document.createElement("tr");
    tr6.id = "tr6";
    const td6l = document.createElement("td");
    td6l.appendChild(document.createTextNode("Mortgage Start Date"));
    tr6.appendChild(td6l);
    const td6d = document.createElement("td");
    td6d.id = "td6d";
    td6d.appendChild(document.createTextNode(mortgage.startDate));
    tr6.appendChild(td6d);
    mort_dtls_tbody.appendChild(tr6);

    const tr7 = document.createElement("tr");
    tr7.id = "tr7";
    const td7l = document.createElement("td");
    td7l.appendChild(document.createTextNode("Mortgage Term"));
    tr7.appendChild(td7l);
    const td7d = document.createElement("td");
    td7d.id = "td7d";
    td7d.appendChild(document.createTextNode(mortgage.term));
    tr7.appendChild(td7d);
    mort_dtls_tbody.appendChild(tr7);

    const tr8 = document.createElement("tr");
    tr8.id = "tr8";
    const td8l = document.createElement("td");
    td8l.appendChild(document.createTextNode("Interest Rate"));
    tr8.appendChild(td8l);
    const td8d = document.createElement("td");
    td8d.id = "td8d";
    td8d.appendChild(document.createTextNode(mortgage.interest));
    tr8.appendChild(td8d);
    mort_dtls_tbody.appendChild(tr8);

    const tr9 = document.createElement("tr");
    tr9.id = "tr9";
    const td9l = document.createElement("td");
    td9l.appendChild(document.createTextNode("Opening Balance"));
    tr9.appendChild(td9l);
    const td9d = document.createElement("td");
    td9d.id = "td9d";
    td9d.appendChild(document.createTextNode(mortgage.openBalance));
    tr9.appendChild(td9d);
    mort_dtls_tbody.appendChild(tr9);

    const tr10 = document.createElement("tr");
    tr10.id = "tr10";
    const td10l = document.createElement("td");
    td10l.appendChild(document.createTextNode("Current Balance"));
    tr10.appendChild(td10l);
    const td10d = document.createElement("td");
    td10d.id = "td10d";
    td10d.appendChild(document.createTextNode(mortgage.currentBalance));
    tr10.appendChild(td10d);
    mort_dtls_tbody.appendChild(tr10);

    const tr11 = document.createElement("tr");
    tr11.id = "tr11";
    const td11l = document.createElement("td");
    td11l.appendChild(document.createTextNode("Defaults in last 12 months"));
    tr11.appendChild(td11l);
    const td11d = document.createElement("td");
    td11d.id = "td11d";
    td11d.appendChild(document.createTextNode(mortgage.default12months));
    tr11.appendChild(td11d);
    mort_dtls_tbody.appendChild(tr11);

    const tr12 = document.createElement("tr");
    tr12.id = "tr12";
    const td12l = document.createElement("td");
    td12l.appendChild(document.createTextNode("Property Address"));
    tr12.appendChild(td12l);
    const td12d = document.createElement("td");
    td12d.id = "td12d";
    td12d.appendChild(document.createTextNode(mortgage.propAddress));
    tr12.appendChild(td12d);
    mort_dtls_tbody.appendChild(tr12);

    const tr13 = document.createElement("tr");
    tr13.id = "tr13";
    const td13l = document.createElement("td");
    td13l.appendChild(document.createTextNode("Property Value"));
    tr13.appendChild(td13l);
    const td13d = document.createElement("td");
    td13d.id = "td13d";
    td13d.appendChild(document.createTextNode(mortgage.propValue));
    tr13.appendChild(td13d);
    mort_dtls_tbody.appendChild(tr13);
  });

  const tr14 = document.createElement("tr");
  tr14.id = "tr14";
  const td14l = document.createElement("td");
  td14l.appendChild(document.createTextNode("Email"));
  tr14.appendChild(td14l);
  const td14d = document.createElement("td");
  const emailfld = document.createElement("input");
  emailfld.type = "Text";
  emailfld.id = "uiEmail";
  emailfld.name = "ui-email";
  td14d.appendChild(emailfld);
  tr14.appendChild(td14d);
  mort_dtls_tbody.appendChild(tr14);

  const tr15 = document.createElement("tr");
  tr15.id = "tr15";
  const td15l = document.createElement("td");
  td15l.appendChild(document.createTextNode("Phone"));
  tr15.appendChild(td15l);
  const td15d = document.createElement("td");
  const phonefld = document.createElement("input");
  phonefld.type = "Text";
  phonefld.id = "uiPhone";
  phonefld.name = "ui-phone";
  td15d.appendChild(phonefld);
  tr15.appendChild(td15d);
  mort_dtls_tbody.appendChild(tr15);

  const btn1 = document.createElement("button");
  btn1.id = "submit-request";
  btn1.classList = "btn purple darken-3";
  btn1.value = "Submit Request";
  btn1.textContent = "Submit Request";
  btn1.addEventListener("click", createMortgagePortingRequest);

  const tr16 = document.createElement("tr");
  tr16.id = "tr1";
  const td16l = document.createElement("td");
  td16l.appendChild(btn1);
  tr16.appendChild(td16l);
  const td16d = document.createElement("td");
  td16d.appendChild(document.createTextNode(""));
  tr16.appendChild(td16d);
  mort_dtls_tbody.appendChild(tr16);
}

function createMortgagePortingRequest(e) {
  const requestid = Date.now();
  const sortcode = document.getElementById("uiSortCode").value.trim();
  const accountno = document.getElementById("uiMortgageNumber").value.trim();
  const cust1name = document.getElementById("td1d").innerText;
  const cust1dob = document.getElementById("td2d").innerText;
  const cust2name = document.getElementById("td3d").innerText;
  const cust2dob = document.getElementById("td4d").innerText;
  const custaddress = document.getElementById("td5d").innerText;
  const startdate = document.getElementById("td6d").innerText;
  const term = document.getElementById("td7d").innerText;
  const interest = document.getElementById("td8d").innerText;
  const openbalance = document.getElementById("td9d").innerText;
  const currbalance = document.getElementById("td10d").innerText;
  const default12mnths = document.getElementById("td11d").innerText;
  const propaddress = document.getElementById("td12d").innerText;
  const propvalue = document.getElementById("td13d").innerText;
  const email = document.getElementById("uiEmail").value.trim();
  const phone = document.getElementById("uiPhone").value.trim();

  objDigiMortgagePorter
    .createMortgagePortingRequest(
      requestid,
      accountno,
      sortcode,
      cust1name,
      cust1dob,
      cust2name,
      cust2dob,
      custaddress,
      startdate,
      term,
      openbalance,
      currbalance,
      interest,
      default12mnths,
      propaddress,
      propvalue,
      email,
      phone
    )
    .then((data) => {
      console.log(data);
    });

  const cardContent = document.getElementById("row-request");
  cardContent.innerHTML = `<span class="card-title"><b>${requestid} has been created</b>`;
  e.preventDefault();
}
