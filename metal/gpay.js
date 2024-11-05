 function openGPay() {
    // UPI URL for Google Pay
    const gpayURL = "upi://pay?pa=nash.nc@apl&pn=Nash";

    // Attempt to open Google Pay
    window.location.href = gpayURL;

    // Fallback for mobile browsers
    setTimeout(function () {
      // If Google Pay app doesn't open, you can redirect to a fallback URL
      // window.location.href = "https://your-fallback-url.com";
    }, 1000);
  }