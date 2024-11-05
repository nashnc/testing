
  function openSuperMoney() {
    // UPI URL for Super Money
    const superMoneyURL = "upi://pay?pa=nash.nc@supermoney&pn=Nash";

    // Attempt to open Super Money
    window.location.href = superMoneyURL;

    // Fallback for mobile browsers
    setTimeout(function () {
      // If Super Money app doesn't open, you can redirect to a fallback URL
      // window.location.href = "https://your-fallback-url.com";
    }, 1000);
  }