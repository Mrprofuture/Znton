const mockData = {
  "ABC123": {
    status: "Out for delivery",
    history: [
      "Dispatched from warehouse",
      "Arrived at sorting center",
      "Out for delivery"
    ]
  },
  "XYZ789": {
    status: "Delivered",
    history: [
      "Shipped",
      "In Transit",
      "Delivered"
    ]
  },
  "DEL456": {
    status: "In Transit",
    history: [
      "Order placed",
      "Dispatched",
      "In Transit"
    ]
  }
};

function trackOrder() {
  const trackingNumber = document.getElementById("trackingInput").value.toUpperCase();
  const resultDiv = document.getElementById("trackingResult");
  const statusPara = document.getElementById("orderStatus");
  const historyList = document.getElementById("historyList");

  if (mockData[trackingNumber]) {
    const data = mockData[trackingNumber];
    statusPara.textContent = data.status;
    historyList.innerHTML = "";

    data.history.forEach(event => {
      const li = document.createElement("li");
      li.textContent = event;
      historyList.appendChild(li);
    });

    resultDiv.classList.remove("hidden");
  } else {
    resultDiv.classList.remove("hidden");
    statusPara.textContent = "Tracking number not found.";
    historyList.innerHTML = "";
  }
}
