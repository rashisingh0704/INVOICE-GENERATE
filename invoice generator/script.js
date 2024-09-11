window.onload = function() {
    const today = new Date().toISOString().slice(0, 10);
    document.getElementById('date').value = today;
  }
  
  function generateInvoice() {
    const awbNo = document.getElementById('awbNo').value;
    const consignee = document.getElementById('consignee').value;
    const destination = document.getElementById('destination').value;
    const net = parseFloat(document.getElementById('net').value) || 0;
    const networkNo = document.getElementById('networkNo').value;
    const ds = document.getElementById('ds').value;
    const pcs = parseInt(document.getElementById('pcs').value) || 0;
    const weight = parseFloat(document.getElementById('weight').value) || 0;
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const covidCharge = parseFloat(document.getElementById('covidCharge').value) || 0;
    const fuelCharge = parseFloat(document.getElementById('fuelCharge').value) || 0;
    
    const grandTotal = amount + covidCharge + fuelCharge;
  
    const summary = `
      <strong>Invoice Details</strong><br>
      <strong>AWB No:</strong> ${awbNo}<br>
      <strong>Consignee:</strong> ${consignee}<br>
      <strong>Destination:</strong> ${destination}<br>
      <strong>Net:</strong> ${net}<br>
      <strong>Network No:</strong> ${networkNo}<br>
      <strong>D/S:</strong> ${ds}<br>
      <strong>Pcs:</strong> ${pcs}<br>
      <strong>Weight:</strong> ${weight}<br>
      <strong>Amount:</strong> $${amount.toFixed(2)}<br>
      <strong>COVID Charge:</strong> $${covidCharge.toFixed(2)}<br>
      <strong>Fuel Charge:</strong> $${fuelCharge.toFixed(2)}<br>
      <strong>Grand Total:</strong> $${grandTotal.toFixed(2)}<br>
      <strong>Date:</strong> ${document.getElementById('date').value}
    `;
  
    document.getElementById('summary').innerHTML = summary;
  }