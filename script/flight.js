function submitFlight() {
    const flight = document.getElementById("flight").value;
    document.cookie = "flight=" + flight;
    analytics.identify({flight:flight});
    analytics.track('Flight added', {
      flight: flight
    });
  }