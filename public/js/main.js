// $(document).ready(()=> {
// })

let buttonMap = ['hotels', 'food', 'activities'];

buttonMap.forEach(i=> {
  let button = `.show-${i}`,
    section = `.pick.${i}`;
  $(button).click(e=> {
    e.preventDefault();
    $(`.picker .active`).removeClass('active');
    $(button).addClass('active');
    $('.pick').addClass('hidden');
    $(section).removeClass('hidden');
  });
})

let data = $('#all-data dataThings').map((i, el)=> $(el).data());



drawPicker({
  parent: `#planner`,
  content: data
})
