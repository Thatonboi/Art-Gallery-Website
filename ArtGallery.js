
 const overlay = document.getElementById('overlay');
 const overlayImage = document.getElementById('overlayImage');
 const overlayTitle = document.getElementById('overlayTitle');
 const overlayDesc = document.getElementById('overlayDesc');

 const overlayText = document.getElementById('overlayText')

 const titleWrap = document.querySelectorAll('.title-wrap')
 
titleWrap.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img'); 


    overlay.style.display = 'flex';
    overlayImage.src = img.src;

     overlayImage.onload = () => {
          const imgHeight = overlayImage.getBoundingClientRect().height;
          overlayText.style.height = imgHeight + "px";
        };

    overlayTitle.textContent = img.dataset.title || "Untitled";
    overlayDesc.textContent = img.dataset.desc || "No description available.";
  });
});


    overlay.addEventListener('click', (e) => {
        if ((e.target !== overlayImage)&&(e.target !== overlayText)) {
        overlay.style.display = 'none';
      }
    });

    document.addEventListener('keydown',(e)=>{ 
      if(overlay.style.display = 'flex') 
        if(e.key==='Escape')
        {overlay.style.display = 'none';
      } })

  
  //Using dataset to add title to the literal bottom of the images
  
  // document.querySelectorAll('.gallery img').forEach(img=>{
  // const wrapper = document.createElement('figure');
  // const caption = document.createElement('figcaption');
  // caption.textContent = img.dataset.title;
  
  // img.parentNode.insertBefore(wrapper, img);
  // wrapper.appendChild(img);
  // wrapper.appendChild(caption); 
  //});

  //Clean up filter
const buttons = document.querySelectorAll('.tags button');
const items = document.querySelectorAll('.gallery .title-wrap');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Active button highlight
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter').toLowerCase();

    items.forEach(item => {
      const img = item.querySelector('img');
      const tagsAttr = img.getAttribute('data-tags') || "";
      const tags = tagsAttr
        .split(/[\s,]+/)   // split by comma or space
        .map(t => t.toLowerCase());

      if (filter === "all" || tags.includes(filter)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});
