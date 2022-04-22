function redirect() {
  var input = document.getElementById("product_name").value
  switch (input) {
    case "lipstick":
      location.href = "lipstick.html";
      break;
    case 'compact':
      location.href = "compact.html";
      break;
    case "brush":
      location.href = "brush.html";
      break;
      case "eyeliner":
        location.href = "eyeliner.html";
        break;
        case "nail polish":
          location.href = "nail.html";
          break;
          case "eye lash":
            location.href = "eyelash.html";
            break;
          
    default:
      location.href = "404.html";
      break;
  }
}
