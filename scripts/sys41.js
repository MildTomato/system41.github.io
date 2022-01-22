//prep
var itsp = {
  user: {},
  system: {}
};
itsp.system.version = '0.1'

//Remove right-click functionality
document.addEventListener("contextmenu", function(evt) {
  evt.preventDefault();
});

/*function $window(title, body) {
  console.error("Not implemented");
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool"
  });
}*/

function $error(reason, report, time) {
  if (report) {
    //var footererror = 'Report this error<a href="/bugs"> here</a>';
    var denybutton = true;
    var denybuttontexts = "Report";
    var confirmbuttontexts = "Ignore";
  } else {
    //var footererror = null;
    var confirmbuttontexts = "Close";
  }
  if (time) {
    var seconds = time * 1000; //timer counts in milliseconds, but input should be in seconds. thus, decimals are supported
  } else {
    var seconds = null;
  }
  Swal.fire({
    titleText: "An error ocurred",
    text: reason,
    icon: "none",
    confirmButtonText: confirmbuttontexts,
    showDenyButton: denybutton,
    denyButtonText: denybuttontexts,
    timerProgressBar: true,
    timer: seconds,
    //footer: footererror,
    imageUrl: "/icons/msg_error-0.png",
    imageWidth: 50,
    imageHeight: 50,
    imageAlt: "Error icon"
  }).then(result => {
    if (result.isDenied) {
      location.href = "/bugs";
    }
  });
}

//Browser detector
var nav = navigator.userAgent;
itsp.user.navigatorFull = navigator.userAgent;
if (nav.indexOf("Firefox") > -1) {
  itsp.user.navigator = "Mozilla Firefox";
} else if (nav.indexOf("SamsungBrowser") > -1) {
  itsp.user.navigator = "Samsung Internet";
} else if (nav.indexOf("Opera") > -1 || nav.indexOf("OPR") > -1) {
  itsp.user.navigator = "Opera";
} else if (nav.indexOf("Trident") > -1) {
  itsp.user.navigator = "Microsoft Internet Explorer";
} else if (nav.indexOf("Edge") > -1) {
  itsp.user.navigator = "Microsoft Edge (Legacy)";
} else if (nav.indexOf("Edg") > -1) {
  itsp.user.navigator = "Microsoft Edge";
} else if (nav.indexOf("Chrome") > -1) {
  itsp.user.navigator = "Chrome/Chromium";
} else if (nav.indexOf("Safari") > -1) {
  itsp.user.navigator = "Apple Safari";
} else {
  itsp.user.navigator = "unknown";
}

function $window(html, title) {
      var winMain = document.createElement("div");
      var titleBar = document.createElement("div");
      var titleBarText = document.createElement("div");
      var titleBarIcon = null; //for now
      var titleBarControls = document.createElement("div");
      var titleBarControlsMinimize = document.createElement("button");
      var titleBarControlsMaximize = document.createElement("button");
      var titleBarControlsClose = document.createElement("button");
      var winContent = document.createElement("div");

      titleBar.append(winMain);
      winContent.append(winMain);
      titleBarText.append(titleBar);
      titleBarControls.append(titleBar);
      titleBarControlsMaximize.append(titleBarControls);
      titleBarControlsMinimize.append(titleBarControls);
      titleBarControls.append(titleBarControlsClose);

      titleBar.classList.add("title-bar");
      titleBarText.classList.add("title-bar-text");
      titleBarText.innerText = title;
      titleBarControls.classList.add("title-bar-controls");
      titleBarControlsClose.setAttribute("aria-label", "Close");
      titleBarControlsMaximize.setAttribute("aria-label", "Maximize");
      titleBarControlsMinimize.setAttribute("aria-label", "Minimize");
      winContent = html;
      winContent.classList.add("window-body");

      winMain.appendChild(document.body);
        winMain.draggable();
        winMain.resizable();
    },

$(".title-bar-controls div [aria-label="Close"] button").on("click", function(){this.parentNode.removeChild(this)})
