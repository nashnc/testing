 function openPaytm() {
    // UPI URL for Paytm
    const paytmURL = "upi://pay?pa=nash.nc@paytm&pn=Nash";

    // Attempt to open Paytm
    window.location.href = paytmURL;

    // Fallback for mobile browsers
    setTimeout(function () {
      // If Paytm app doesn't open, you can redirect to a fallback URL
      // window.location.href = "https://your-fallback-url.com";
    }, 1000);
  }