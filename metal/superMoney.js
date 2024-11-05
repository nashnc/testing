
  function openSuperMoney() {
    // UPI URL for Super Money
    const superMoneyURL = "upi://pay?pa=nash.nc@supermoney&pn=Nash";

    // Attempt to open Super Money
    window.location.href = superMoneyURL;

    // Fallback for mobile browsers
    setTimeout(function () {
        window.location.href = "https://play.google.com/store/apps/details?id=com.supermoney.app"; // Replace with actual Super Money app link
      // If Super Money app doesn't open, you can redirect to a fallback URL
      // window.location.href = "https://your-fallback-url.com";
    }, 1000);
  }