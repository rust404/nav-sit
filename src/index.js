class Site {
  constructor() {
    this.siteArr = [
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
      {
        title: "百度",
        url: "https://www.baidu.com",
        desc: "搜索引擎",
      },
      {
        title: "bilibili",
        url: "https://www.bilibili.com",
        desc: "二次元网站",
      },
    ];
    this.loadSites();
    this.renderSites();
  }
  addSite(title, url, desc) {
    this.siteArr.push({
      title,
      url,
      desc,
    });
    this.renderSites();
  }
  loadSites() {
    if (window.localStorage.sites) {
      const arr = JSON.parse(window.localStorage.sites);
      if (Array.isArray(arr)) {
        this.siteArr = arr;
      }
    }
  }
  removeSite(index) {
    this.siteArr.splice(index, 1);
    this.renderSites();
  }
  saveSites() {
    window.localStorage.sites = JSON.stringify(this.siteArr);
  }
  clearCache() {
    window.localStorage.sites = "";
  }
  renderSites() {
    const content = this.siteArr
      .map(({ title, url, desc }) => {
        return `
        <li class="site">
          <div class="site-wrapper">
            <div class="site-content">
              <div class="site-head">
                <img
                  src="${url}/favicon.ico"
                  alt=""
                  class="site-img"
                />
                <span class="site-title">${title}</span>
              </div>
              <p class="site-desc">${desc}</p>
            </div>
            <div class="site-delete-mobile-btn">删除</div>
          </div>
        </li>`;
      })
      .join("\n");
    $(".site-list .add-site").siblings().remove().end().before(content);
  }
}

function loadBackgroundImage() {
  const height = $(window).height();
  const width = $(window).width();
  console.log(width, height);
  const topic = "universe";
  const url = `https://source.unsplash.com/${width}x${height}/?${topic}`;
  const img = new Image();
  img.src = url;
  img.onload = () => {
    $("#bgImage").attr("src", url).fadeIn();
    console.log("loaded");
  };
}
s = new Site();
function bindEvent() {
  bindAddSiteEvent();
  bindRemoveSiteEvent();
  function bindAddSiteEvent() {
    $(".add-site").on("click", function (e) {
      const title = window.prompt("请输入网站标题");
      if (!title) return;
      const url = window.prompt("请输入网站地址");
      if (!url) return;
      const desc = window.prompt("请输入网站描述");
      if (!desc) return;
      s.addSite(title, url, desc);
    });
  }
  function bindRemoveSiteEvent() {
    let isTouching = false;
    let isSlided = false;
    let originX;
    let deltaXRec;
    const LIMIT = $(".site-wrapper").width() / 2;
    $(".site-wrapper")
      .on("touchstart", function (e) {
        console.log("start");
        const left = parseInt($(this).css("left"));
        isSlided = Math.abs(left) === LIMIT;
        isTouching = true;
        originX = e.touches[0].clientX;
        $(this).removeClass("animate");
      })
      .on("touchmove", function (e) {
        const curX = e.touches[0].clientX;
        const deltaX = curX - originX;
        console.log("move", deltaX);
        console.log("isSlide", isSlided);
        if (isSlided) {
          if (deltaX < LIMIT && deltaX > 0) {
            $(this).css("left", `${-LIMIT + deltaX}px`);
          }
        } else {
          if (deltaX > -LIMIT && deltaX < 0) {
            $(this).css("left", `${deltaX}px`);
          }
        }
        deltaXRec = deltaX;
      })
      .on("touchend", function (e) {
        isTouching = false;
        $(this).addClass("animate");
        // 幅度不够
        if (Math.abs(deltaXRec) < LIMIT * 0.9) {
          $(this).css("left", isSlided ? `${-LIMIT}px` : `0px`);
        } else {
          $(this).css("left", isSlided ? `0px` : `${-LIMIT}px`);
        }
      });
  }
}
bindEvent();
// loadBackgroundImage();
