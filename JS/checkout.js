document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const checkoutSummary = document.getElementById("checkout-summary");

  // Initialize overall total (subtotal)
  let overallTotal = 0;

  if (cart.length === 0) {
    checkoutSummary.innerHTML = "<p>Your cart is empty!</p>";
  } else {
    let summaryHTML = "<ul>";
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      summaryHTML += `${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}<br/>`;
      overallTotal += itemTotal;
    });
    summaryHTML += "</ul>";

    // Calculate discount, tax, and grand total
    const discount = overallTotal * 0.10; // 10% discount
    const tax = (overallTotal - discount) * 0.06; // 6% tax on discounted amount
    const grandTotal = overallTotal - discount + tax;

    summaryHTML += `<h3>Grand Total: $${grandTotal.toFixed(2)}</h3>`;
    checkoutSummary.innerHTML = summaryHTML;
  }

  // Cancel button returns to the cart page
  document.getElementById("cancel").addEventListener("click", () => {
    window.location.href = "cart.html";
  });

  // Handle shipping details form submission (Confirm checkout)
  document.getElementById("shippingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get shipping details from the form
    const shipName = document.getElementById("shipName").value.trim();
    const address = document.getElementById("address").value.trim();
    const shipPhone = document.getElementById("shipPhone").value.trim();
  
    // Retrieve current user information (full object)
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  
    // Create an invoice object with shipping details, cart summary, and buyer info
    const discount = overallTotal * 0.10;
    const tax = (overallTotal - discount) * 0.06;
    const grandTotal = overallTotal - discount + tax;
    
    const invoice = {
      shippingDetails: {
        name: shipName,
        address: address,
        phone: shipPhone
      },
      buyer: currentUser, // includes TRN, full name
      cart: cart,          // cart retrieved earlier
      total: grandTotal.toFixed(2), // final grand total
      date: new Date().toISOString(),
      invoiceNumber: "INV-" + Date.now()
    };
  
    // Save the invoice to localStorage for immediate use (if needed)
    localStorage.setItem("invoice", JSON.stringify(invoice));

  
    // Update the RegistrationData for the current user:
    if (currentUser.trn) {
      // Retrieve all registered users
      let registrationData = JSON.parse(localStorage.getItem("RegistrationData")) || [];
      // Find the current user's record using the unique TRN
      const userIndex = registrationData.findIndex(user => user.trn === currentUser.trn);
      if (userIndex !== -1) {
        // Initialize the invoices array if it doesn't exist
        if (!registrationData[userIndex].invoices) {
          registrationData[userIndex].invoices = [];
        }
        // Append the new invoice to the user's invoices array
        registrationData[userIndex].invoices.push(invoice);
        // Update the stored RegistrationData
        localStorage.setItem("RegistrationData", JSON.stringify(registrationData));
        
        // Update the currentUser record to reflect the change
        localStorage.setItem("currentUser", JSON.stringify(registrationData[userIndex]));
      }
    }
  
    // Clear the cart after checkout is confirmed
    localStorage.removeItem("cart");
  
    // Redirect to the invoice page
    window.location.href = "invoice.html";
  });    
});
