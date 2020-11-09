window.onload = function() {
  let style = `
<style>
   .light_diagram {
      margin: 10px 0 15px;
   }
   
   .prod_desc .ui-tabs-nav, #tabs > ul > li {
      display:flex !important;
   }
   
   .description h3 {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin: 10px 0;
   }
   
   .insert-spec {
    text-align: center;
   }
   .insert-spec {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   .insert-spec table {
      width: auto !important;
      margin: 10px auto;
   }
   .flx {
     display:flex;
     height: 80px;
     justify-content: center;
     align-items: center;
   }
   .flx img {
     margin: 10px;
   }
   .flx img:first-child {
     width: 120px;
   }
   
   .flx img:last-child {
     width: 120px;
     height: 60px;
   }
</style>
`
  
  document.body.insertAdjacentHTML('afterbegin', style);
  function switchSvg() {
    let img = document.querySelector('.light_diagram');
    switch (select.value) {
      case 'Combo':
        img.setAttribute('src', 'https://i.ibb.co/ZgtbtW9/combo.png');
        break;
      case 'Flood':
        img.setAttribute('src', 'https://i.ibb.co/F393cst/flood.png');
        break;
      case 'Spot':
        img.setAttribute('src', 'https://i.ibb.co/S3D9jnR/spot.png');
        break;
      default:
        '';
    }
  }
  
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - PDP_spread',
    'eventAction': 'Click on Optics buttons'
  });

  let select = document.querySelector('.variations .selector-wrapper>.selector-wrapper');
  console.log(select);
  if (select) {
    document.querySelectorAll('.variations .selector-wrapper>.selector-wrapper').forEach((item) => {
      console.log(item.querySelector('select').value.toLowerCase())
      if (item.querySelector('select').value.toLowerCase() === 'combo' ||
          item.querySelector('select').value.toLowerCase() === 'flood' ||
          item.querySelector('select').value.toLowerCase() === 'spot') {
        select = item.querySelector('select');
        switch (select.value) {
          case 'Combo':
            select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram" src="https://i.ibb.co/ZgtbtW9/combo.png" alt="variant">');
            break;
          case 'Flood':
            select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram"  src="https://i.ibb.co/F393cst/flood.png" alt="variant">');
            break;
          case 'Spot':
            select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram"  src="https://i.ibb.co/S3D9jnR/spot.png" alt="variant">');
            break;
          default:
            '';
        }
        select.addEventListener('change', switchSvg);
      }
    });
  }

  let specs = false;
  document.querySelectorAll('.prod_desc .description>ul li a').forEach((item, i) => {
    if (item.innerText === 'Specs') {
      document.querySelector(`.prod_desc .description ul li:nth-child(${i + 1})`).style.order = '4';
      item.innerText = 'Installation Guide';
      let pic = document.querySelector('.two-pic').innerHTML;
      document.querySelector('.two-pic').remove();
      let specBlock;
      if (document.querySelector(`.description>*:nth-child(${i + 2})`)) {
        specBlock = document.querySelector(`.description>*:nth-child(${i + 2})`).innerHTML;
        document.querySelector(`.description>*:nth-child(${i + 2})`).innerHTML = '<h3>Installation guide will be added soon.</h3>';
      }
      let insertBlock = `
          <h3>Specifications:</h3>
          <div class="insert-spec">
             ${specBlock}
             <div class="flx">
             ${pic}
             </div>
          </div>
          <h3>Overview:</h3>
      `
      document.querySelector('.prod_desc .description>ul li:nth-child(1) a').innerText = 'Specs & Overview';

      document.querySelector('.description>*:nth-child(2)').insertAdjacentHTML('afterbegin', insertBlock);
      specs = true;
    }
  })


  if (!specs && document.querySelectorAll('.prod_desc .description>ul li').length === 3) {
    let li4 = document.querySelector('.prod_desc .description>ul li:last-child').cloneNode(true);
    li4.querySelector('a').innerText = 'Installation Guide';
    li4.querySelector('a').setAttribute('href', '#tabs-5')
    let div4 = document.querySelector('.description>*:last-child').cloneNode(true);
    div4.id = 'tabs-5';
    div4.innerHTML = '<h3>Installation guide will be added soon.</h3>';
    document.querySelector('.prod_desc .description>ul').appendChild(li4);
    document.querySelector('.prod_desc .description').appendChild(div4);
  }

//scripts

  (function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
      (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = {hjid: 1831568, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  window.hj = window.hj || function () {
    (hj.q = hj.q || []).push(arguments)
  };
  hj('trigger', 'PDP_spread');

  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - PDP_spread',
    'eventAction': 'loaded'
  });

  document.querySelectorAll('.owl-buttons>div').forEach((item) => {
    item.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - PDP_spread',
        'eventAction': 'Click on slider arrows'
      });
    });
  })
  
  document.querySelectorAll('.owl-item').forEach((item) => {
    item.addEventListener('click', function () {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - PDP_spread',
        'eventAction': 'Click on slider images'
      });
    });
  })

  document.querySelector('#addToCart').addEventListener('click', function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp - PDP_spread',
      'eventAction': 'Click on Add to Cart'
    });
  });

  document.querySelectorAll('.prod_desc .description>ul li').forEach((item) => {
    item.addEventListener('click', function () {
      let title = item.querySelector('a').innerText;
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - New PDP',
        'eventAction': 'Click on product tabs',
        'eventLabel': `${title}`
      });
    })
  })
}

