document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
  
    // Array of list items with links and images
    const listItems = [
      { linkHref: "", imgSrc: "Image/index/dress.png" , text: "Women & Girl Fashion"},
      { linkHref: "", imgSrc: "Image/index/makeover.png" , text: "Health & Beauty"},
      { linkHref: "", imgSrc: "Image/index/wristwatch.png" , text: "Watches, Bags, Jewellery"},
      { linkHref: "", imgSrc: "Image/index/suit.png" , text: "Men's & Boys Fashion"},
      { linkHref: "", imgSrc: "Image/index/mother.png" , text: "Mother & Baby"},
      { linkHref: "", imgSrc: "Image/index/responsive.png" , text: "Electronics Devices"},
      { linkHref: "", imgSrc: "Image/index/tv.png" , text: "TV & Home Appliances"},
      { linkHref: "", imgSrc: "Image/index/grocery-cart.png" , text: "Groceries"},
      { linkHref: "", imgSrc: "Image/index/sofa.png" , text: "Home & Lifestyle"},
    ];
  
    listItems.forEach(function (item) {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = item.linkHref;
      image.src = item.imgSrc;
      const text = document.createTextNode(item.text);
      image.src = item.imgSrc;
      link.appendChild(image);
      listItem.appendChild(link);
      listItem.appendChild(text);
      menu.appendChild(listItem);
    });
  });


  // Form validation
  