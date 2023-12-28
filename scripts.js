function open1() {
    toggleVisibility('a1', 'b1');
  }
  
  function open2() {
    toggleVisibility('a2', 'b2');
  }
  
  function open3() {
    toggleVisibility('a3', 'b3');
  }
  
  function open4() {
    toggleVisibility('a4', 'b4');
  }
  
  function toggleVisibility(contentId, buttonId) {
    let content = document.getElementById(contentId).style;
    let button = document.getElementById(buttonId);
  
    if (content.display === 'none') {
      content.display = 'block';
      button.style.backgroundImage = "url('./assets/images/icon-minus.svg')";
    } else {
      content.display = 'none';
      button.style.backgroundImage = "url('./assets/images/icon-plus.svg')";
    }
  }
  