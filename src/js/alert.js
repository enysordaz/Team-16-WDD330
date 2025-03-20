class Alert {
    constructor() {
      this.alerts = [];
    }
  
    async init() {
      try {
        const response = await fetch('alerts.json');
        
        if (!response.ok) {
          console.error('Failed to load alerts.json');
          return;
        }
        
        this.alerts = await response.json();
        
        if (this.alerts && this.alerts.length > 0) {
          this.render();
        }
      } catch (error) {
        console.error('Error loading alerts:', error);
      }
    }
  
    render() {
      const main = document.querySelector('main');
      if (!main) {
        console.error('Main element not found');
        return;
      }
  
      // Create alert section
      const alertSection = document.createElement('section');
      alertSection.className = 'alert-list';
  
      // Loop through alerts and create elements
      this.alerts.forEach(alert => {
        const alertElement = document.createElement('p');
        alertElement.textContent = alert.message;
        alertElement.style.backgroundColor = alert.background || 'darkblue';
        alertElement.style.color = alert.color || 'white';
        alertElement.style.padding = '10px';
        alertElement.style.margin = '5px 0';
        
        alertSection.appendChild(alertElement);
        ,
      });
  
      // Prepend to main element
      main.prepend(alertSection);
    }
  }
  
  export default Alert;